#code #ai #short #learning

El objetivo de un sistema RAG es mejorar la respuesta de los LLM en base a un contexto dado, cuando se le proporciona un sistema RAG a un LLM, ya no se está dependiendo únicamente de la información con la que fue entrenado, sino que obtiene todo el contexto interno proporcionado por una base de datos vectorial, la cual es creada, manejada y proporcionada por el equipo que la implemente.

El sistema RAG acepta varios formatos que pueden ser digeridos por una base de datos vectorial, ellos son: PDF, TXT, Word, Audios, Imágenes, Sitios Web, etc.

Los problemas comunes que se tiene al no contar con un sistema RAG, son los siguientes:
- Pueden presentar información falsa cuando realmente no tienen la respuesta
- Información desactualizada o genérica cuando el usuario espera una respuesta especifica y actual

Uno de los beneficios de los sistemas RAGs es que podemos conectar el LLM de manera directa a redes sociales en vivo, sitios de noticas u otras fuentes de información que se actualizan con frecuencia.

##### How a RAG system work
First, the prompt is provided. We then search our vector store database for relevant information, send both the prompt and that context to the LLM, and generate the response.


![[RAG image.png]]



Referencias
https://aws.amazon.com/es/what-is/retrieval-augmented-generation/