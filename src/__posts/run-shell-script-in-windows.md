---
title: "How to Run Shell Script Files in Windows 10/11"
date: "2022-03-25"
categories:
  - "tech"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/22/how-to-run-shell-scripting-in-windows.png?updatedAt=1682356860106"
author: "Pavan Sargar"
excerpt: "Easiest way to run and execute shell scripting code or LINUX/UNIX commands on Windows 10/11 without installing Linux or Virtual Machines"
---

It’s a pain if you want to execute or run some UNIX/LINUX commands or do some Shell Scripting on Windows, we tend to install the Virtual Machine and do tons of configurations to install the Linux system in windows.

That’s not bad but has its issues like slow performance, which can be more time-consuming as it takes its time to load, also the chance of a data loss, etc.

So, today I’ll show you the easiest way to run Shell Script & UNIX commands on a Windows system without installing or configuring these huge files. So, let’s get started.

To run UNIX/LINUX commands, we’ll require a UNIX-based shell or command line. BASH or Bourne-Again Shell command line is also one of UNIX shell, this will help us to execute LINUX commands and shell script files in Windows pretty easily.

## Download GIT BASH -

You can download and install GIT BASH from the **[official Git Bash website](https://git-scm.com/downloads)**, for your desired operating system, in our case it will be Windows.

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b1-1024x528.png?updatedAt=1682356860252)

## Install GIT BASH -

After you’ve downloaded the GIT BASH file, double click and open the installation wizard.

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b2.png?updatedAt=1682356860145)

Accept the Terms and hit next.

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b3.png?updatedAt=1682356860099)

Now, make sure you’ve Git Bash checked, and also the default options you see in the above image. Keep hitting next and keep all remaining options as default till the point it says to install and hit the install.

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b4.png?updatedAt=1682356860226)

After the installation, close the installation wizard and open the Git Bash.

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b5.png?updatedAt=1682356860222)

Click on the Windows icon and search for “Git Bash”, you’ll see some extra Git applications, don’t get yourself confused with Git CMD, make sure to open the Git Bash.

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b6.png?updatedAt=1682356860403)

After you’ve opened it you’ll get a brand new Bash terminal. Just like the below image,

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b7.png?updatedAt=1682356860109)

## Executing Shell Script -

Let’s create a script file using the bash terminal, use the below commands to do so.

```bash
#make sure to hit enter after every line
mkdir shell-script
cd shell-script
touch script.sh

#open file with the nano editor
nano script.sh
```

After you’ve entered in the nano editor, type out the code below,

```bash
#!/bin/bash
STRING="HELLO WORLD!"
echo $STRING
```

Now, hit `ctrl+o`, to save the file and `ctrl+x` to exit. To run the file we’ll first require it to make it executable.

```bash
#make it executable
chmod +x script.sh

#run the script file
./script.sh
```

And, there you have it.

![Shell Scripting in Windows](https://ik.imagekit.io/waystoweb/waystoweb/22/b8.png?updatedAt=1682356860070)

That’s it. Now you can easily execute UNIX/LINUX commands and Shell Scripts on your Windows System.

I hope this post was helpful if it was make sure to share it with your friends who don’t have a Linux or a powerful Windows system.
