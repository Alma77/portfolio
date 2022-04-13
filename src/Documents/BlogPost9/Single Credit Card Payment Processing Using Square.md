# Single Credit Card Payment Processing Using Square

## Introduction

---

If you want to accept credit cards in your web application there are certain security standards that must be followed. You can go about trying to reinvent the wheel to make your own secure input for credit cards or you can use a third party. Square is definitely one of the most popular third party services for doing credit card payment processing. Their services have extended beyond just this as they have grown and become more and more popular. This makes them a very useful toolset to get familiar with and learn how to implement in your own applications and websites. This is true whether you are a small business or a large business.

In this tutorial I'm going to show you how to process credit card payments using Square. Before we begin this tutorial I'm going to be assuming that you have already followed my tutorial on setting up a credit card input container using Square's Web Payment SDK. If you do not currently have a card input container set up then you should follow that tutorial and come back here. In addition to the Application ID and Location ID that you were directed to save in a place where you can easily access them you will also need to open the Application and scroll down and find the Access Token ID. Save this in a similar place as your Application ID and Location ID so you can have access to it later.

## Resources Needed

---

* C#/Asp.Net Core
* Visual Studio 2022
* Minimum .Net5 (.Net6 should work too)
* Square Developer Account

### NuGet Packages

---

* Square

## Setting up the Front-End

---

So we are going to expand what we left off with after setting up our card input container. We are going to add a couple more input fields. One for the dollar amount we want to donate, and another one will be a hidden input that we will attatch the value of our card nonce created by the Square Web SDK in our javascript functions. We will also be expanding the javascript for our page.

After adding the additional input fields you should have something similar to this:

```html
<div class="text-center">
    <h1>Single Payment Demo</h1>

    <form class="container-sm" method="post">
        <div class="input-group-sm">
            <label class="form-label">Amount to Donate:</label>
            <input type="number" class="form-control-sm" name="money" />
        </div>
        <input type="hidden" id="card-nonce" name="cardNonce" />
        <div id="card-container"></div>


        <button type="submit" class="btn btn-primary">Donate</button>
    </form>
</div>
```

The name attribute can be anything that you like but the parameters for the OnPost() method on the back-end will have to match the value that you give. Now we need to expand on the javascript that we had from last time. We need to add a tokenize function that will take in our card and tokenize it and return the token value. This function will look like this:

```javascript
async function tokenize(paymentMethod) {
    const tokenResult = await paymentMethod.tokenize();
    if (tokenResult.status === 'OK') {
        return tokenResult.token;
    } else {
        let errorMessage = `Tokenization failed-status: ${tokenResult.status}`;
        if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(
            tokenResult.errors
        )}`;
        }
        throw new Error(errorMessage);
    }
}
```

Then we need to add a function that will pass along the card to the tokenize method and save the returned token result to our hidden input's value. We will need this token on our Back-End to be able to process the payment and charge the entered card.

To finish up we will also need to add a button to set the card token value to our hidden input. This will be accomplished by the following code at the bottom of our document.AddEventListener() function:

```javascript
const cardButton = document.getElementById('card-button');

cardButton.addEventListener('click', async function (event) {
    await SetCard(event, card);
});
```

Also adding the button to our html:

```html
<div class="text-center">
    <h1>Single Payment Demo</h1>

    <form class="container-sm" method="post">
        <div class="input-group-sm">
            <label class="form-label">Amount to Donate:</label>
            <input type="number" class="form-control-sm" name="money" />
        </div>
        <input type="hidden" id="card-nonce" name="cardNonce" />
        <div id="card-container"></div>


        <button type="submit" class="btn btn-primary">Donate</button>
    </form>

    <button id="card-button" class="btn btn-primary">Set Card</button>
</div>
```

## Setting up the Back-End

---

Now that we have our front-end all ready to go we are going to set up our Back-End. The Back-End will create a Square Client object that will be used for hitting the necessary Square API endpoints. It will use the information sent to it from the Front-End form to create the Square model objects and then send the packaged information to Square to be saved. 

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

Inside the IndexModel constructor we will create our Square Client object. This object will need the Access Token that you were directed to find and save in a easily accessible location. We will also be adding the using statements for Square and setting variables for our Application ID, and Location ID. Your code should look like the following:

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
        public string _locationId = [Location ID];
        public string _appID = [Application ID];

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

After this we will need to create an OnPost() method that will be hit when the form submit button is clicked. We will want to make this OnPost() method asynchronous with a return type of Task. It will also require a parameter for each field. In this method we will create the Square Model objects and populate them with our input data. Once the model objects are built we will send our payment to the CreatePaymentAsync endpoint using our client object. Here is my code:

```csharp
public async Task OnPost(long money, string cardNonce)
{
    var card = new Card.Builder()
        .CardholderName([Card Holder Name])
        .Build();

    var cardRequest = new CreateCardRequest(Guid.NewGuid().ToString(), cardNonce, card);

    try
    {
        var result = await _client.CardsApi.CreateCardAsync(cardRequest);
    }
    catch (Exception ex)
    {
        Console.WriteLine("Failed to make the request");
        Console.WriteLine($"Exception: {ex.Message}");
    }

    var currency = _client.LocationsApi.RetrieveLocation(_locationId).Location.Currency;

    var amountMoney = new Money.Builder()
        .Currency(currency)
        .Amount(money * 100)
        .Build();

    var paymentBody = new CreatePaymentRequest.Builder(
        sourceId: cardNonce,
        idempotencyKey: Guid.NewGuid().ToString(),
        amountMoney: amountMoney)
        .Build();

    try
    {
        var result = await _client.PaymentsApi.CreatePaymentAsync(body: paymentBody);
    }
    catch (ApiException e)
    {
        Console.WriteLine("Failed to make the request");
        Console.WriteLine($"Response Code: {e.ResponseCode}");
        Console.WriteLine($"Exception: {e.Message}");
    }
}
```

With this your back-end code should be good to go!

## Conclusion

---

At this point you should have a working application that will take in a card number and dollar amount to charge and process the payment and will be visible in the [Square Sandbox Dashboard Transactions](https://squareupsandbox.com/dashboard/sales/transactions).

