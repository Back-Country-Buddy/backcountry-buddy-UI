# Backcountry Buddy
###### Plan safer backcountry ski tours with friends.
---
## Table of Contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Deployment](#Deployment)
* [Features](#Features)
* [Future Features](#Future-Features)
* [Wins And Challenges](#Wins-And-Challenges)
* [Authors](#Authors)

## Introduction
While backcountry skiing has witnessed steady and strong growth for more than a decade, COVID-19 inspired a global boom in the activity. But with that growth came a record-breaking season of avalanche fatalities. In fact, Colorado is approaching the most avalanche fatalities we've had in the last 100 years.

Whether you're a beginner or an expert, one of the best ways to reduce risk in the backcountry is to use the checklist provided by [The American Institute for Avalanche Research & Education](https://avtraining.org/) (AIARE). Checklists are proven to be effective across industries & activities that involve any kind of risk management, from rock climbing to investing on Wall Street. When you take a course with AIARE, they provide you with a "backcountry decision-making guide"-- a little booklet where you're supposed to actually write down your trip plan, observations while in the field, and debrief. The goal is to help manage human factors that can challenge an individual's or group's backcountry decisions. The problem is that no one actually uses this.

"No one" is a generalization, of course. But the Director Of Recreational Programs at AIARE echoed this sentiment in a phone call. She said the most useful thing she can think of to help reduce avalanche accidents would be to make the booklet into an app. "No one wants to dig up their book and write things down while out skiing. It needs to be where people already are: their phones," she said. That's where Backcountry Buddy comes in.

At its core, Backcountry Buddy:
- Converts the "Plan" "Ride" and "Debrief" sections of the AIARE booklet into a form that users can edit and save for each tour.
- Allows a user to share/collab on the tour with the group they're going out into the backcountry with.
- Saves all past tours so that users can reference them later.

This application was created in just 2 weeks by a team of 3 front-end and 2 back-end students for our capstone project at Turing School of Software & Design. The project specifications can be found [here](https://mod4.turing.edu/projects/capstone.html).

[Back-end Repo](https://github.com/Back-Country-Buddy/Rest-API)

---

## Technologies
React + Hooks, React Router, TypeScript, JavaScript, Auth0, Progressive Web App, RESTful APIs, Cypress, Travis CI, HTML, CSS

### Dependencides & Libraries
* React Promise Tracker
* React Loader Spinners
* React Step Wizard
* React Toastify

---

## Deployment
[Deployment Link](https://backcountry-buddy.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1c9582d4-422e-4572-a122-bd27f8b4604a/deploy-status)](https://app.netlify.com/sites/backcountry-buddy/deploys) [![Build Status](https://travis-ci.com/Back-Country-Buddy/backcountry-buddy-UI.svg?branch=main)](https://travis-ci.com/Back-Country-Buddy/backcountry-buddy-UI)

**To view in browser on desktop:**
1. Visit the deployment link
2. The app was designed for mobile, so it'll look best if you check it out on a smaller view width! (Tablet/Desktop are coming in future iterations)

**To download PWA on desktop:**
1. Visit the deployment link in Chrome
2. Click the install icon to the right of the URL

**To download PWA on iPhone:**
1. Visit the deployment link in Safari
2. Tap the share icon at the bottom of the screen (next to bookmarks)
3. Tap "Add to Home Screen"

**To download PWA on Android:**
1. Visit the deployment link in Chrome
2. Tap the 3 dots to open the Chrome menu
3. Tap "Install Backcountry Buddy"

**To run locally:**
1. Clone down this repo
2. `npm install`
3. `npm start`
4. Visit `http://localhost:3000/`

---

## Features
* [Log In](#Log-In)
* [Add A Tour](#Add-A-Tour)
* [View Current Tours](#View-Current-Tours)
* [View Past Tours](#View-Past-Tours)
* [Profile](#Profile)

#### Log In
On initial visit, you'll see a login page. It'll redirect you to an Auth0 site, and then back to the welcome landing page. From there, you can access everything in the app.
<p>
<img width="292" alt="login" src="https://user-images.githubusercontent.com/66852774/115636176-9281b680-a2ca-11eb-8faf-e39909a7bc97.png">
<img width="292" alt="welcome" src="https://user-images.githubusercontent.com/66852774/115636198-a0cfd280-a2ca-11eb-9076-eace1d95c9d0.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    We connected both the front and back end to Auth0, and (after much trouble shooting) we able to get the "current user" all hooked up.
  </details>

#### Add A Tour
Visit "Add Tour." Start by picking a date and location, then click "Create Tour" (this saves the tour to your "Current Tours" so you can go back in and edit it later). Now, you can complete the "Plan," "Ride," and "Debrief" sections and save your progress at any time. You can also add friends to a tour by their email and see their emergency contact info. The checkboxes get automatically checked off once all fields in a given form section have been filled out.
<p>
<img width="292" alt="addtour" src="https://user-images.githubusercontent.com/66852774/115637154-bba34680-a2cc-11eb-9702-46b183769332.png">
<img width="292" alt="plan" src="https://user-images.githubusercontent.com/66852774/115637186-ca89f900-a2cc-11eb-8bc1-39f772850a62.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    Several API calls are happening here. You can create a tour (POST), you can come back in and edit the tour (GET & PATCH), you can fetch all your current tours (GET), and you can add a friend to a tour (GET, POST). This was one massive controlled form, with state maintained in hooks. We brought in React Step Wizard to break up the long form into sub-steps for a better UX.
  </details>

#### View Current Tours
Visit the "Current Tours" page to view all tours that you're planning. Click into any tour to make edits.
<p>
<img width="292" alt="currenttours" src="https://user-images.githubusercontent.com/66852774/115637446-6582d300-a2cd-11eb-90c3-b65ec36a6f7d.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    We fetched all user's tours and rendered each of them to the cards on this page. When you click into one, you're redirected to the form state of that tour, with all previous entries visible and editable.
  </details>

#### View Past Tours
Once you've completed the debrief section for a tour, you click "Complete Tour" to move it to "Past Tours." At this point it is no longer editable (although you _can_ delete both current and past tour cards). When you visit "Past Tours," it'll appear there and you can click in to view all details for that tour. You can also search all past tours by location.
<p>
<img width="292" alt="pasttours" src="https://user-images.githubusercontent.com/66852774/115637477-74698580-a2cd-11eb-9ca1-2738125e2110.png">
<img width="292" alt="tourdetails" src="https://user-images.githubusercontent.com/66852774/115637494-80554780-a2cd-11eb-9454-6b649c46f1f2.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    More fetch requests, plus some filtering functionlity in the search bar.
  </details>

#### Profile
Visit the Profile page to view your info, update tour emergency contact information, and log out of the app.
<p>
<img width="292" alt="profile" src="https://user-images.githubusercontent.com/66852774/115637536-9b27bc00-a2cd-11eb-8011-23d9b13b4269.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    We brought in data properties from Auth0 and our backend API to render the user's photo, email, username, etc. We also added in another POST/PATCH for the emergency contact info.
  </details>

### Future Features
Now that we have the basic functionality down, there is so much more we can build! Here are our top priorities moving forward:
- Bring in a weather API so a user can see the forecast for their tour location right in the app.
- Add a field for users to share a link to their GPX track(s) for a given tour.
- Allow users to upload photos from a given tour.
- Expand search/filter functionality for Past Tours.
- Bring in notifications if a user went on a tour but has not yet completed the Debrief. (Maybe even game-ify it with tour stats to add incentive to complete all the checklist steps.)
- Make fully functional offline (it's already halfway there).  

More improvements are documented in issues in our [Project Board](https://github.com/orgs/Back-Country-Buddy/projects/1)

---

## Wins And Challenges

### Wins
Successfully learning 3 new stretch technologies over the course of 2 weeks: TypeScript, Progressive Web Apps, Auth0  

Solid teamwork and collaboration:
* Working and communicating with a backend team in order to get data we needed on the front end. 
* Asynchronous workflow that allowed us to efficiently implement features, styling and testing in a short amount of time
* Our team was able to create a harmonious and inspiring teamwork environment. This allowed us to take on tasks independently while also brainstorm, troubleshoot, and pair program together, and come to compromises when needed. In the end, we produced a product we are each very proud of!  

Creating, planning and organizing the largest project we all have ever worked on; watching it grow from conception to functional fruition! 12 unique endpoints were used.  

Overcoming unforeseen challenges together while keeping morale up. The challenges we encountered with CORS took up valuable time could have derailed our progress - instead we made sure to use our resources and encourage one another until we found a solution.

### Challenges
* The biggest challenge we faced was circumventing CORS issues on our PATCH requests. We received very generic error messages when our OPTIONS preflight requests failed, and spent a large chunk of our time blindly trying to fix this bug. Although we never found documentation on this, we now think this is a common issue when using a Rails backend. In the end, we were able to solve it by changing our PATCH requests to PUT requests.
* We originally planned on using a GraphQL backend for this project but ran into major issues with deployment. As a result we were without a backend for several days while our team built a RESTful API. We were able to stay on schedule, but it was challenging, and required some over-reliance on temporary, hard-coded data.  
* Originally we planned to use TypeScript (which we had never used before) for this entire project. After the code base reached a certain size, however, we realized we needed a bit more experience before we could manage all the moving parts. We pivoted to using JavaScript for more complex files, like fetch requests.  

---

## Authors
<table>
    <tr>
        <td> Boone Epstein <a href="https://github.com/deadbelly">GH</td>
        <td> Tashia Davis <a href="https://github.com/tashiad">GH</td>
        <td> Rachel Buchta <a href="https://github.com/rachelbuchta">GH</td>
    </tr>
<td><img src="https://avatars.githubusercontent.com/u/67235778?v=4" alt="Boone Epstein"
 width="150" height="auto" /></td>
 <td><img src="https://avatars3.githubusercontent.com/u/66852774?s=400&v=4" alt="Tashia Davis"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/69005467?v=4" alt="Rachel Buchta"
 width="150" height="auto" /></td>
</table>
