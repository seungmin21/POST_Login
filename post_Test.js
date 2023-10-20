const htmlTemple =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #root {
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      /* flex set */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #root > div:nth-child(1) {
      width: 370px;
      height: 90px;
      /* flex set */
      display: flex;
      flex-wrap: wrap;
      font-size: 30px;
      font-weight: 400;
      color: #B6B6B6;
    }
    #root > div:nth-child(1) > div:nth-child(1) {
      width: 150px;
      height: 43px;
      background-color: #ff6666;
      border-radius: 10px;
    }
    #root > div:nth-child(2) {
      display:flex;
      margin-top: 105px;
    }
    #root > div:nth-child(2) > div:nth-child(1) {
      font-size: 24px;
      font-weight: 400;
      color: #B6B6B6;
    }
    #root > div:nth-child(2) > div:nth-child(2) {
      margin-left: 22px;
    }
    #root > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) {
      width: 300px;
      height: 35px;
      background-color: #D9D9D9;
      border-radius: 10px;
    }
    #root > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) {
      width: 300px;
      height: 300px;
      background-color: #D9D9D9;
      border-radius: 10px;
      margin-top: 16px;
    }
    #root > div:nth-child(2) > div:nth-child(2) > input {
      width: 150px;
      height: 35px;
      font-size: 24px;
      font-weight: 400;
      border-radius: 10px;
      background-color: #ff6666;
      color: #fff;
      margin-top: 19px;
    }
  </style>
</head>
<body>
  <div id="root">
    <!-- 1번 컨테이너 -->
    <div>
      <div></div>
      <div>님! 반갑습니다.</div>
      <div>저에게 편지를 보내주세요!</div>
    </div>
    <!-- 2번 컨테이너 -->
    <div>
      <!-- text input -->
      <div>
        <!-- Title text -->
        <div>Title</div>
        <!-- Text text -->
        <div>Text</div>
      </div>
      <div>
        <div></div>
        <div></div>
        <input type="button" value="send">
      </div>
    </div>
  </div>
</body>
</html>`

module.exports = htmlTemple;