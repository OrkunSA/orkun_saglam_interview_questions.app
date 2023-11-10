---
title: '6) A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.'
---

Hey [Client’s name]

Thank you for reaching out to the Vercel Support team. - Happy to be of assistance!

I understand that you would like to prevent your site from being indexed by search engines.

By default, **Vercel Preview Deployments** are not indexed by search engines because the **X-Robots-Tag** HTTP header is set to **"noindex."** This means that during the development stages, you won't need to worry about search engines indexing your project.

However, in production deployments, you may need to make changes to that header. In other words, it won't have the **"x-robots-tag: noindex"** setting by default. You can make these changes in the Header object within your vercel.json file.

For more detailed information on this topic, you can refer to the following link: [Are Vercel Preview Deployments Indexed by Search Engines](https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines)

If you have any further questions or require additional clarification, please don't hesitate to ask. I'm more than happy to provide further assistance and answer any questions you may have.

Cheers.

Orkun

Vercel Support Team
