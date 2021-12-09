# Consuming a RESTful API with C# AspNet Core

---

In this simple project I will be using Http requests in order to send requests to and receive responses from a free public API and then display the information that I recieve back. I will also be stylizing my pages so all the content is easy for the user to digest using Bootstrap5.

I will be using the following tools to do this:

- Microsoft Visual Studio 2019
- AspNet Core SDK 
- Postman

I begin by first deciding which API I want to work with. There are many public API's to choose from but the one I decided to use for this project, due to it being easily accessible and its utility, was the [Movie Database (IMdb Alternative) API](https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/details). 

Now that I have the API I will create a template MVC .Net Application in Visual Studios:

## Create New Project

![image1](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image1.png)


## Give it a Name and Location Path

![image2](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image2.png)


## Create New Controller

---

 I need to create a new controller that will handle the communication between my Application and the API. I'll give it the name IMdbController.

![image3](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image3.png)

## Setup inital Controller Methods

---

In my new IMdbController.cs file I will create a method that will eventually send a search request to the API it must be asynchronous since all Http requests happen concurrently with other tasks. I will also need to make sure I have an Index method that will render by default the Index.cshtml file. After creating the method I'll have code looking something like this:

```C#
public class IMdbController : Controller 
{
    public IActionResult Index()
    {
        return View();
    }

    public async Task<IActionResult> GetMovie(string searchParameters)
    {
        //content
    }
}
```

## Fix the Scaffolding Code

---

Now, I'm going to make some changes with the default scaffolding code. First, I will need to change the name of the Views Folder that is holding the Index.cshtml file from Home to IMdb. I do this because the Controller will render views that are associated with its name. This means that our Index() method will go to the Views folder look for a folder that is associated with the Controller, in this case, IMdb. Also since our return View() takes in no parameters it will search for the page that is associated with its method name, in this case, Index.


Now, because of this change I'll be getting an Index.cshtml not found error when I try to start up the application. This is because of this section of code in the startup.cs file.

```C#
app.UseEndpoints(endpoints => 
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
    )
});
```

What this code does is at startup it is telling the application which page to initially render. In the pattern object it is saying to go to execute the Index method inside the HomeController. It will also accept an id parameter if given one but this will always be null so we don't need to worry about that. I want it to be executing the Index method inside my new IMdb controller. So I will need to make that small little change. So it will look like this:

```C#
app.UseEndpoints(endpoints => 
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=IMdb}/{action=Index}/{id?}");
    )
});
```

## Set up Application Infrastructure to communicate with the API

---

Now that I have my appliaction set up to this point I'm ready to start working with the API. The [Movie Database (IMdb Alternative) API](https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/details) provides very useful documentation for getting started and it is quite simple. Since it takes in movie searches and returns the results related to that search it has only two endpoints:

![image4](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image4.png)

Since I don't know any IMdb movie ID's within the scope of this application I will be working only with the By Search endpoint. Within the documenation provided, I find some code for properly creating a HttpClient object sending a request to the API and then receiving the response:

![image5](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image5.png)

This gives us a good jumping off point but my application requires a few things in order to make use of this data. I need to be able to store this information in variables that I can then pass to and render on my Index page. To do this I'm going to need to do 3 things:
1. Create a class object that resemble the json objects I'm going to be receiving from the API
2. The means to deserialize the json response so it can be stored in my class object and pass it to the View's Model.
3. Access and display the data I passsed to the View's Model.

## Create a class object that resemble the json objects I'm going to be receiving from the API

---


