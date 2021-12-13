# Setting up Simple CI/CD Pipeline for React App

## What is a CI/CD Pipeline?

---

So what exactly is a CI/CD Pipeline? I think the best way to answer this question is to break it down piece by piece. CI/CD stands for Continuous Integration and Continuous Deployment. A Pipeline in software engineering refers to a logical queue of instructions to execute in an organized manner. Putting it all together a CI/CD Pipeline is a queue of tasks that will be executed in an organized manner each time you push to your repository so your code is verified before merging to your branch and automatically deployed to its hosting server. There are many ways of going about this. I'll be demonstrating one such way.

## Getting Started

---

### What is needed:
1. An existing ReactJS Web Application on Github
2. An AWS account
3. Github Actions

## Creating a Workflow file

---

For this project I'll be setting up the CI/CD Pipeline for my Portfolio Web Application. The first thing I'll need to do is go to my Web Applications repository on Github. Once there, I'll navigate to the Actions tab.

![image1](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost6/Images/image1.png)

After navigating to the Actions tab I should see something like this:

![image2](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost6/Images/image2.png)

It is important to note that the recommended workflows will be based off of the language that Github sees in your code. For my project I'll be using the Node.js workflow. After clicking on it I'll see a node.js.yml file with the following default code:

```yml
name: Node.js CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Let's break this code down piece by piece to make sure we understand what is happening:

```yml
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
```

- **on** is required and will state when this workflow will be executed. In this case it will execute once an pushes or pull_requests are detected on the master branch. This means that if Github receives a pull_request or commit on any other branch besides master this workflow will not be executed. 

```yml
jobs:
  build:

    runs-on: ubuntu-latest
```

- **jobs** and **build** work together to specify the tasks that will be executed in this workflow and the 
- **runs-on** will specify the runner environment that these tasks will be running on.

```yml
strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
```

- **strategy** is accompanied with either **matrix** or **parallel** in this case we will be using the former. In combination this specifies that the tasks will be executed on each of the listed platform versions of node.js.

```yml
steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

- **steps** specifies the order the tasks will be executed in.
- **uses** is required and specifies the image that will be executed. In this case actions/checkout@v2 makes the current repository accessible to the workflow. 
- **name** simply states what the name of the build
- **uses** once again specifies functionallity that will be made available such as npm. This is followed by    
- **with** this simply adds specifics to the environment
- **run** will run the following npm scripts ending with **npm test** which will run all the tests that are available in your code.


Due to issues that I experienced setting this up I recommend removing the **cache: 'npm'** instruction. It was giving me errors and it isn't necessary. After removing that line you can save and the file will be saved by default to a .github/workflows directory in your root directory. If for some reason your file is not in a directory with that specific path Github Actions will not find your workflow file and will behave as if you don't have one at all. After this my CI pipeline is where I want it for now.

## AWS Amplify 

---

A quick and easy way of deploying any application with a build in CD pipeline is with AWS Amplify. It is free up to a certain amount of traffic on any of your hosted web applications. This makes it perfect for what I need. To set this up I'll navigate over to the [AWS Amplify console](https://aws.amazon.com/es/amplify/). After either creating an account or logging in I'll just need to search the AWS Amplify service and click on it. Once I see the dashboard I can press the **New Application** button. It will give me a list of different source control to pull a repository from. I'll choose the GitHub option and after authorizing AWS to access my GitHub repositories I should see a dropdown of the available repositories to host. Once I select my porfolio page I can hit next. I can keep all the default options for my build instructions. It should look like this:

```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

After clicking next and revising all the configuration and repository details I can finish up and AWS will do the rest.

## Conclusions

---

CI/CD Pipelines are an easy way to maintain the validity of your code especially on big projects and to ensure that the latest version is always made easily available. I feel comfortable saying that they are essential to any professional software endeavor and can make your life a whole lot easier. This being the case it is well worth it to become more familiar with them and what they are capable of. 