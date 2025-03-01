const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Video Tutorial App</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    </head>
    <body class="bg-gray-100 font-roboto">
        <div class="container mx-auto p-4">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-2xl font-bold">Video Tutorial</h1>
                <a href="https://yopmail.com" target="_blank" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Go to Yopmail
                </a>
            </div>
            <div class="aspect-w-16 aspect-h-9">
            <video width="640" height="360" controls autoplay>
            <source src="movie/Crea una cuenta Yopmail.mp4" type="video/mp4">
            
            </video>  
            </div>
        </div>
    </body>
    </html>
    
    `);
});

// Iniciar el servidor

app.listen(3000)