Before anything else, I need to know how to design my class object so that the json data can be properly deserialized. To do this my object has to have the same attributes as the json object. To figure this out I need to see how a response from a request looks. An easy way to do this is by using an API tool like [Postman](https://www.postman.com). Simply put the given URI into the request bar, make sure it is set to GET, and add the following two header keys and values in the header section:

![image6](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image6.png)

After sending the request if successful I will receive the following response:

![image7](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image7.png)

Now I know the object structure I need to replicate. After setting up my classes I will have two classes. A SearchResults Class that will look like this:

```C#
public class SearchResults
{
    public IEnumerable<Movie> Search { get; set; }
    public int totalResults { get; set; }
    public bool Response { get; set; }
}
```

And a Movie Class that will look like this:

```C#
public class Movie
{
    public string Title { get; set; }
    public string Year { get; set; }
    public string imdbID { get; set; }
    public string Type { get; set; }
    public string Poster { get; set; }
} 
```

It is important that my attribute names match up exactly with the json data in order to avoid any issues with the deserializer. Now that I have my classes set up I'm ready to move on to **Step 2**.

## The means to deserialize the json response so it can be stored in my class object

---

To deserialize the response I will need to add a nuget package called Nancy. I'll right click on the solution file --> Manage NuGet Packages for Solution --> Search "Nancy" --> install first result:

![image8](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image8.png)

I'll now include at the top of my IMdbController.cs file the following using statements:

```C#
using Nancy.json;
using IMdb.Models
```

Then inside my GetMovie method from before I will include the following code:

```C#
public async Task<IActionResult> GetMovie(string searchParameter)
{
    var client = new HttpClient();
    var request = new HttpRequestMessage
    {
        Method = HttpMethod.Get,
        RequestUri = new Uri($"https://movie-database-imdb-alternative.p.rapidapi.com/?s={searchParameter}&r=json&page=1"),
        Headers =
        {
            { "x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com" },
            { "x-rapidapi-key", "b14e09c913msh9ee0d11ec3a5cadp1a478fjsn543d412c352a" },
        },
    };

    var response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();

    var body = await response.Content.ReadAsStringAsync();                

    JavaScriptSerializer serializer = new();

    var results = serializer.Deserialize<SearchResults>(body);

    Log.Logger.Debug($"Response Received: {results.Response} | Number of Results: {results.totalResults}");


    return View("Index", results);
}
```

This closely resembles the default code I was given but now once I have the response body I will create a JavaScriptSerializer object provided by the Nancy.json library I added and deserialize the response body into an object of the SearchResults class I created. I will then return View(“Index”, results). What this does is tell the application to render the .cshtml file with the name I provided which will be Index.cshtml and pass along data in results to the view’s model. This brings us to **Step 3**. 

## Access and display the data I passsed to the View's Model

---

I’ll need to go into my Index.cshtml file and start by deleting most of the default html. Then I’m going to be changing the title and adding a form to take input from the user and submit it to the IMdb controller GetMovie method. I will also be adding some simple bootstrap css classes to keep it looking nice. Once I’m done my code looks like this:

```html
@{
    ViewData["Title"] = "Home Page";
}

<div class="container">
    <h1 class="display-4 text-center">Welcome to your Movie Database</h1>
    <form method="post" asp-controller="IMdb" asp-action="GetMovie">
        <div class="form-group">
            <label class="">Search for a Movie:</label>
            <input type="text" name="searchParameter" class="form-control" placeholder="ex: The Last Samurai" required/>
        </div>
        <button type="submit" class="btn btn-primary" style="margin-bottom: 1rem;" value="Submit">Search</button>
    </form>
```

This gives me a text input that I can input my search parameter into and once I press the submit button it will store the input into the searchParameters parameter in my GetMovie method and insert it into our request URI.

Next I’m going to take that data and display it. I can do this building on this fundamental line of code:

```html
@model IMdb.Models.SearchResults
```

This model will expect to store a SearchResults class object that it will receive from the View(“Index”, results) from the GetMovie method. I will create a foreach loop that will go through each item stored in the model.Search list and for each of those items display its contents. I will stylize this list once again using some bootstrap so it appears clean and easy to digest. When I’m done my code looks like this:

```html
@model IMdb.Models.SearchResults
@{
    ViewData["Title"] = "Home Page";
}

<div class="container">
    <h1 class="display-4 text-center">Welcome to your Movie Database</h1>
    <form method="post" asp-controller="IMdb" asp-action="GetMovie">
        <div class="form-group">
            <label class="">Search for a Movie:</label>
            <input type="text" name="searchParameter" class="form-control" placeholder="ex: The Last Samurai" required/>
        </div>
        <button type="submit" class="btn btn-primary" style="margin-bottom: 1rem;" value="Submit">Search</button>
    </form>

    <ul class="list-group text-left">
        @if (Model != null)
        {
            foreach (var movie in Model.Search)
            {
                <li class="list-group-item">
                    <div class="row">                        
                        <div class="col">
                            <img src=@movie.Poster />
                            <h3><bold>@movie.Title</bold></h3>
                            <h6>@movie.Year</h6>
                        </div>
                    </div>                    
                </li>
            }
        }

    </ul>
    
</div>
```

## Final Result

---

When I run my application this is what you will see:

![image9](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image9.png)

If I search for the movie Avatar this will be displayed:

![image10](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/Images/image10.png)

… other items follow but for brevity I’m only showing the first result.
