import os
from dotenv import load_dotenv
from langchain_aws import BedrockEmbeddings, ChatBedrock
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

load_dotenv()

# 1. CONFIGURATION

INDEX_NAME = os.environ["INDEX_NAME"]
PINECONE_API_KEY = os.environ["PINECONE_API_KEY"].strip()

REGION_NAME = "us-east-1"

EMBEDDING_MODEL = "amazon.titan-embed-text-v2:0"

LLM_MODEL = "amazon.nova-micro-v1:0"

TOP_K = 5


# 2. INITIALIZE EMBEDDINGS

embeddings = BedrockEmbeddings(
    model_id=EMBEDDING_MODEL,
    region_name=REGION_NAME
)


# 3. CONNECT TO PINECONE

pinecone = Pinecone(api_key=PINECONE_API_KEY)
INDEX_HOST = pinecone.describe_index(INDEX_NAME).host

vector_store = PineconeVectorStore(
    index_name=INDEX_NAME,
    embedding=embeddings,
    host=INDEX_HOST,
    pinecone_api_key=PINECONE_API_KEY,
)


# 4. INITIALIZE BEDROCK LLM

llm = ChatBedrock(
    model_id=LLM_MODEL,
    region_name=REGION_NAME,
    model_kwargs={
        "temperature": 0.2
    }
)


# 5. RETRIEVE RELEVANT DOCUMENTS

def retrieve_documents(query):

    results = vector_store.similarity_search_with_score(
        query,
        k=TOP_K
    )

    return results



# 6. BUILD CONTEXT FROM RETRIEVED DOCUMENTS

def build_context(results):

    context_parts = []

    for i, (document, score) in enumerate(results, start=1):

        metadata = document.metadata

        title = metadata.get(
            "title",
            "Unknown"
        )

        category = metadata.get(
            "category",
            "Unknown"
        )

        document_id = metadata.get(
            "document_id",
            "Unknown"
        )

        source_file = metadata.get(
            "source_file",
            "Unknown"
        )

        content = document.page_content

        context = f"""
        SOURCE {i}

        Title: {title}
        Category: {category}
        Document ID: {document_id}
        Source File: {source_file}

        Content:
        {content}
        """

        context_parts.append(context)

    return "\n\n".join(context_parts)



# 7. CREATE RAG PROMPT

def create_prompt(query, context):

    prompt = f"""
    You are TechNova, the official AI assistant for TechnoSense NextGen Solutions.
    Answer the user query like a production-grade enterprise chatbot.

    Brand rules:
    - Your name is TechNova.
    - You represent TechnoSense NextGen Solutions (services, solutions, careers, partnerships, and contact guidance).
    - Speak in a clear, professional, and helpful tone.

    Your task is to answer the user's question using ONLY
    the information provided in the CONTEXT below. 

    IMPORTANT RULES:

    1. Do not use outside knowledge, make assumptions or hallucinate.
    2. If the answer cannot be found in the context, clearly say:
        "I don't have enough information in my database to answer that."
    3. Keep answers concise and direct:
        Simple questions: 2–4 short paragraphs.
        Lists: use Markdown bullet points with "- " for each item.
        Steps: use a numbered Markdown list (1. 2. 3.).
        Complex questions: brief intro paragraph, then bullets for details.

    4. Formatting rules (Markdown):
        - Prefer short paragraphs (1–3 sentences each). Put a blank line between paragraphs.
        - When listing services, benefits, steps, or options, ALWAYS use Markdown bullets or numbers — never a comma-separated wall of text.
        - Use **bold** sparingly for key terms only.
        - Do not wrap the whole answer in one giant paragraph.

    5. Answer only what the user asked. Avoid repetition and unnecessary explanations.
    6. Never mention the context, retrieval process, documents or sources.
    7. Maintain a professional, natural and conversational tone.

    
    ==================================================
    USER QUESTION
    ==================================================
    
    {query}


    ==================================================
    CONTEXT
    ==================================================

    {context}

    """

    return prompt



# 8. GENERATE ANSWER

def generate_answer(query):

    results = retrieve_documents(query)

    if not results:

        return (
            "I don't have enough information in my database to answer that. "
            
        )



    # Build context

    context = build_context(results)

    # Create prompt

    prompt = create_prompt(
        query,
        context
    )

    
    # Send prompt to Bedrock

    print("Generating answer...")

    response = llm.invoke(prompt)

    return response.content


