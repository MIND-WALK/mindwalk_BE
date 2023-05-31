// import jwt from "jsonwebtoken";

// export default function loginRequired(req, res, next) {
//   const userToken = req.headers.authorization?.split(" ")[1];

//   if (!userToken) {
//     return next(new Error("로그인한 유저만 사용할 수 있는 서비스입니다."));
//   }

//   try {
//     const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
//     const jwtDecoded = jwt.verify(userToken, secretKey);
//     req.currentUserId = jwtDecoded.userId;

//     next();
//   } catch (error) {
//     return next(new Error("정상적인 토큰이 아닙니다."));
//   }
// }
