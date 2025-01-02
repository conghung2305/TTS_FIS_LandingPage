import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

// Sử dụng CORS để tránh lỗi CORS
app.use(cors());
app.use(middlewares);

// Cấu hình auth
app.db = router.db; // Requied for json-server-auth
app.use(auth);

// Khởi động server với `json-server-auth`
app.use(router);
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
