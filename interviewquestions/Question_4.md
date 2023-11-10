---
title: '4) A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.'
---

Hello [Client’s Name],

Thank you for reaching out to the Vercel Support team. - Happy to be of assistance!

I understand that you would like to redirect the **/blog** path to another website, and I'm here to guide you through the process.

This can be easily implemented in the **next.config.js** file by utilizing **redirects.** You will need to define three properties in your code. The first is **source** which contains the incoming request path pattern. The second is **destination,** which is the path you want to route to. Lastly, **permanent** indicates whether this change is permanent or temporary. If this is a temporary change, such as for maintenance, I recommend setting **permanent** to **false.**

For more detailed information on these properties, you can refer to this link: [Next.js Redirects Documentation](https://nextjs.org/docs/pages/api-reference/next-config-js/redirects). Additionally, if you prefer video tutorials, I've found this YouTube video that explains the entire process, which might be helpful: YouTube Tutorial.

I hope this information is helpful. Please keep me updated on your progress, and don't hesitate to reach out if you require further assistance. I'm more than willing to schedule a Zoom call to provide further support if necessary.

Looking forward to hearing from you.

Cheers,

Orkun

Vercel Support Team
