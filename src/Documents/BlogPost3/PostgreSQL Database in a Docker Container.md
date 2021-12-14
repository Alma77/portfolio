# Making a PostgreSQL Database in a Docker Container

## Getting Started

---

### Software I'll need for this project:

- Visual Studio 2019
- C#
- AspNet SDK
- Docker and Docker CLI

In this project I will create a PostgreSQL database that will be running on a docker container. I will also demonstrate how to connect to this database with any AspNetCore project. 

## Building the Docker Container

---

With Docker and the Docker CLI installed this next part is surpisingly simple. To get a docker container running I'll just need to run the following script in powershell.


```powershell
docker run --name=postgres -p 5432:5432 -e POSTGRES_PASSWORD=[my_password] postgres
```

This command will build the latest postgres image and run it in a container named postgres exposing it on port 5432 on my localhost secured by ‘my_password’. Once this is done, I successfully have a postgres docker container running on my system that is ready to be connected to. Now, I need to set up my application to connect to it. To do this I’m going to start by downloading a couple of necessary NuGet Packages.

## Installing the NuGet Packages

---

After opening in Visual Studios the project I desire to connect to my database, I’ll right click my solution file and click on the <Manage NuGet Packages for Solution…> option. This will bring up the NuGet window in Visual Studio. I’ll then proceed to download **EntityFramework6.Npgsql, Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.Design, and Npgsql.EntityFrameworkCore.PostgreSQL**. I now have all the packages I need now I need to set up the class objects that will represent the tables of my Database and the Database Context class object.

## Creating my Class Objects

To do this I will create a couple of folders in my Project. I’ll make a folder named Models and another folder named Database. For the purposes of this demonstration I will model my database tables to that of the data of a Todo List. Inside my Models folder I’m going to make a class called Todo.cs. This class will contain the attributes I need for my Todos. It will have an Id, a Title, a Description, a date for the item to be done, a date posted, and a nullable date Edited. Once I’m done my class will look like this:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoListAPI.Models
{
    public class Todo
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public DateTime Posted { get; set; }
        public DateTime Edited { get; set; }
    }
}
```

## Setting up my Database Tables

---

I’ll be adding another class to my Database folder called TodoListDbContext.cs. Within this class I will add two using statements. **Using Microsoft.EntityFrameworkCore** and **Using [Project_Name].Models** in my case my Project Name is TodoListAPI. Next, I will have my class inherit from DbContext. Now, I’m going to add the following code:

```C#
using Microsoft.EntityFrameworkCore;
using TodoListAPI.Models;

public TodoListDbContext(DbContextOptions<TodoListDbContext> dbContextOptions) : base(dbContextOptions)
{ 
}

public DbSet<Todo> Todos { get; set; }
```

This will tell the database to create a table called Todos and to populate its columns based off of my Todo class. 

Now, I’m ready to set up my Database connection. I need to open up my Startup.cs file and inside the ConfigureServices() method I’m going to add the using statement “Using Microsoft.EntityFrameworkCore. Then add the following code:

```C#
services.AddDbContext<TodoListDbContext>(options => options.UseNpgsql(Configuration["DATABASE_URL"]));
```

I’m accessing my connection string inside my appsettings.json file however I could have just as easily put it directly into my AddDbContext call. The following is my connection string:

```C#
"DATABASE_URL": "host=localhost; port=5432; database=postgres; user id = postgres; password=[my_password]"
```

Inside my Program.cs file I’ll include the same using statement as before and then within my Main() method add the code:

```C#
public static void Main(string[] args)
{
    var host = CreateHostBuilder(args).Build();
    using(var scope = host.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<TodoListDbContext>();
        db.Database.Migrate();
    }

    host.Run();
}
```

Now for the final ingredient to set up our database we need to run a dotnet ef add migrations command from our terminal:

```powershell
dotnet ef migrations add [migration name]
```

The migration name can be anything. For my first migration I usually call it “initial.” Once this runs and it returns successfully I’ll see a Migrations Folder in my Project that should contain two files. A file that will be called **[some id]_[migration_name].cs** and a **[Database Context Class Name]ModelSnapshot.cs**. At this point my database is initialized with tables resembling my DatabaseContext object which currently as is will create a single table called Todos with the columns being the classes attributes.

## Conclusions

---

At this point I have a PostgreSQL database that is running in a docker container. I also have set up an AspNetCore project so that it will connect to the database and populate it with the tables relevant to the projects needs. In the case of my project it will store the Todos for a Todo List.