from flask import Flask
from flask_pymongo import PyMongo
from .routes import tasks  # Importing the tasks blueprint

app = Flask(__name__)

# Configuring the MongoDB connection (you'll add your URI here in the config)
app.config["MONGO_URI"] = "mongodb://localhost:27017/taskforge_db"  # Example, change as needed
mongo = PyMongo(app)

# Registering blueprints
app.register_blueprint(tasks)

if __name__ == "__main__":
    app.run(debug=True)
