---
title: '3) When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel'
---

I think it’s more a matter of what you are targeting with your applications.

If latency is a critical factor, for instance, when building an e-commerce website, Edge Functions are a wise choice. They bring computing closer to users, reducing the time it takes to process requests and deliver content. Additionally, if the responsiveness of your web applications is essential for a positive user experience, then Edge Functions are ideal. In today’s world, users expect quick feedback, and Edge Functions help ensure a snappy and interactive user interface. Moreover, compared to Serverless Functions, they are more budget-friendly.

On the other hand, if your website doesn’t require global distribution — for example, if all your users are within your company or accessing the application in a single region — then there's no need to use Edge Functions. In such cases, you would want to use Serverless Functions located close to your specific region. Also, Serverless Functions are more suitable for tasks such as managing internal data processing. If you are generating substantial amounts of data behind the scenes and need to perform operations on that data, it doesn’t make sense to send that data to a lightweight environment like Edge Functions and then bring it back. Serverless Functions can handle large-scale data processing effectively.

Edge Middleware comes into play when you have tasks that can be automated. For instance, if you want to implement user authentication for all endpoints inside your API folder. Without using middleware, you would typically have to implement user authentication in every route. However, by incorporating Edge Middleware, you can easily automate this task and apply authentication to all endpoints within your API folder. Essentially, they work as teammates.
