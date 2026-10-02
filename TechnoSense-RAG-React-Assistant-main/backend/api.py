from flask import Flask, Response, request, jsonify, stream_with_context
from flask_cors import CORS
from datetime import datetime
from rag_pipeline_pinecone import generate_answer_stream

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

    def generate():
        try:
            yield from generate_answer_stream(query)
        except Exception as e:
            print(f"Error generating answer: {e}")
            yield "\n\nSorry, I encountered an error while processing your question."

    return Response(
        stream_with_context(generate()),
        mimetype="text/plain",
        headers={"Cache-Control": "no-cache, no-transform", "X-Accel-Buffering": "no"},
    )


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "timestamp": datetime.now().isoformat()}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False, use_reloader=False)
