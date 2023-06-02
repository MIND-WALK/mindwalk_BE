import "dotenv/config";
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
// import app from "./src/app";
import api from './src/app';
import { logRouter, userRouter } from "./src/routes/index.js";

const { PORT, MONGO_URI } = process.env;

mongoose
    .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(e => {
        console.error(e);
    });

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api',  userRouter);
router.use('/api',  logRouter); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d', port);
});