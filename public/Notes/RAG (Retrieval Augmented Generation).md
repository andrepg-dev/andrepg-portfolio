---
created: 2026-08-27
---

#code #ai #short #learning #reference #bibliography

The objective of a RAG system is to improve the response of the LLM based on a given context. When a RAG system is provided to an LLM, it is no longer depending solely on the information with which it was trained, but rather it obtains all the internal context provided by a vector database, which is created, managed and provided by the team that implements it.

The RAG system accepts several formats that can be digested by a vector database, they are: PDF, TXT, Word, Audios, Images, Websites, etc.

The common problems encountered when not having a RAG system are the following:
- They can present false information when they really don't have the answer
- Outdated or generic information when the user expects a specific and current response

One of the benefits of RAG systems is that we can connect the LLM directly to live social networks, news sites or other frequently updated information sources.

##### How a RAG system work
First, the prompt is provided. We then search our vector store database for relevant information, send both the prompt and that context to the LLM, and generate the response.

![[RAG image.png|700]]

Referencias
https://aws.amazon.com/es/what-is/retrieval-augmented-generation/