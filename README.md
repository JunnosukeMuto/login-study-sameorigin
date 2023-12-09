# login-study

## 目的

json を返すバックエンドと、SPA のフロントエンド、データベースとの接続、ログイン機能（できれば ASGI による WebSocket リアルタイム通信も）を、枯れた技術で実装し、今後の開発の基盤を作る。

## 起動

```
docker-compose up --build
```

`http://localhost`で、nginx からアクセスができます。フロントエンドのホットリロードは効きません。

`http://localhost:5173`で作業すると、フロントエンドのホットリロードが効きます。でも、バックエンドとの通信が CORS ポリシーで失敗します。

バックエンドは`http://localhost:5000`に建っています。

## 終了

`Ctrl+C`ですべてのコンテナをストップできます。すべてのコンテナを削除するには:

```
docker compose down
```
