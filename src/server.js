import express from 'express';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 8080;



// get file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url);      //gets the full filepath of current working file
const __dirname = dirname(__filename);      //gets the directory name of current working file

`Middleware`

app.use(express.json());    // middleware to enable parsing JSON data in incoming network requests
app.use(express.static(path.join(__dirname, '../public')));     // makes the 'public' folder seem like part of the root directory making it easier for access to the browser

`Endpoints`
// Endpoint to send the HTML file to render a webpage on the browser
app.get('/', (request, response) => {
    const targetFilePath = path.join(__dirname, 'public', 'index.html');
    response.sendFile(targetFilePath);
})

// Endpoint to

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});