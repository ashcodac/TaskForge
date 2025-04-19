from flask import Flask, jsonify, request
from flask_cors import CORS
from waitress import serve  # Import Waitress

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from the frontend

tasks = [
    {"id": 1, "title": "Task 1", "completed": False},
    {"id": 2, "title": "Task 2", "completed": False}
]

@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)

@app.route("/tasks", methods=["POST"])
def add_task():
    new_task = request.json
    tasks.append(new_task)
    return jsonify(new_task), 201

if __name__ == "__main__":
    # Use Waitress to serve the app instead of Gunicorn
    serve(app, host="0.0.0.0", port=5000)
