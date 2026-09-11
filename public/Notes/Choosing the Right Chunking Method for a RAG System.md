---
created: 2026-09-10
---

#code #ai 
#### Introduction
One of the most important parts of a [[RAG (Retrieval Augmented Generation)]] system is choosing the best type of chunking. Unlike what we learn at first, when we simply use a basic one, which is fixed chunking, I'll show you the different types of chunking for a RAG system, and you should use the one that best fits your needs.

#### Types of Chunking
###### Standard Chunking
This chunking method uses a fixed size. It doesn't take meaning into account, so it's a good fit if you're learning how chunking works, but I wouldn't recommend it for production systems.

![[Standard Chunking.png|700]]

##### Hierarchical Chunking
Nested parent/child chunks -> This method is a bit more complex to understand, but I'll illustrate it this way.

Assuming that we have this document:  
"Tea is one of the most popular beverages consumed around the world today. Tea has been enjoyed for thousands of years, ever since ancient China, when farmers and herbalists discovered that steeping the leaves of the Camellia sinensis plant in hot water created a fragrant drink. It was first used mostly for its medicinal properties before becoming a common household beverage. It has survived not only many centuries, but also many wars and trade disputes, remaining essentially the same simple drink today. It was popularised thanks to trade routes and more recently through modern tea bags and ceremonies including many varieties of tea."  

>If we use Hierarchical Chunking, the text will be split this way, assuming we set **20 tokens for the children and 60 tokens for the parent** (the default separation for production systems is 300 tokens, but we'll use this just as an example).

**The parent chunk will be saved as:**  
Tea is one of the most popular beverages consumed around the world today. Tea has been enjoyed for thousands of years, ever since ancient China, when farmers and herbalists discovered that steeping the leaves of the Camellia sinensis plant in hot water created a fragrant drink. It was first used mostly  

**The children will be split like this:**  
**1  ->** Tea is one of the most popular beverages consumed around the world today. Tea has been enjoyed  
**2  ->** for thousands of years, ever since ancient China, when farmers and herbalists discovered that steeping the  
**3 ->** leaves of the Camellia sinensis plant in hot water created a fragrant drink. It was first used mostly  

**Parent**  
for its medicinal properties before becoming a common household beverage. It has survived not only many centuries, but also many wars and trade disputes, remaining essentially the same simple drink today. It was popularised thanks to trade routes and more recently through modern tea bags and ceremonies including many varieties of tea.  

**Small chunks**
**4  ->** for its medicinal properties before becoming a common household beverage. It has survived not only many centuries, but  
**5  ->** also many wars and trade disputes, remaining essentially the same simple drink today. It was popularised thanks  
**6  ->** to trade routes and more recently through modern tea bags and ceremonies including many varieties of tea.  

The way this method works when we search is like this:
User Prompt -> search based on the small chunks -> retrieve the parent chunk

This way, we have the whole context, and it's less likely that the LLM will hallucinate. Also, when we search in a RAG system, it finds better results in small chunks. This is also one of the main reasons you should probably use this method.

![[Hierarchical Chunking.png|700]]

##### Semantic Chunking
In this case, we have an LLM that splits the text into chunks based on meaning, rather than things like sentences or a fixed chunk size. This method costs money.

Document:
Space, the final frontier. These are the voyages of the Starship Enterprise.

Semantic Meaning:
Space, the final frontier. These are the voyages of the Starship Enterprise.

This is all part of the same idea, so it would probably just keep it all together, as long as it's within your max token limit. 
![[Semantic Chunking.png|700]]

###### Conclusion
The type of chunking you choose is just one part of the picture, but choosing the right one will improve the results of your agentic system. You can implement a **Context Grounding Check** and **Relevance** check to have an LLM validate whether the response is grounded in your source and relevant to the query, filtering out anything below the threshold you set.

Hope you like it, and that it helps you make a good decision :)


