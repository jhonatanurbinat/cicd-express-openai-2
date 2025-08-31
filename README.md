# cicd-express-openai
# test tst


openapi: 3.0.3
info:
  title: API de Chat con OpenAI
  version: 1.0.0
  description: |
    Esta API expone un endpoint que permite enviar una pregunta a OpenAI usando el modelo `gpt-3.5-turbo`
    y obtener una respuesta generada por inteligencia artificial.

paths:
  /chat:
    post:
      summary: Obtener respuesta de OpenAI
      description: |
        Envía una pregunta al modelo GPT-3.5-Turbo y recibe una respuesta generada.
        La propiedad `pregunta` debe ser un string no vacío.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - pregunta
              properties:
                pregunta:
                  type: string
                  description: Pregunta que se enviará al modelo GPT-3.5-Turbo.
                  example: "¿Cuál es la capital de Francia?"
      responses:
        '200':
          description: Respuesta generada por el modelo de OpenAI.
          content:
            application/json:
              schema:
                type: object
                properties:
                  respuesta:
                    type: string
                    description: Texto generado por el modelo.
                    example: "La capital de Francia es París."
        '400':
          description: Pregunta vacía o no válida.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: "La pregunta no puede estar vacía"
        '500':
          description: Error interno del servidor o fallo en la conexión con OpenAI.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: "Error interno del servidor"
