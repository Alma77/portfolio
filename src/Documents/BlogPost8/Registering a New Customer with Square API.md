# Registering a New Customer with Square API

## Introduction

---

f you want to accept credit cards in your web application there are certain security standards that must be followed. You can go about trying to reinvent the wheel to make your own secure input for credit cards or you can use a third party. Square is definitely one of the most popular third party services for doing credit card payment processing. Their services have extended beyond just this as they have grown and become more and more popular. This makes them a very useful toolset to get familiar with and learn how to implement in your own applications and websites. This is true whether you are a small business or a large business.

In this tutorial I'm going to show you how to register new Customers with your Square Developer Application using ASP.NET Core and C#. If you would like to explore the Square API beyond this tutorial or if you would like to see the endpoints we will be interacting with you can visit the documentation [here](https://developer.squareup.com/explorer/square).

## Resources Needed

---

* C#/Asp.Net Core
* Visual Studio 2022
* Minimum .Net5 (.Net6 should work too)
* Square Developer Account

### NuGet Packages

---

* Square

## Getting Started

---

To start you are going to need a basic .Net Web Application. Open up Visual Studio --> Create a new project --> ASP.NET Core Web App:

![Create App](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost8/CreateApp.png)

Give the application a name and install the listed NuGet Packages and you are ready to move on to setting things up on the Square side.

Navigate to [Square Developer](https://developer.squareup.com/us/en) and click on the Get Started button:

![Square Developer](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost8/SquareDeveloper.png)

You will have to create a Square Developer account and once you have one created you are going to sign in and create a new application:

![Developer Application](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost8/DeveloperApp.png)

Next you will need to open the Application and scroll down and find the Access Token ID. Save this somewhere where you will have easy access to it later.

## Setting Up The Front-End

---

To create a new customer for your Square Application you are going to need to gather some information on the customer. To do this we are going to create a form with several input fields in our Index.cshtml file. None of these fields are actually required to create the customer object so exclude or include these inputs as your application requires. I will be creating input fields for a Company Name, Given Name, Family Name, Email Address, Phone Number, and Address. I will also be adding some bootstrap 5 classes to my code so it is more visually pleasing. My html looks like the following:

```html
<div class="text-center">
    <form class="container-sm" method="post">
        <div class="row">
            <div class="col-5">
                <div class="input-group-sm">
                    <label class="form-label">Company Name:</label>
                    <input type="text" class="form-control" name="companyName" />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Given Name:</label>
                    <input type="text" class="form-control" name="givenName" required />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Family Name</label>
                    <input type="text" class="form-control" name="familyName"  />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Email Address:</label>
                    <input type="email" class="form-control" name="email" required />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Phone Number:</label>
                    <input type="text" class="form-control" name="phoneNumber" required />
                </div>
            </div>
            <div class="col-5">
                <div class="input-group-sm">
                    <label class="form-label">Address Line 1:</label>
                    <input type="text" class="form-control" name="addressLine1" />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Address Line 2:</label>
                    <input type="text" class="form-control" name="addressLine2" />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Address Line 3:</label>
                    <input type="text" class="form-control" name="addressLine3" />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Country:</label>
                    <input type="text" class="form-control" name="country" />
                </div>
                <div class="input-group-sm">
                    <label class="form-label">Postal Code:</label>
                    <input type="text" class="form-control" name="postalCode" />
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Sumbit</button>
    </form>
</div>
``` 

It is important to note that the name of each input field is the name that the value will be matched with on the Back-End OnPost() method. These names can be whatever you would like them to be but make sure that they match the OnPost() parameters that we will be setting up on the Back-End.

## Setting Up The Back-End

---

Now that we have our form and input fields all ready to go we are going to set up our Back-End. The Back-End will create a Square Client object that will be used for hitting the necessary Square API endpoints. It will use the information sent to it from the Front-End form to create the Square model objects and then send the packaged information to Square to be saved. 

Let's start with the Square Client object. We are going to open our Index.cshtml.cs file and we should see similar code to the following: 

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace [ApplicationName].Pages
{
    public class IndexModel : PageModel
    {
        public IndexModel()
        {

        }
    }
}
```

Inside the IndexModel constructor we will create our Square Client object. This object will need the Access Token that you were directed to find and save in a easily accessible location. We will also be adding the using statements for Square. Your code should look like the following:

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Square;
using Square.Models;
using Square.Apis;
using Square.Exceptions;

namespace [ApplicationName].Pages
{
    public class IndexModel : PageModel
    {

        private readonly SquareClient _client;

        public IndexModel()
        {
            _client = new SquareClient.Builder()
                .AccessToken([AccessToken])
                .Environment(Square.Environment.Sandbox)
                .Build();
        }
    }
}
```

After this we will need to create an OnPost() method that will be hit when the form submit button is clicked. We will want to make this OnPost() method asynchronous with a return type of Task. It will also require a parameter for each field or if there are some fields that won't be used every time you can set them to nullable by placing a '?' after the data type. In this method we will create the Square Model objects and populate them with our input data. Once the model objects are built we will send our new customer to the CreateCustomerAsync endpoint using our client object. Here is my code:

```csharp
public async Task OnPost(string? companyName, string givenName, string? familyName, 
    string email, string phoneNumber, string? addressLine1, string? addressLine2, 
    string? addressLine3, string? country, string? postalCode)
{
    var address = new Address.Builder()
        .AddressLine1(addressLine1)
        .AddressLine2(addressLine2)
        .AddressLine3(addressLine3)
        .Country(country)
        .PostalCode(postalCode)
        .Build();

    var customerBody = new CreateCustomerRequest().ToBuilder()
        .IdempotencyKey(Guid.NewGuid().ToString())
        .CompanyName(companyName)
        .GivenName(givenName)
        .FamilyName(familyName)
        .EmailAddress(email)
        .PhoneNumber(phoneNumber)
        .Address(address)
        .Build();

    try
    {
        var result = await _client.CustomersApi.CreateCustomerAsync(body: customerBody);
    }
    catch (ApiException e)
    {
        Console.WriteLine("Failed to make the request");
        Console.WriteLine($"Response Code: {e.ResponseCode}");
        Console.WriteLine($"Exception: {e.Message}");
    }
}
```

Once you have this done you should be all set to create new customers that you can use for all your other Square services and needs. 

## Conclusion

---

By this point you should have a fully functioning Web Application that will allow you to easily create new customers to be used for all of your Square needs. Such as the following:

![Website](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost8/WebSite.png)