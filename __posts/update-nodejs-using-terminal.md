---
title: "How to Update Node Js Using Terminal? 2021"
date: "2021-06-11"
categories: 
  - "nodejs"
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/09/Copy-of-for-thumbnail-1.jpg?updatedAt=1682356436777"
author: "Pavan Sargar"
---

![how to update nodejs using termnial](https://ik.imagekit.io/waystoweb/waystoweb/09/Copy-of-for-thumbnail-1.jpg?updatedAt=1682356436777)

Updating NodeJs manually can be a bit hectic, so today I am going to show you how you can update NodeJs to any version locally with just a few commands.

NOTE: If you don't have any idea about NodeJs and wondering what NodeJs is, you can read our article on [**NodeJS**](https://waystoweb.com/web-server-using-nodejs/ "How to Create a Web Server Using Nodejs 2021?").

## #Step 1 - Install NVM

To be able to run the command to update NodeJs, we need to install a **Node Version Manager** also called **NVM**. You can download the latest version of the NVM from [**here**](https://github.com/coreybutler/nvm-windows/releases).

After successful installation of the NVM, you can verify the installation executing the following command `**nvm version**.` If it looks something like the below image, then you've successfully installed the NVM.

![how to udpate nodejs using terminal](https://ik.imagekit.io/waystoweb/waystoweb/09/nvm-installed-successfully.png?updatedAt=1682356436713)

how to udpate nodejs using terminal

## #Step 2 - Update NodeJs

Before updating Node, visit **[NodeJs](https://nodejs.org/en/)** official website and check the **LTS** (Long Term Support) Version. Now, inside your terminal type the below command, instead of the version number, you can put your **desired version** and hit **Enter**.

```bash
nvm install 14.17.0
```

![how to udpate nodejs using terminal](https://ik.imagekit.io/waystoweb/waystoweb/09/downloading-latest-verison.png?updatedAt=1682356436747)

If your terminal looks something like the above, then the update has begun. But, it's not over yet, after the update is finished. You need to explicitly define the version that you need to use.

![how to udpate nodejs using terminal](https://ik.imagekit.io/waystoweb/waystoweb/09/usen-node-installed-verison.png?updatedAt=1682356437022)

```bash
nvm use 14.17.0
```

You can also check all of the NodeJs versions installed on your system by executing the following command.

![how to udpate nodejs using terminal](https://ik.imagekit.io/waystoweb/waystoweb/09/check-current-version.png?updatedAt=1682356437004)

## More NVM Commands

- `nvm use [version]` which we just saw earlier, it helps us to use any node version installed on our system.
- `nvm on` or `nvm off` to enable or disable the version manager.
- `nvm uninstall [version]` to uninstall any specific version of node, defining a specific version is mandatory.
- `nvm version` displays the version of the NVM installed in your system.
- `nvm use [arch]` it can be used to change the architecture of the installed node version to 32/64 bit.

I hope this post was helpful, and if it was make sure to share it with your friends! You can also support us by subscribing to our free newsletter.

Also, if you want to contribute any article on our platform feel free to contact us!