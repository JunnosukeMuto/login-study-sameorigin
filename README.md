# login-study

## 目的

json を返すバックエンドと、SPA のフロントエンド、データベースとの接続、ログイン機能（できれば ASGI による WebSocket リアルタイム通信も）を、枯れた技術で実装し、今後の開発の基盤を作る。

## 起動

`docker compose version`が 2.22 以降でないと動作しません。

```
docker compose watch
```

`http://localhost`で、nginx からアクセスができます。

フロントエンドを開発するときは、`http://localhost:5173`で作業しないと、ホットリロードが効きません。

バックエンドは`http://localhost:5000`に建っています。

## 終了

`docker compose up`と違って、`Ctrl+C`してもコンテナはストップしません。down を忘れないでください。

```
docker compose down
```
