# Setting up Node.js and Creating a React Application

## What you need to get started

---

* A Windows Computer
* An Internet Connection
* A Command Line Console such as Powershell


## Introduction

---

This tutorial assumes you have a basic understanding of how to operate a computer, navigate software installations and input commands into a Command Line Console. In this tutorial I'm going to be showing you what you need to get create your initial React.js application. After this tutorial you will have a running React App and an environment, in which you will be able to start experimenting and learning how to expand and modify it to your needs. If you are in any way interested in getting started with front-end web development then this tutorial is a must.

This tutorial has 3 major steps:

1. Download Visual Studio Code<
2. Download Node.js
3. Running Command Line Interface Scripts

Let's take these one at a time!

## Download Visual Studio Code

---

First we are going to download Visual Studio code by clicking [here](https://code.visualstudio.com/Download). You will see a screen like this:

![VS Downloader](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost11/vsdownloader.png)

Click the windows option. This should start a download in your browser for the exectuable file. To view the file in your downloads folder press Ctrl + J on your keyboard while you are focused on your browser application. The executable file should say something like ***VSCodeUserSetup-x64-1.66.2.exe***. Depending on the date you are downloading this the numbers after VSCodeUserSetup may vary. Double click the file and go through the installation steps.

Once you have Visual Studio Code installed and running you are ready for the next step. 

## Download Node.js

---

Now we are going to download Node.js by clicking [here](https://nodejs.org/en/). You will see a screen like this:

![Node Downloader](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost11/nodedownload.png)

Click the recommended option and once again this will start a download in your browser for the executable file. Once again if you need to open your downloads folder you can press Ctrl + J on your keyboard while you are focused on your bowser application. The executable file should say something like ***node-v116.14.2-x64.msi***. Once again depending on the date you are downloading this the numbers after node may vary. Double click the file and go through the installation steps.

Once you have finished installing Node.js we are going to check to make sure that we have what we need to move on to the next step by opening up our Command Line Console. I will be using Powershell. Once you have your console open you are going to run the following scripts:

```ps
node -v
```

```ps
npm -v
```

This should return a result like the following

```ps
node -v
v14.17.6
```

```ps
npm -v
6.14.15
```

I'm may be running older versions of the software so you might see larger numbers for the fist number. That is okay. As long as you receive a version number as a response then that means you are good to move on to the next step.

## Running Command Line Interface Scripts

---

We are going to run some scripts in the same Command Line Console that you used to get the version numbers. First we are going to navigate to the file path where we would like our new application to live on our computer. I'm going to show you a common file path used by coders to store all of their software projects but where the application lives on your computer won't affect how it runs, so feel free to ignore this part if it doesn't matter to you.

We are going to navigate to our Documents Folder. When you open your Command Line Console by default it should start in your User directory. From here you will run the following commands in powershell:

```
cd .\Documents\
mkdir source
cd .\source\
mkdir repos
cd .\repos\
```

If you are using a Command Line Console other than powershell you can look up on google "console commands for [insert Command Line Console here]". Or you can simply open up your file manager application and create the folders using that. 

Once at this point we are going to run several scripts that will install all the packages and libraries we need to automate the creation of our default react.js applications. These scripts may take a few minutes or more each to run because they will be downloading and installing lots of software packages. 

```ps
npm install -g create-react-app
```

This command will install all the necessary libraries to be able to automate the creation of a default react.js application. Once this has finished running in your console you will run the following script to create your react application and all the starting code and files:

```ps
npx create-react-app my-react-app
```

After create-react-app you can put anything you want as long as it is all lowercase letters. This will be the default name of the application and folder. After this runs we are going to navigate into our application folder by running the following command:

```ps
cd .\my-react-app\
```

Once at this point we are going to open up Visual Studio Code at the current directory. You can do this by typing the following command:

```ps
code .
```

Once Visual Studio Code is open press Ctrl + ` and this will open up powershell in Visual Studio Code. Your screen should look something like this:

![vs](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost11/vs.png)

Now to finish up, in our command line at the bottom of Visual Studio Code we are going to run the following command:

```ps
npm start
```

Once it builds and finishes compiling you should see a browser tab open up with a screen that looks like this:

![final product](https://tanner-portfolio-blog-images.s3.us-west-1.amazonaws.com/BlogPost11/finalproduct.png)

## Conclusions

---

You now have a working react application that you can start modifying and playing around with. React.js is a very popular front-end language and if you have any interest in web development it is a must have and is worth learning. I hope this tutorial was helpful and that you have all that you need to be able to start diving into the fun world of front-end web development.