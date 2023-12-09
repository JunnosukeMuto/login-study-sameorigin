from flask import Flask, request
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required,  current_user

app = Flask('backend')
app.config.update(
    SECRET_KEY='super_strong_key',
    SESSION_COOKIE_HTTPONLY=True,
    REMEMBER_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Strict',
)
login_manager = LoginManager()
login_manager.init_app(app)

users = [
    {
        'id': '11111',
        'username': 'hogehoge',
        'email': 'aaa@example.com',
        'password': 'hogehoge',
    },
]


class User(UserMixin):
    def __init__(self, id: str) -> None:
        super().__init__()
        self.id = id


@login_manager.user_loader
def user_loader(id: str):
    # 引数のidを持つユーザーが存在すればUserオブジェクトを返し、無ければNoneを返す。
    for user in users:
        if user['id'] == id:
            return User(id)
    return None


@app.route('/api/hello')
def helloworld():
    return {'hello': 'world'}


@app.route('/api/login', methods=['POST'])
def login():
    # POSTされたemailとpasswordを持つユーザーが存在すれば、login_userにUserオブジェクトを渡してログインする。
    req = request.get_json()
    for user in users:
        if user['email'] == req['email'] and user['password'] == req['password']:
            login_user(User(user['id']))
            return {'login': True}
    return {'login': False}


@app.route('/api/data')
@login_required
def user_data():
    username = None
    for user in users:
        if current_user.id == user['id']:
            username = user['username']
            break
    return {'username': username}


@app.route("/api/logout")
@login_required
def logout():
    logout_user()
    return {"logout": True}
