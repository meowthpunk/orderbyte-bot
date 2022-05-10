from flask import Flask, render_template, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///s-wear.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    db.create_all()
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='192.168.137.1', port='80')
