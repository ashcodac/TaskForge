from flask import Blueprint, request, jsonify
from ..models.task_model import Task
from .. import mongo

tasks = Blueprint('tasks', __name__)

# Endpoint to create a new task
@tasks.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    new_task = Task(
        title=data['title'],
        description=data['description'],
        due_date=data['due_date'],
        priority=data['priority'],
        status=data['status']
    )
    task_data = new_task.to_dict()

    # Save to MongoDB
    mongo.db.tasks.insert_one(task_data)
    return jsonify({"message": "Task created successfully!"}), 201

# Endpoint to get all tasks
@tasks.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = mongo.db.tasks.find()
    tasks_list = [task for task in tasks]
    return jsonify(tasks_list), 200

# Other endpoints for updating, deleting tasks will follow similarly...
