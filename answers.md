# Question 1: The Vector Conflict

A Bag-of-Words vectorizer only counts how many times a word appears in a sentence. Since the word "light" appears in both Sentence 1 and Sentence 2, the vectors share a common feature and produce a similarity score. However, the meanings of the word are different in each sentence. Therefore, the model creates a false mathematical relationship because it cannot understand context.

# Question 2: The Context Blindspot

The Bag-of-Words approach ignores context and word order. It converts text into static frequency counts and loses the surrounding information that gives words their meaning. This creates problems for search engines and chatbots because words with multiple meanings are treated as the same word. As a result, the system may return irrelevant results.

# Question 3: The GenAI Architectural Fix

Modern Large Language Models use context-aware embeddings and self-attention mechanisms. Self-attention allows the model to examine surrounding words and understand the intended meaning of a word in a sentence. Therefore, the word "light" receives different vector representations depending on its context. This enables models like GPT to understand language much more accurately than Bag-of-Words methods.
