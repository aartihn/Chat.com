# Chat.com

Chat.com is a real-time, web-based chat application built using **Flask** and **Socket.IO**. It allows users to join a chat room with a username and chat with others instantly in a simple, user-friendly interface.

## Features

- Real-time messaging with **Flask-SocketIO**
- User-friendly login screen with customizable usernames
- Instant message broadcasting to all users in the room
- Leave the chat option with automatic notifications
- Simple and intuitive interface
- Easy setup and deployment

## Project Structure

```
Chat.com/
├── app.py            # Main server file
├── static/
│   ├── css/
│   │   └── style.css  # Stylesheet for the application
│   └── js/
│       └── chat.js    # Frontend JavaScript for handling messaging and events
└── templates/
    └── index.html    # Main HTML file with the chat UI and login screen
```

## Getting Started

### Prerequisites

- Python 3.x
- Flask
- Flask-SocketIO

To install the required dependencies, run:

```bash
pip install Flask Flask-SocketIO
```

### Running the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aartihn/Chat.com.git
   cd Chat.com
   ```

2. **Run the Flask application**:
   ```bash
   python app.py
   ```

3. **Access the application**:
   Open your browser and navigate to [http://127.0.0.1:3000](http://127.0.0.1:3000).

4. **Start chatting!**  
   - Enter a username in the login screen.
   - Click the **Join Chat** button to enter the chat room.
   - Start sending messages and interact with others in real-time!

### Production Deployment

For production deployment, use a WSGI server like **Gunicorn**:

1. **Install Gunicorn**:
   ```bash
   pip install gunicorn
   ```

2. **Run with Gunicorn**:
   ```bash
   gunicorn -w 4 -k gevent app:app
   ```

This will start the app with 4 worker processes and use **gevent** for asynchronous networking.

## File Descriptions

- **`app.py`**: Main server file that handles the backend logic using Flask and Flask-SocketIO to manage real-time chat functionalities.
- **`static/css/style.css`**: Stylesheet for styling the user interface of the chat application.
- **`static/js/chat.js`**: Handles client-side events such as message sending, receiving, and joining/leaving the chat room.
- **`templates/index.html`**: Main HTML file that contains the layout and structure for the login page and chat interface.

## Usage

1. **Join the Chat**: Enter a username in the login screen and click **Join Chat** to enter the chat room.
2. **Send Messages**: Type messages in the input box and press **Enter** or click **Send** to send messages.
3. **Real-Time Updates**: Messages will appear instantly for all connected users in the chat room.
4. **Leave the Chat**: Click the **Leave Chat** button to leave the room. A notification is sent to all users when someone leaves.

## Built With

- [Flask](https://flask.palletsprojects.com/) - A micro web framework for Python.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/) - Enables real-time web functionality in Flask applications using Socket.IO.
- [Socket.IO](https://socket.io/) - A JavaScript library for building real-time web applications.
- [HTML/CSS](https://developer.mozilla.org/en-US/docs/Web/HTML) - The markup and styling used for the chat UI.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Handles real-time events and front-end interactions.

## Contributing

Contributions are welcome! If you want to improve the app, add new features, or fix bugs, feel free to open an issue or submit a pull request.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.
