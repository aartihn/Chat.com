from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('message')
def handle_message(data):
    # Send message as a string
    send(f"{data['sender']}: {data['text']}", broadcast=True)


@socketio.on('join')
def handle_join(data):
    # Send join message as a string
    send(f"{data['username']} has joined the chat.", broadcast=True)


@socketio.on('leave')
def handle_leave(data):
    # Send leave message as a string
    send(f"{data['username']} has left the chat.", broadcast=True)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=3000, debug=True)
