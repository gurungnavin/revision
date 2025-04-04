// 'http'モジュールをインポート（Node.jsの組み込みモジュール）
const http = require('http');

// サーバーがリッスンするポート番号を設定（ここでは4000）
const port = 4000;

// HTTPサーバーを作成し、リクエストを処理
const server = http.createServer((req, res) => {
   res.end("Hello World!")
})

// サーバーを指定したポートで起動し、起動時にメッセージを表示
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})