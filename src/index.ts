import express from 'express';
import path from 'path';
import router from './routes/messages';

const PORT = +( process.env.PORT || 8080);
const hostname = '127.0.0.1';

const app = express();

app.set("./src/views", path.join(__dirname, './src/views'));
app.set("view engine","ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use('/', router);

app.listen(PORT, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${PORT}`);
})