---
template: BlogPost
path: /keycon
date: 2020-03-27T16:37:10.156Z
title: Key Conservation
thumbnail: /assets/keycon2.png
metaDescription: 'wildlife conservation, react native'
siteLink: ''
---
## [Key Conservation](https://keyconservation.org/) is helping conservationists gain critical funding and global support through a mobile app that provides real-time updates on day-to-day campaigns.

I was a Team Lead for this project for 6 months and a student for 16 weeks.

### Student Goals

Labs is the first step into the wild as a Lambda Student. You are done with the Web curriculum (HTML, CSS, JavaScript, React, Advanced React, Node.js), and now it's time to bring all of those skills together to work on a real project.

You have 16 weeks to complete a Product Cycle that is broken up into two parts: 4 weeks of one Release Cycle and another 4 weeks of another Release Cycle. This means you want to two main features that stand out for each of those 4 weeks. 

Our group decided on the following: 1. User Interaction and Bug Fixes. 2. Video Uploading and Profile Changes. We accomplished all our goals for both and was happy to show Megan, our stakeholder, the progress on the app. It was finally starting to come together in a social way. 

### Team Lead Goals

As a student I learned many things: 1. Picking up React Native quickly isn't that hard to do thanks to the similarity with React. 2. The relationship with your stakeholder matters a lot, especially when she has a very clear vision of how the app should look and feel.

I knew the previous Team Leads did a great job at getting the app running from nothing and establishing the beginning stages but going into the third Product Cycle I knew a lot of organization and communication efforts had to be improved. 

Thankfully, I developed a great relationship with Megan during my time as a student and scheduled meetings with her to go over *everything*. From the smallest details on the app to the relationship with Lambda's UX cohort. 

We had honest conversations about it all. The growth from a student to a Team Lead is an experience I'll never forget, and it began with setting up the Labs 18 group for success. 

**Labs 18**

Our two main goals included user onboarding and creating a map for organizations. 

We needed an entire revamp of the organization sign up process due to two things: 1. security and 2. proper vetting. At the current start of this group, any person could sign up and claim themselves as an organization which opens the opportunity to receive money, obviously not a good idea unless Key wants to get charged with money laundering.

Megan had a list of questions that already existed in an Airtable form so an idea popped in my head: Why don't we use the Airtable API? There were quite a few questions about an organization that were for her data/research so I wanted to make sure not to waste anytime fleshing out unnecessary data on the backend. Integrating the API would allow data to be saved and viewed in a Airtable so that Megan can quickly view the Org's information and approve it. 

One of my brilliant students [Cameron Alvarado](https://github.com/CameronAlvarado) took on this challenge and got everything working within 4 weeks. He created a column in Airtable called "accepted" that would push approval to our backend, therefore letting in that conservationist when they signed in again.

Our UX team helped design the flow and copy for the onboarding process, which included *14 new screens* . All of the developers worked together to keep consistency in this section of the app and it came out great.

Going into maps, that was quite the intimidating task. A few days of straight research were needed to find the right npm package that would work with React Native and Expo, along with a plan on how the coordinates would push the custom pins to appear correctly. 

We went with React Native Maps (created by the always awesome Airbnb) and React Native Location IQ for the coordinates support.

![React Native Maps](/assets/IMG_9870.PNG)

One of my awesome female students [Ellen](https://github.com/wengyilun) was the lead on setting up the map search component, which also had a filter for people to find an organization either by the city they are located in or by their name. 

**Labs 20**

This team was crazy talented. I guess it was because I made a speech about the app during a live Q&A where students got to ask questions about the projects up for selection. They all made Key their first choice and I was happy to bring on another round of 6 developers. 

The goals for this fourth product cycle were: Fix Android bugs, create an admin feature to control spam, and tons of UI updates. 

We no longer had UX students joining us so it created a direct conversation between Megan and the developers. She would send a design from Adobe XD and they would create the closest thing possible to bring her vision to life.

It ended up making things a lot easier. Countless much needed changes were made and we finally had an overall consistent looking app. 

Two badasses named [Jasmine](https://github.com/jasminekh96) and [Brianna](https://github.com/briworkman) collaborated to tackle an on-going issue with SVG's not showing up in Android. This impacted the bottom navigation which basically made the app entirely broken in that platform. They not only found out how to correctly display SVG's with a plan for future devs to follow, but [Brianna wrote about it here](https://medium.com/@briworkman9/how-to-use-svgs-in-react-native-with-expo-ec34f085f5e0). 

And the very smart, always working at 2am night owl, [Mohammad](https://github.com/mtourj) was the lead on the admin feature and even made time to re-factor some code which saved us around 2k of unnecessary/repetitive code. 

**Takeaways** 

If you're a student at Lambda School, make sure you sign up to be a Team Lead during Labs. It will open your eyes to a whole other set of soft skills that will only help you grow as a developer. You will likely always be in a scenario of being thrown into a massive codebase that you have to learn quickly and start supporting. This is just the beginning, because being able to plan ahead and keep a stakeholder supported requires extra effort and care. Not to mention getting management experience and setting expectations right for everyone on the team. 

I'll always be a part of Key. I plan on making a PR every now and then to help continue my support. Can't wait to see what the future holds for this awesome project. 

<div align="center">
<a href="https://keyconservation.org" class="post-button">View Website</a></div>
