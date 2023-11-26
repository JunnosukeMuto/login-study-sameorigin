# backend

## 環境構築

### poetry

```
poetry install
```

### pip

```
python -m venv .venv
```

- Linux, Mac, WSL

  ```
  source .venv/bin/activate
  ```

- Windows(PowerShell)

  ```
  .\.venv\Scripts\activate
  ```

- Windows(GitBash)

  ```
  source .venv/Scripts/acrivate
  ```

```
pip install -r requirements.txt
```

## 動作

manage.py を実行すると、`http://localhost:5000`に開発用バックエンドサーバーが立ちます。

## 設計

backend というパッケージを manage.py からインポートして使っています。

flask で書かれていて、restapi でフロントエンドと通信します。flask-login でログインを実装しています。（セッション方式）

## チートシート

```
poetry export -f requirements.txt --output requirements.txt
```
