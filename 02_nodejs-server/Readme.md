## 自己学習：サーバー作成（Express, dotenv, nodemon, Node.js）

---

### ステップ1

- 新しいフォルダを作成してください。  
- 作成したフォルダを **VS Code** で開いてください。  
- その後、ターミナルを開いてください。

---

### ステップ2

- ディレクトリの構成を確認したら、以下のコマンドを実行してください：

```bash
npm init -y
``` 
- このコマンドを実行すると、package.json ファイルが自動的に作成されます。
---

### ステップ3

- 以下のライブラリをインストールします。すべて開発に必要なパッケージです。
```bash
npm install express dotenv
```

```bash
npm install --save-dev nodemon
```
- express と dotenv → 本番環境でも使用するので、通常依存関係（dependencies） に追加されます。
- nodemon → 開発時のみ使用するので、開発依存関係（devDependencies） に追加されます。

## なぜこのパッケージ？？
1. express：`HTTP`リクエストを処理し、サーバーを構築するフレームワーク。
2. nodemon：保存時に自動でサーバーを再起動する開発用ツール。
3. dotenv：`.env` ファイルから環境変数を読み込むライブラリ。

---

### ステップ4
- package.json ファイルを開いて、以下のように `"main"`と`"scripts"` セクションを変更してください。
 
- 変更前：
 ```json
 "main": "index.js",
```

- 変更後：
```json
 "main": "server.js",
```
- 変更前：
```json 
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

- 変更後：
```json 
"scripts": {
  "dev": "nodemon server.js"
}
```

### ステップ5
`server.js` という名前のファイルを作成してください。
※ファイル名は自由ですが、もしファイル名を変更した場合、package.json 内の `"main : server.js"`と `"start": "nodemon server.js"` もファイル名に合わせて変更する必要があります。

### ステップ6
.env ファイルを作成してください。ファイルを開いて、次のように記述してください。
```ini
PORT = 6000
```
この `.env` ファイルは、今後 APIキー や データベースのURI、トークンなどの 機密情報を安全に管理するため に使用します。

### ステップ7
`server.js` ファイルを開いて、サーバーを作成します。

サーバー作成には以下のものが必要です
- express モジュール
- dotenv モジュール（環境変数の読み込み）
- ポート番号（.env に設定 or デフォルト）
- エンドポイント作成処理（req, res）
- サーバーをリッスンする処理

1. express モジュールをインポート（Webサーバーを簡単に作るためのフレームワーク）
```javascript
import express from 'express';
```

2. dotenv を使って .env ファイルから環境変数を読み込む
```javascript
import 'dotenv/config';
```

3. express アプリケーションを作成
```javascript
const app = express();
```

4. `.env` に設定された PORT を使う。なければデフォルトで `3000` を使用
```javascript
const port = process.env.PORT || 3000;
```

5. ルートパス（"/"）にアクセスされたときのレスポンスを設定
```javascript
app.get('/', (req, res) => {
  res.send('Hello, I am Backend'); // クライアントに文字列を返す
});
```

6. サーバーを起動して、指定したポートでリクエストを受け付ける

```javascript
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // 起動成功時のログ出力
});
```
### ステップ8
- ターミナルで以下のコマンドを入力し、サーバーを起動します：
```bash
npm run dev
```
もしかく
```bash
nodemon server.js
```

- ブラウザで http://localhost:4000 にアクセスすると、Hello World! が表示されます 🎉