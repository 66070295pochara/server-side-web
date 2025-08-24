// demo-http-server.js
const http = require('http');           // เรียกใช้โมดูล http ของ Node.js
const hostname = 'localhost';           // ชื่อโฮสต์ (127.0.0.1)
const port = 3000;                      // กำหนดพอร์ตให้ server

// สร้าง server
const server = http.createServer((req, res) => {
  res.statusCode = 200;                             // สถานะการตอบกลับ (200 = OK)
  res.setHeader('Content-Type', 'text/plain');      // กำหนดชนิดของ response = text
  res.end('Hello, World!\n');                       // ส่งข้อความกลับไปหา client
});

// สั่งให้ server เริ่มฟัง request ที่ hostname + port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
