#code #ai 

#### Introduction
One of the most important parts of a [[RAG (Retrieval Augmented Generation)]] system is to choose the best type of chunking, in difference when we learning that we use a simple one, that is the fixed chunking, I will show you the different's type of chunking for a RAG system and you should use the one that is better for you fit.

#### Types of Chunking
###### Standard Chunking
This chunking method is used fixed size, this method doesn't care about meaning, good fit if you're learning how to use chunking, but I wouldn't recommend this for production systems.

######  Hierarchical Chunking
Nested parent/child chunks -> This method is a little bit more complex to understand, but I'll illustrate this in this way

Assuming that we have this document:

"**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."

Using Hierarchical Chunking will be separate in this way assuming that we put like 20 tokens of separation (Default separation for production system is 300 tokens, but we gonna use this just as an example)

Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.


