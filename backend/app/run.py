from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"], supports_credentials=True)

# Simulated DB
tasks = []

@app.route('/')
def home():
    return "Welcome to the TaskForge API"

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    task_data = request.json
    task_data['id'] = str(uuid.uuid4())  # Assign unique string ID
    task_data['is_deleted'] = False
    tasks.append(task_data)
    return jsonify(task_data), 201

@app.route('/tasks/<task_id>', methods=['PUT'])
def update_task(task_id):
    task_data = request.json
    for task in tasks:
        if task.get('id') == task_id:
            task.update(task_data)
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404

@app.route('/tasks/<task_id>', methods=['DELETE'])
def delete_task(task_id):
    for task in tasks:
        if task.get('id') == task_id:
            task['is_deleted'] = True
            return jsonify({"message": "Task deleted successfully"}), 200
    return jsonify({"error": "Task not found"}), 404

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    return response

if __name__ == '__main__':
    app.run(debug=True)
