from flask import Flask, request
from flask_cors import CORS
from flask_login import LoginManager, UserMixin, login_user

app = Flask('backend')
app.config.update(
    SECRET_KEY='super_strong_key',
    SESSION_COOKIE_HTTPONLY=True,
    REMEMBER_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Lax',
)
login_manager = LoginManager()
login_manager.init_app(app)
CORS(app)

users = [
    {
        'username': 'hogehoge',
        'email': 'aaa@example.com',
        'password': 'hogehoge',
    },
]


class User(UserMixin):
    def __init__(self, id) -> None:
        super().__init__()
        self.id = id


@login_manager.user_loader
def load_user(user_id):
    return User(user_id)


@app.route('/')
def helloworld():
    return {'hello': 'world'}


@app.route('/login', methods=['POST'])
def login():
    req = request.get_json()
    for user in users:
        if user['email'] == req['email'] and user['password'] == req['password']:
            login_user(User('super_strong_user_id'))
            return {'login': True, 'username': user['username']}
    return {'login': False}
