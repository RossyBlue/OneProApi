require('dotenv').config()   // cargar variables .env

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000   // puerto 3000 por defecto, pero se corre en el 4000 

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hi Rosa!')
})

// Ruta JSON
app.get('/about', (req, res) => {
  res.json({ 
    project: "OnePro-Api", 
    author: "Rosa", 
    message: "API created with Node.js and Express" 
  })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
