## 自己学習：サーバー作成（フレームワークやライブラリを使用せずに）
![simple-server-nodejs](https://github.com/user-attachments/assets/7843e9c3-5440-454c-9773-cb122cd60f2a)

---

### ステップ1

- 新しいフォルダを作成してください。  
- 作成したフォルダを **VS Code** で開いてください。  
- その後、ターミナルを開いてください。

---

### ステップ2

- ディレクトリ（構成）を確認した後、以下のコマンドを入力してください：

```bash
npm init -y
```
- このコマンドを実行すると、package.json ファイルが作成されます。

### ステップ3
- package.json ファイルを開いて、以下のように "scripts" セクションを変更してください。

変更前：
```json 
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
変更後：
```json 
"scripts": {
  "start": "node index.js"
}
```

### ステップ4
index.js という名前のファイルを作成してください。
※ファイル名は自由ですが、もしファイル名を変更した場合、package.json 内の "start": "node index.js" もファイル名に合わせて変更する必要があります。
例えば、server.js に変更する場合は、以下のようにします：
```json
"scripts": {
  "start": "node server.js"
}
```

### ステップ5
index.js ファイルを開いて、サーバーを作成します。
サーバー作成には以下のものが必要です：

1. http モジュール
2. ポート番号（例：3000, 4000, 5000 など）
3. サーバー作成処理（req, res）
4. サーバーをリッスンする処理

1. 'http' モジュールをインポート（Node.jsの組み込みモジュール）
```javascript
const http = require('http');
```

2. サーバーがリッスンするポート番号を設定（ここでは4000）
```javascript
const port = 4000;
```

3. HTTPサーバーを作成し、リクエストを処理
```javascript
const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

```

4. サーバーを指定したポートで起動し、起動時にメッセージを表示
```javascript
server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

```

### ステップ6
- ターミナルで以下のコマンドを入力し、サーバーを起動します：
```bash
node index.js
```
- ブラウザで http://localhost:4000 にアクセスすると、Hello World! が表示されます 🎉
