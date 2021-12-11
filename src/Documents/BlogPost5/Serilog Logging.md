# Serilog Logging

## Getting Started

---

For this project I'm going to add some Logging to an existing web application. In this project I'll be using my [IMdb Movie Search Web Applicaton](). 

### Software I'll need for this project:

1. Visual Studios 2019
2. AspNetCore SDK

## Why is logging even important?

---

Let's be honest. Not many people really like to do proper logging. Much like testing, it is one of those parts of programming that isn't very glamourus or exciting and we don't really think about its importance until something breaks. Sometimes the part of the code that is faulty is obvious and easily remedied, but othertimes you stare at the screen for hours scratching your head wondering what is going wrong; wishing you could easily trace the programs logic and see where it starts to go wrong. Well, with good logging, when that moment comes debugging and fixing the problem becomes a whole lot easier, and in the long run will save you lots of time and headache. Not only this, but it can also serve to help you greatly improve your application's performance and to help serve your clients more readily, or even predict possible future problems. 

## Setting up Serilog

First off,  I need to start by installing the **Serilog**, **Serilog.Settings.Configuration** and **Serilog.Sinks.File** NuGet packages. Then, in my program.cs I include the following code:

```C#
var configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build();

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(configuration)
    .CreateLogger();
```

This will build a configuration based on my appsettings.json file and configure the global Log.Logger from Serilog based on that configuration. Inside my appsettings.json I will include the following json:

```json
{
  "Serilog": {
    "MinimumLevel": {
      "Default": "Debug",
      "Override": {
        "Microsoft": "Warning",
        "System": "Warning"
      }
    },
    "WriteTo": [
      {
        "Name": "File",
        "Args": {
          "path": "Logs/Log.json",
          "rollingInterval": "Day",
          "formatter": "Serilog.Formatting.Json.JsonFormatter"
        }
      }
    ]
  },
  "AllowedHosts": "*"
}
```

This will set the logger to write to a file in a Logs folder named Log.json and will replace the logs every day. The formatter will format the logged data according to the Serilog.Formatting.Json.JsonFormatter design. 

## Adding Logging to my Project

---

I will then added logging to my code and when I’m done my code will look like this:

```C#
public class Program
{
    public static void Main(string[] args)
    {
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

        Log.Logger = new LoggerConfiguration()
            .ReadFrom.Configuration(configuration)
            .CreateLogger();

        try
        {
            Log.Logger.Warning($"Application Starting up....");
            CreateHostBuilder(args).Build().Run();
        }
        catch(Exception e)
        {
            Log.Logger.Fatal($"{e}: {e.Message}");
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            });
}
```

```C#
public async Task<IActionResult> GetMovie(string searchParameter)
{
    Log.Logger.Debug($"Searching for the movie {searchParameter}");

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

    Log.Logger.Information($"Http request generated: Method: {request.Method} URI: {request.RequestUri}");

    try
    {
        var response = await client.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var body = await response.Content.ReadAsStringAsync();                

        JavaScriptSerializer serializer = new();

        var results = serializer.Deserialize<SearchResults>(body);

        Log.Logger.Debug($"Response Received: {results.Response} | Number of Results: {results.totalResults}");


        return View("Index", results);

    }
    catch (Exception e)
    {
        Log.Logger.Error($"Failed to receive a successful response. Exception message: {e.Message}");
    }

    return View("Index");
}
```

## Resulting Logs

---

After running the application and doing some searches I will have the following logs:

```json
{
  "Timestamp": "2021-10-03T17:47:35.6475519-06:00",
  "Level": "Warning",
  "MessageTemplate": "Application Starting up...."
} {
  "Timestamp": "2021-10-03T17:48:02.5987634-06:00",
  "Level": "Debug",
  "MessageTemplate": "Searching for the movie Star Wars"
} {
  "Timestamp": "2021-10-03T17:48:02.6068482-06:00",
  "Level": "Information",
  "MessageTemplate": "Http request generated: Method: GET URI: https://movie-database-imdb-alternative.p.rapidapi.com/?s=Star Wars&r=json&page=1"
} {
  "Timestamp": "2021-10-03T17:48:03.4257075-06:00",
  "Level": "Debug",
  "MessageTemplate": "Response Received: True"
} {
  "Timestamp": "2021-10-03T17:48:35.1898573-06:00",
  "Level": "Debug",
  "MessageTemplate": "Searching for the movie Rogue One"
} {
  "Timestamp": "2021-10-03T17:48:35.1904763-06:00",
  "Level": "Information",
  "MessageTemplate": "Http request generated: Method: GET URI: https://movie-database-imdb-alternative.p.rapidapi.com/?s=Rogue One&r=json&page=1"
} {
  "Timestamp": "2021-10-03T17:48:35.8532870-06:00",
  "Level": "Debug",
  "MessageTemplate": "Response Received: True"
} {
  "Timestamp": "2021-10-03T17:51:29.2106321-06:00",
  "Level": "Warning",
  "MessageTemplate": "Application Starting up...."
} {
  "Timestamp": "2021-10-03T17:51:49.6030740-06:00",
  "Level": "Debug",
  "MessageTemplate": "Searching for the movie Avatar"
} {
  "Timestamp": "2021-10-03T17:51:49.6104171-06:00",
  "Level": "Information",
  "MessageTemplate": "Http request generated: Method: GET URI: https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avatar&r=json&page=1"
} {
```

## Conclusions

---

This is a pretty simple application and the information I log is fairly simple in return. But this is a starting point into the world of telemetry that, while not glamourus, is one of the most important tools for any software developer.