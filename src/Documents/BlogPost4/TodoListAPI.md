# Making a Todo List API with a Database

## Getting Started

---

For this project I'm going to be demonstrating how to create an API with full CRUD (Create, Read, Update, and Delete) capability. I'll also be using a PostgreSQL database running on a docker container to store the API's data. However, this is not the only way to go about storing data. If necessary checkout out my blog [PostgreSQL Database in a Docker Container]().

### Software I'll need for this Project:

1. Visual Studio 2019
2. C#
3. AspNetCore SDK

The first thing I need to do is create the API project. I'll do this by creating the AspNetCore Web API default project:

![image1](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost4/Images/image1.png)

I'll give this project the name TodoListAPI.

---

## Creating the Endpoints

---

So the first thing I need to do at this point is to create a new Controller that will contain the endpoints for my API. I'm going to right click on my Controllers folder --> Add --> New Item --> API Controller with read/write actions. This will give me a default controller that has endpoints that look something like this:

```C#
//GET: api/<TodoListController>
[HttpGet]
public IEnumerable<string> Get()
{
    return new string[] { "value1", "value2" };
}

//GET: api/<TodoListController>
[HttpGet("{id}")]
public string Get(int id)
{
    return "value";
}

//POST: api/<TodoListController>
[HttpPost]
public void Post([FromBody] string value)
{

}

//PUT: api/<TodoListController>
[HttpPut("{id}")]
public void Put(int id, [FromBody] string value)
{

}

//DELETE: api/<TodoListController>
public void Delete(int id)
{

}
```

## Creating my Database Context object

---

Given this code, right off the bat I need to add **using TodoListAPI.Database**, and **using TodoListAPI.Models** so I have access to my class objects and database context. Then I need to declare my vital database context object that I will use to access my database. I will do this by writing at the top of my TodoListController ***private readonly TodoListDbContext _context;*** I will then initialize this object in a class Constructor using dependency injection like so:

```C#
using TodoListAPI.Database;
using TodoListAPI.Models;

private readonly TodoListDbContext _context;

public TodoListController(TodoListDbContext context)
{
    _context = context;
}
```

## Setting up my Endpoints to work with the Database

---

Alright, I have my context object now I’m ready to start setting up my endpoint functions. First, I’m going to make all my functions asynchronous so I can call Async methods on my database to ensure that there are no race conditions when my database is being accessed. I will also need to change the return type from string or void to Todo on my GET methods and a IActionResult on my other methods and wrap the return types in a Task<>. When I have done this my endpoints will look like this:

```C#
public async Task<IEnumerable<Todo>> GetTodos();
public async Task<Todo> GetTodo(string id);
public async Task<IActionResult> PostTodo(Todo newTodo);
public async Task<IActionResult> UpdateTodo(Todo newTodo);
public async Task<IActionResult> DeleteTodo(string id);
```

GetTodos() returns an IEnumerable of Todo data types so I will accomplish this by the following code:

```C#
public async Task<IEnumerable<Todo>> GetTodos()
{
    return await _context.Todos.ToListAsync();
}
```

GetTodo() will take in an id of type string and use this string to search the table of todos for a result that matches and then return that match. I will accomplish this by the following code:

```C#
public async Task<Todo> GetTodo(string id)
{
    return await _context.Todos.FirstOrDefaultAsync(i => i.Id == id);
}
```

PostTodo() will take in a Todo class object and add that object to the Todos table and save the changes then return a 200 ok object result. I will accomplish this by the following code:

```C#
public async Task<IActionResult> PostTodo(Todo newTodo)
{
    await _context.Todos.AddAsync(newTodo);
    await _context.SaveChangesAysnc();

    return new OkObjectResult(newTodo)
}
```

UpdateTodo() will take in a todo object and match the todo id with the existing row that is to be updated and then the row will be updated with the new object data. I will accomplish this with the following code:

```C#
public async Task<IActionResult> UpdateTodo(Todo newTodo)
{
    _context.Todos.Update(newTodo);
    await _context.SaveChangesAsync();

    return new OkObjectResult(newTodo);
}
```

DeleteTodo() will take in an id of type string and then find an appropriate match and return the match to a deleteTodo variable  then that result will be removed from the Todos table. I will accomplish this with the following code:

```C#
public async Task<IActionResult> DeleteTodo(string id)
{
    var deletedTodo = _context.Todos.FirstOrDefault(t => t.Id == id);

    _context.Todos.Remove(deletedTodo);
    await _context.SaveChangesAsync();

    return new OkObjectResult(deletedTodo)
}
```

## Conclusions

I now have a fully functional API that can take in HttpRequests and map them to their appropriate CRUD operation to manage or read from its database appropriately.