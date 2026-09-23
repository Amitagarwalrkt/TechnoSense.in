from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from rag_pipeline_pinecone import generate_answer

app = Flask(__name__)
CORS(app)


@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    if not data or "query" not in data:
        return jsonify({"error": "Missing 'query' field in request body"}), 400

    query = data["query"].strip()
    if not query:
        return jsonify({"error": "Query cannot be empty"}), 400

    try:
        answer = generate_answer(query)
        timestamp = datetime.now().strftime("%I:%M %p")
        return jsonify({
            "role": "assistant",
            "content": answer,
            "timestamp": timestamp
        }), 200
    except Exception as e:
        print(f"Error generating answer: {e}")
        return jsonify({
            "error": "Sorry, I encountered an error while processing your question."
        }), 500


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "timestamp": datetime.now().isoformat()}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False, use_reloader=False)
