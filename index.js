// crea un servidor express basico      
// carge las variables desde el archivo .env

const unusedVar = 42;

const express = require('express');
// cargue las variables desde el archivo .env
require('dotenv').config();
const app = express();
// agrega logica a esta variable port para que use la variable de entorno
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// crea un endpoint get en /status que devuelva un json con {"status": "ok" , timestamp: new Date()}
app.get('/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Crea un endpoint POST en /chat que reciba el body un JSON con una propieda "pregunta" 
// la pregunta no debe etsar vacia
// usa el cliente OPENAI para obtener la respuseta del modelo "gpt-3.5-turbo"
// Devuelva la respuseta en un JSON. Maneja correctamente los errores
// te falta el require de openai
// falta agregar la configuracion del openai
// agrega espacios o formate el archivo


const {OpenAI} = require('openai');

const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post('/chat', async (req, res) => {
  const { pregunta } = req.body;

  // add in line 47 more validation like typeof and trim and the !pregunta validation
  if (!pregunta || typeof pregunta !== 'string' || pregunta.trim() === '') {
    return res.status(400).json({ error: 'La pregunta no puede estar vacía' });
  }

  try {
    const respuesta = await configuration.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: pregunta }],
      max_tokens: 100
    });
    res.json({ respuesta: respuesta.choices[0].message.content });
  } catch (error) {
    console.error('Error al obtener respuesta de OpenAI:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});






 