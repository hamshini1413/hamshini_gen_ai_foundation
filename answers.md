# Lab Assignment 1 - Answers

## Question 1: The Vector Conflict

After calculating the dot product similarity scores, I observed that the Bag-of-Words model may assign a relatively high similarity score even when the word **"light"** has different meanings in different sentences. This happens because CountVectorizer only counts the occurrence of words and ignores their context. Since the same word appears in both sentences, the model considers them similar even though one refers to food and the other refers to illumination. This demonstrates the limitation of static vector representations.

---

## Question 2: The Context Blindspot

The Bag-of-Words approach creates a major bottleneck for search engines and chatbots because it ignores the meaning and order of words. It converts text into simple word-frequency counts, causing words with multiple meanings to be treated as the same. As a result, the model cannot distinguish between different contexts or understand user intent. The linguistic property that is completely lost is **contextual semantics**.

---

## Question 3: The GenAI Architectural Fix

Modern Large Language Models such as GPT and LLaMA solve this problem using **Context-Aware Embeddings** and **Masked Self-Attention** mechanisms. Self-attention allows the model to analyze surrounding words before assigning a vector representation to each word. Therefore, the word **"light"** receives different mathematical vectors depending on whether it refers to low-calorie food, illumination, or another meaning. This enables LLMs to understand context accurately and generate more meaningful responses.
