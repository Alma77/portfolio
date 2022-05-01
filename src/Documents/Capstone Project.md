# My Capstone Project

## Table of Contents

---

* <a href="#learning">Learning Square</a>
* <a href="#single">Processing One-Time Payments</a>
* <a href="#subscription">Processing Subscription Payments</a>
* <a href="#meeting">Meeting with Sanpete Food Pantry to Demo my Donation Features using Square</a>
* <a href="#complications">Life's Complications Getting in the Way</a>
* <a href="#finalpush">The Final Push</a>
* <a href="#finishing">Approval and Deployment</a>
* <a href="#conclusions">Conclusions</a>

## Introduction

---

Our class was presented with an opportunity to work on the donations page for the local food pantry, Sanpete Food Pantry, and I jumped on it right away. I was eager to work on a project that would have importance outside of myself and have the opportunity to work on a more professional project that would bring value to a client and be in use farther into the future than my previous projects. In the beginning I worked with my teacher [Heber Allen](https://www.linkedin.com/in/heberallen/) as the project manager.

Heber instructed me that the project required a C# web application that could communicate with Square API and allow for both single and subscription based donation payments. It would also require those payments to be either annonymous or associated with a specific customer. Subscriptions would also allow for either a monthly, quarterly, or annually based recurring payment that would be contracted for a certain amount of years. For the sake of being user friendly it would also require logins to be associated with the customer data stored on Square's end. Heber asked me to study the Square API documentation and come back with demos demonstrating single and subscription payments.

<div id="learning"></div>

## Learning Square

---

I dived deep into [Square API's Explorer](https://developer.squareup.com/explorer/square/) learning how all the different parts of the API fit together and how it would communicate with my .Net Web Application. I made a lot of progress fairly quickly learning this part. Accomplishing this was made pretty easy by the Square NuGet package available and even more so after finding its [github repository](https://github.com/square/square-dotnet-sdk) and the associated documentation on all the different models and functions. I quickly was able to learn how to process payments, set up subscriptions, register new customers, and associate different cards with those customers. The part that was most difficult for me was setting up the credit card input container to allow a user to securely provide payment information that was more than just a demo card provided by the API. 

I struggled with this for quite a while. The only way they provide for embedding a secure card input container is through a CDN that provides some javascript libraries for generating the necessary components to attach to the card conatiner. However, since I had to make this application in C# this made things tricky having to mix front-end javascript with my back-end cshtml and get them properly working together. I had so much trouble with this that I looked for alternative ways of going about this that were more C# friendly. I managed finding a couple of options that worked for single annonymous donations but I would quickly come to discover they were insufficient for dealing with non-annonymous and subscription based donatons. Eventually, I properly learned how to get my javascript code to work effectively with my C# code. I show thoroughly how I accomplished this in my blog post ***"Setting Up PCI DSS Standard Credit Card Input Using Square Web Payment SDK."***

<div id="single"></div>

## Processing One-Time Payments

---

After setting up my card container and getting that working I was quickly confronted with another problem. My card payment token is generated in my javascript on the front-end using the provided Square CDN libraries but all the major communication with the API was happening on my back-end code. I needed to find someway to pass the token value to my back-end code by connecting it to an input in my cshtml form. This being a demo I found a way by adding another button that would find a hidden input inside my form by its id attribute and set its value to the value of the card token. Then when the form data is submited the token would be sent to the back-end with it. If you would like to see a more detailed description of how all of this was done you can look at my blog post ***"Single Credit Card Payment Processing Using Square."***

<div id="subscription"></div>

## Processing Subscription Payments

---

After struggling for so long with finding the proper way to getting the input for the user's card, then being able to take that input and tokenize it, and finally being able to get that token from the front-end to my back-end a lot of the work was done to be able to properly set up a subscription plan. However, there were some additional complexities that had to be dealt with if this feature was going to be prepared to deal with a production environment. Heber had stated that he would like for them to have the option of creating a 1 to 5 year contract in which they would be required to make a donation of the given amount, at the given cadence, for the given number of years. He also wanted them to be able to set whether or not they wanted the payment to be taken out on the 1st or 15th of the month. To figure out how I was going to do this I had to investigate the API even closer. 

I originally was looking into accomplishing both of these things by creating an ICalender (RFC 5545) event that I thought would allow me to specify all of this data. I had never worked with the syntax for this type of object and was scratching my head about how to accept the user input in a way that was natural and intuitive for the user but then convert it on the back-end to fit with the requirements for this object. This was quickly becoming very complicated so I decided to look for alternative options. After doing some more investigating into the API endpoints associated with creating a subscription I found two sections that would be perfect for my needs, and that were simple to implement. Inside the phases object for the subscription plan data there was an integer attribute called periods that would specify the amount of times that the payment would be made. If I could calculate this number based off of the given cadence of Weekly, Monthly, or Annually and the number of years specified in the contract then I could easily set this up. Now that I had a way for dealing with the contract feature, I needed to find a way to allow the payments to be processed at the 1st or 15th of the month. I found a way to do this with the API that was very easy as well. While creating the subscription on the API side there is a string attribute that accepts a string in (YYYY-MM-DD) format called start_date. This will specify when the subscription is to start. All I have to do is to automate what month this will be based off of the current date and ask the user to specify if they would like the payment to start the 1st or 15th of that month. 

If you would like a closer look at the way I implemented all of these features you can navigate to my Blog Posts and find my post **"Subscription Credit Card Paymnent Processing Using Square."**

I showed everything that I had done to Heber and he decided that we were ready to demo the application to the Director of Sanpete Food Pantry Marty McCain. We called him and set up a meeting. 

<div id="meeting"></div>

## Meeting with Sanpete Food Pantry to Demo my Donation Features using Square

---

Heber and I met up with Marty McCain with the intention of showin off all of the features that I had figured out using Square API and getting the okay to start moving the features into the production environment but things went a little bit different than expected. Sanpete Food Pantry had recently purchased the NeonCRM and he was really excited to show off all of the conveniences that it brought and was adamant about taking advantage of all its additional infrastructure and business features. In short, while all the work I had done learning Square was not a waste because it is a tool that I will most likely use again at some point in my career, I would not be using it for this project. 

Heber and I had to change gears and figure out what our new requirements were so we questioned Marty about what he wanted the end product to look and function like. I had the tendency in this meeting of trying to get too technical. Marty is a very old fashioned guy and has little to no experience with computers and technology. Heber demonstrated very well how to bridge that gap in understanding by only asking the client what they wanted to see on the page and then taking their input and extrapolating onto a paper plan for us what the technical requirements would be. He would also clarify any possible misunderstandings that were taking place to make sure that we were all on the same page. After, getting the new requirements from Marty, Heber and I talked for a bit longer deciding on a plan moving forward. 

Though things changed drastically from what we were originally expecting, the new requirements made things a lot simpler for us in many ways. The majority of the complex and technical features were going to be handled through NeonCRM so we would just have to create the donations page using their built in page builder and connect to it. I was also now put in charge of designing all of the front-end for the new Sanpete Pantry website. I was given access to the beta site's code and was given a lot of freedom of how to go about designing it. This was all just before Spring Break.

<div id="complications"></div>

## Life's Complications Getting in the Way

---

During Spring Break I received a very instructive lesson on just how life's complications can get in the way of these kinds of projects and learning how to overcome them. For Spring Break I had planned a trip to visit Lima, Peru. The trip was awesome while I was there but getting to the country and getting back home from the country was quite an adventure. I don't want to get overly into details that don't particularly matter, so in short, due to missing my departure flight because of Covid-19 complications I had to reschedule my departure and return tickets with my airline. I managed to make it to Peru and had a wonderful time there. As I was checking into my flights on the way home I learned that the airline had screwed up arranging my return flights and didn't schedule my connecting flight from Costa Rica to Los Angeles. I ended up having to get a new flight out of Peru for the following morning but because of this I was going to miss more days of school than I had previously planned. After spending the night in the airport and not really getting any sleep, flying the 12 hours back to Los Angeles without getting much sleep and then driving for 10 hours I arrived back in Ephraim, Utah. I ended up just checking in with some of my teachers and then going home to get some much needed rest. 

At this point I was halfway through the school week and was behind on a lot of assignments. After all the excitement and craziness of Spring Break I had lost track of the specifics of the plan that Heber and I had figured out for designing the Sanpete Pantry website. Also, due to all the confusion I was under the impression that I had a week longer than I did in that current sprint to make progress in the requirements that we had laid out. By the time I had caught up in my other classes and got into touch with Heber to refocus myself, I had basically lost that entire sprint and had only the next 2 week sprint to get everything together. 

<div id="#finalpush"></div>

## The Final Push

---

I had gotten myself into a less than ideal position but I knew that what was done was done and that I just needed to make sure that I stayed completely focused for this next sprint. I met up with Heber and clarified exactly what we needed to get done and what features needed to be included. I laid out a plan for what I needed to get done each day to be able to finish on time and I worked like a madman putting in a lot of extra hours to get it all done. 

While designing the site I put a lot of effort into trying to give off an impression that would fit the overall personallity of Sanpete Food Pantry. I wanted everything on the page to tell the story about who Sanpete Pantry was and what they were all about. I tried to pull a lot of inspiration and content from their Facebook page. I wanted to see what their current overall presentation style was and the type of content they shared and stay true to that. 

Along with the web page I also had to figure out how to properly design and host the donations page with all of the required features using NeonCRM. While NeonCRM simplified many things that simplificiation came with the price of not being very flexible. I found that I was limited in many ways as to what the donations page would allow. If we wanted a feature that wasn't readily available through the NeonCRM page builder there wasn't much that I could do. I would end up spending a significant amount of time reading through NeonCRM's documenation looking for all of the options that were available and how best to work within those features. We ended up having to compromise in a couple of ways just due to the limitations of the tool. One, I could not host the donations page in an iframe on the Sanpete Pantry site. I imagine for security reasons the donations page is protected against such things. Due to this we would have to redirect a user away from the Sanpete Pantry site to the donations page site. The second limitation was that we could only have one subscription option presented to the user. We would have to decide if we wanted subscriptions to be monthly, weekly, or annually but we couldn't present all of those options to the user. Only one. We ended up opting on the monthly subscription option. 

For the most part the project ended up not being overly technical but it presented me with plenty of challenges of figuring out how to make a clean web design and positive user experience that also did the job of presenting the client in a way that was appealing and true to who they were. Mixing all of these things together in a neat web package is not easy but is something that I thoroughly enjoy and is a skill that I hope to continue to develop. 

<div id="finishing"></div>

## Approval and Deployment

---

After finishing the web page the only thing left to do was to meet with Marty McCain and be told that it he is happy and it is ready to go or to figure out what he would like changed and make those changes. At this point I have about a week before the deadline. I called Marty and set up a meeting time with him a couple of days later. I figured this would give me enough time to refine anthing that I find on my own before the meeting and I would have enough time to fix anything that Marty did not like after the meeting and still make the deadline. I met up with Marty and showed him the web site and he was very pleased with how it looked and all of the features. He gave his approval and wanted it to be deployed as soon as possible. 

I met up with Heber right after and let him know that we were good to deploy it. We had to spend a good amount of time fixing some features that had bugs in the deployment environment and some other pipeline issues but after a couple of days between Heber and I we had everything ironed out and the site was live. 

<div id="conclusions"></div>

## Conclusions

---

It was an amazing feeling having something that I had made be completely live and be something that you could google and find. There are a lot of things that I wish I knew how to do better and make nicer with the site but I'm very happy with what I was able to accomplish. I'm also very happy with the experience of working on a project that had the intention of going into production and working with a client the way I was able to during this project. This whole project was an incredible growing experience for me and one that I learned many important lessons from such as the importance of consistent communication with your project manager, how to extract requirements from a client, knowing that mistakes happen but you can work through them, how to build a repore with the client, along with many other technical skills that I didn't have previously. 