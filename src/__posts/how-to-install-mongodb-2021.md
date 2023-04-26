---
title: "How to Install MongoDB with Shortcut Commands 2021"
date: "2021-05-29"
categories: 
  - "mongodb"
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/07/Copy-of-for-thumbnail.jpg?updatedAt=1682356366087"
author: "Pavan Sargar"
---

![How to Install MongoDB 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/Copy-of-for-thumbnail.jpg?updatedAt=1682356366087)

Installation of MongoDB can be a little trickier, and there are loads of errors you can come across if you haven't installed it properly. Also, this post will help you if you have been starting your **MongoDB server** using the complete **path**.

So, today I will show you how you can install MongoDB in your local system and how you can start your **MongoDB** server using just the **mongod** command.

At the end of the post, you will be able to start your MongoDB server and shell using just these commands,

```bash
mongod
#this command will run the MongoDB server at 27017
```

```bash
mongo
#this command will start MongoDB shell where you can execute MongoDB methods.
```

So, let's get started.

## Download & Install [MongoDB](https://www.mongodb.com/try/download/community "MongoDB Download") \-

**[Click here](https://www.mongodb.com/try/download/community)** and download **MongoDB community server** for your platform. Make sure to choose the **latest version** and **.msi** package if you are on **windows**.

![how to install mongodb 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/download-mongodb-1-1024x376.jpg?updatedAt=1682356365729)

Now install the downloaded file, just **accept all the agreements,** choose the **Setup type: _Complete,_** and **select:** _**run service as a network service user**_. Hit next, and you can deselect the **Installation of MongoDB Compass** as it's not required. Now, **hit** on to the **install** and **MongoDB** will be **installed**.

## Create the Data & DB Folder -

It's not really required for the new version of MongoDB, but it's still a better choice to do so. This folder will keep all the data of MongoDB.

Visit **C: Drive** and create a new folder named **data**, make sure that it's **not capital**, and inside the **data folder**, create one more folder named **db**.

The **path** should look something like this.

![how to install mongodb 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/data-db-path.png?updatedAt=1682356365663)

## Let's Setup the Mongo & Mongod Commands -

We have successfully installed the MongoDB, but there are still somethings that need to be setup. To run MongoDB server using our terminal or shell with just a single command, we need to create a shortcut. So, let's do that.

visit: C Drive -> Program Files -> MongoDB -> Server -> 4.4 -> bin

![how to install mongodb 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/mongodb-path.png?updatedAt=1682356365655)

The _**4.4**_ is the version of your MongoDB, it can defer if you are seeing this tutorial in the future. Keep a copy of the path, as we will be needing it.

Inside the **_bin_** folder, there are the **Mongod.exe** and **Mongo.exe** files, which we need to **run** each time we run the **commands**, so we have to set up shortcuts for both files.

![how to install mongodb 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/path-files.png?updatedAt=1682356366107)

**_NOTE_**: Now while following along with further steps, if you face any issue or error, make sure that you have **[Git](https://git-scm.com/downloads)** installed in your system. Also, I am using a third-party terminal which is **Hyper**. The hyper terminal has more features and it's more extensible than the default Shell or Commands Prompt.

Follow this complete tutorial by **[Hilgraeve](https://www.hilgraeve.com/hyperterminal-install/)** for installation of hyper terminal.

Follow these steps to setup MongoDB shortcuts -

- Open terminal, and type: **cd ~** and hit **Enter**
- Create a bash file, type: **touch .bash\_profile,** and hit **Enter**

To check whether you have created the bash file, type: **ls -a** and hit enter. If the **_.bash\_profile_** is in the list then you've successfully created the file.

Now, we are going to edit that file using **vim** editor, if you don't know what vim editor is, then **strictly follow** the only commands mentioned. Vim editor is **quite an** abstract editor if you are a beginner.

- Inside the terminal, type: **vim .bash\_profile** and hit **Enter**

Now, this will open the bash file inside the vim editor, don't get afraid just follow the below steps.

- To type anything inside the **vim** editor press the **i** key on your keyboard. This will initiate **Insert Mode**.

![how to install MongoDB 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/insert-mode-by-typing-I.png?updatedAt=1682356366019)

below vim editor you'll se the "INSERT" after pressing "i"

- Now, copy-paste the below code as it is with just one change. change the **version** of **MongoDB**, based on your **version**. for eg:- MongoDB's current version is **4.4**, while you are reading this post it can be **4.5** or **4.6**.
- It's better to refer to the file path that we copied previously.

```shell-session
alias mongod="/c/Program\ Files/MongoDB/Server/4.4/bin/mongod.exe"
alias mongo="/c/Program\ Files/MongoDB/Server/4.4/bin/mongo.exe"
```

- Now, paste the above commands inside the vim.
- Press the **Esc** key to save the file and now type:wq! and hit enter to exit the vim editor.

![how to install mongodb 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/use-small-w-press-esc-and-hit-enter-to-exit-vim.png?updatedAt=1682356366039)

Now you have successfully installed the **MongoDB** and created **Mongo** and **Mongod** shortcuts.

Let's verify the installation, restart the terminal and type **mongo --version** and hit **Enter**.

![how to install mongodb 2021](https://ik.imagekit.io/waystoweb/waystoweb/07/succesfull-installation.png?updatedAt=1682356366025)

If you see something like this, then congrats, you have successfully installed & created the MongoDB shortcuts.

I hope this was helpful, if you are stuck somewhere, or facing any issues, feel free to comment or DM on [**Instagram**](https://www.instagram.com/waystoweb). Share this post with your friends if you have learned something new!