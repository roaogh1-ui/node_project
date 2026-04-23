const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//1. routes폴더 생성 -> user.js 파일 생성 (목록조회)
//2. config 폴더 생성 -> db.js 파일 생성 
//    .env 파일에 DB정보 기록

const userRouter = require('./routes/user');

const dataSet = [
    {"f_name":"딸기", "count":10},
    {"f_name":"멜론", "count":7},
    {"f_name":"망고", "count":2}
];

app.use(cors());
app.use("/users", userRouter);

app.get("/api/list", (req, res)=>{
    console.log("요청이 들어옴...");
    res.send(dataSet);
});

app.listen(port, "0.0.0.0", ()=>{
    console.log(port+"번 포트 실행중...");
});