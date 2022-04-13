# Setting up PCI DSS Standard Credit Card Input Using Square Web Payment SDK

## Introduction

---

If you want to accept credit cards in your web application there are certain security standards that must be followed. You can go about trying to reinvent the wheel to make your own secure input for credit cards or you can use a third party. Square is definitely one of the most popular third party services for doing credit card payment processing. Their services have extended beyond just this as they have grown and become more and more popular. This makes them a very useful toolset to get familiar with and learn how to implement in your own applications and websites. This is true whether you are a small business or a large business.

In this tutorial I'm going to show you how to use Square's Web Payment SDK to set up a secure Credit Card input box using C# and Javascript. 

## Resources Needed

---

* C#/Asp.Net Core
* Visual Studio 2022
* Minimum .Net5 (.Net6 should work too)
* Square Developer Account

## Getting Started

---

To start you are going to need a basic .Net Web Application. Open up Visual Studio --> Create a new project --> ASP.NET Core Web App:

![Create App](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost7/CreateApp.png)

Give the application a name and you are ready to move on to setting things up on the Square side.

Navigate to [Square Developer](https://developer.squareup.com/us/en) and click on the Get Started button:

![Square Developer](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost7/SquareDeveloper.png)

You will have to create a Square Developer account and once you have one created you are going to sign in and create a new application:

![Developer Application](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost7/DeveloperApp.png)

Next you will need to open the Application and scroll down and find the Sandbox Application ID. Save this somewhere where you will have easy access to it later. Next on the left side of the screen near the bottom of the side bar you will see a Locations button. Navigate to that section and copy the Location ID where you will have access to it later on as well. 

## Connecting to the Square Web Payment SDK Libraries

---

Inside the **Shared Folder** you will find a _Layout.cshtml file. Here you will find some scripts that connect your application to jquery, and bootstrap libraries. You will also find a script that will connect to your pages to the site.js file in your wwwroot folder. Underneath these we are going to include another script that will connect to the Square CDN and Web Payment SDK libraries you will need for setting up your Credit Card input box. The script will look like this:

```html
<script src="https://sandbox.web.squarecdn.com/v1/sqaure.js"></script>
```

## Setting Up Your Card Container

---

To display your card container you are simply going to need at least the following html in your Pages --> Index.cshtml file:

```html 
<div id="card-container"></div>
```

The card-container id will indicate to Square that this is where the card input box will be placed. Any other content that you would like to add to the page is just dressing for the purposes of this tutorial. 

## Using the Square Web Payment SDK Libraries

---

This is where the meat of the tutorial comes in. To begin we are going to go back to our _Layout.cshtml file where we added our scripts and bellow that we are going to include the following code:

```html
@await RenderSectionAsync("Scripts", required: false)
```

This will tell Visual Studio to render our javascript code, that we are going to include, asynchronously so that it will do the work we need it to do behind the scenes and set up our card-container.

Now we are going to include the javascript to our Index.cshtml file:

```javascript
 async function initializeCard(payments) {
   const card = await payments.card();
   await card.attach('#card-container'); 
   return card; 
 }

document.addEventListener('DOMContentLoaded', async function () {
  if (!window.Square) {
    throw new Error('Square.js failed to load properly');
  }
  const payments = window.Square.payments([application id], [location Id]);
  let card;
  try {
    card = await initializeCard(payments);
  } catch (e) {
    console.error('Initializing Card failed', e);
    return;
  }
});
```

Where it says [application id] and [location id] you will include your Square Developer Application's Application ID and Location ID that you were directed to copy somewhere where you could access it later. 

## Conclusion

---

You can now run the web application and you should see a credit card input box similar to the following:

![Card Container](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost7/CardContainer.png)

As it stands there is no code to process the payments but you now have an input box for your credit card that is PCI DSS standard compliant. This can be built off of in a number of ways and adapted to a number of applications. 