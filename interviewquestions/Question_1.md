---
title: '1) Describe how you solved a challenge that one of your previous teams faced.
How did you determine your solution was successful?'
---

We have a team in India that provides tier 1-level support to our clients. They primarily handle straightforward tasks such as password resets and username changes. If they encounter an issue for which an easy fix is not possible, they escalate the case to us.

Recently, one of our significant clients submitted a case through this team, complaining about a functionality on our platform that allows users to create alert rules for modifying alerts and related functions. The problem they faced was the inability to view any rules in their environment. This was a critical issue because this functionality is one of the most significant features we offer on our platform. Our clients rely on these rules to define their workflows, and many important alerts depend on this functionality.

The situation became more challenging because our tier 1-level Technical Support Engineer (TSE) mistakenly informed the client that a user from their organization had deleted all their rules, which was not accurate. It turned into a critical situation that needed immediate attention. As soon as I realized the magnitude of the issue, I took over the case from our tier 1-level support team.

My first action was to promptly respond to the client, informing them that their case had been escalated to us, and we would provide an update as soon as we reviewed the case. In high-pressure situations like this, communication is crucial, and clients want to know that someone is actively working to resolve their issue.

Next, I reviewed the case and began by checking if this was a global issue affecting all our clients, as I considered updating our status page if it was the case. Fortunately, it was isolated to that specific client, which I confirmed on my end.

I then proceeded to examine the logs for that client to verify the accuracy of what the previous TSE had communicated to the client. I found no logs indicating an API call made by a user to delete their rules in their environment. I also inspected the responses of these calls and noticed that each call returned an empty array. This led me to suspect a potential disconnect between our database and their instance.

To confirm my suspicion, I ran a database query and successfully located the client's alert rules. It occurred to me that we had deployed an update the previous day to enhance that specific functionality on our platform. I promptly reached out to our engineering team, explaining the entire situation and asking for confirmation of my findings regarding the client's data. They confirmed my findings, which allowed me to reach back out to the client, clarifying that their data was not deleted, and it was still accessible in our database.

This helped to correct the miscommunication between the previous TSE and the client, significantly reducing the client's concerns about the situation. I assured the client that we were actively working on resolving the issue and promised to provide another update once I received feedback from our engineering team.

Ultimately, our engineering team confirmed that the issue was related to the deployment from the day before. They promptly rolled back the deployment, resolving the client's issue. I also verified that I could now see their rules on my end after the fix.

Following the resolution, I reached out to the client again and offered a Zoom call to explain that our engineering team had successfully resolved the issue and to provide an explanation of why it had occurred. Fortunately, I had prior interactions with the person who had created the case, having worked with him on other cases in the past. This established a positive rapport and facilitated effective communication. Our existing professional relationship helped build trust, and I took the opportunity to apologize for the previous miscommunication and empathized with the client's situation. As a result, the client left the call satisfied with our solution.
