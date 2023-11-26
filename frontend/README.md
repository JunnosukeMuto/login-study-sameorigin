# frontend

## 環境構築

```
npm install
```

## 動作

以下のコマンドを実行すると、`http://localhost:5173`に開発用フロントエンドサーバーが立ち上がります。

```
npm run dev
```

## 設計

public にはアイコンなどが入っています。src/routes には、React Router で遷移するページが入っています。

Vite + TypeScript + React + Tailwindcss + Daisyui で開発しています。Redux は採用していません。
