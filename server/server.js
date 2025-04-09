const express = require('express');
const cors = require('cors');
const listRouter = require('./routers/list.router');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Настройка Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Создаем папку для загрузок, если ее нет
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Маршрут для загрузки изображений
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Файл не загружен' });
  }
  const imageUrl = `http://localhost:8080/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// Отдаем статические файлы из папки uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Обработчик для корневого пути
app.get("/", (req, res) => {
  res.json({ message: "Добро пожаловать на сервер! Используйте /list для работы с API." });
});

app.use('/list', listRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});