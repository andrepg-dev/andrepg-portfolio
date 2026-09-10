#code #ai 

#### Introduction
One of the most important parts of a [[RAG (Retrieval Augmented Generation)]] system is to choose the best type of chunking, in difference when we learning that we use a simple one, that is the fixed chunking, I will show you the different's type of chunking for a RAG system and you should use the one that is better for you fit.

#### Types of Chunking
###### Standard Chunking
This chunking method is used fixed size, this method doesn't care about meaning, good fit if you're learning how to use chunking, but I wouldn't recommend this for production systems.

######  Hierarchical Chunking
Nested parent/child chunks -> This method is a little bit more complex to understand, but I'll illustrate this in this way

Assuming that we have this document:  
"Tea is one of the most popular beverages consumed around the world today. Tea has been enjoyed for thousands of years, ever since ancient China, when farmers and herbalists discovered that steeping the leaves of the Camellia sinensis plant in hot water created a fragrant drink. It was first used mostly for its medicinal properties before becoming a common household beverage. It has survived not only many centuries, but also many wars and trade disputes, remaining essentially the same simple drink today. It was popularised thanks to trade routes and more recently through modern tea bags and ceremonies including many varieties of tea."  

>Using Hierarchical Chunking will be separated in this way assuming that we put like **20 tokens of separation for the children and 60 tokens for the parent** (Default separation for production system is 300 tokens, but we gonna use this just as an example)  


**The parent token will be saved as:**  
Tea is one of the most popular beverages consumed around the world today. Tea has been enjoyed for thousands of years, ever since ancient China, when farmers and herbalists discovered that steeping the leaves of the Camellia sinensis plant in hot water created a fragrant drink. It was first used mostly  

**Children gonna be separated like this**  
**1  ->** Tea is one of the most popular beverages consumed around the world today. Tea has been enjoyed  
**2  ->** for thousands of years, ever since ancient China, when farmers and herbalists discovered that steeping the  
**3 ->** leaves of the Camellia sinensis plant in hot water created a fragrant drink. It was first used mostly  

**Parent**  
for its medicinal properties before becoming a common household beverage. It has survived not only many centuries, but also many wars and trade disputes, remaining essentially the same simple drink today. It was popularised thanks to trade routes and more recently through modern tea bags and ceremonies including many varieties of tea.  

**Small chunks**
**4  ->** for its medicinal properties before becoming a common household beverage. It has survived not only many centuries, but  
**5  ->** also many wars and trade disputes, remaining essentially the same simple drink today. It was popularised thanks  
**6  ->** to trade routes and more recently through modern tea bags and ceremonies including many varieties of tea.  

The way that this method works when we search on it is like this:
User Prompt -> search based on the small chunks -> retrieve the parent chunk

In that way, we have the hole context and it's less probable that the LLM has hallucination, also when we search in a RAG system, he finds better results in small chunks, this is also one of the main reasons that you should probably need this.

###### Semantic Chunking
In this case, we have an LLM that separates chunking by meaning, not things like sentences or fixed chunk sized