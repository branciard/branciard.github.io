---
date: "2019-11-06"
title: "How to create and manage a new DAppNode Package"
category: "Coding"
tags: ['Ethereum','Dappnode','Decentralisation','Polkadot','Packaging']
banner: "__PATH_PREFIX__/assets/blog/2019-11-06/banner.png"
---

### An example with Polkadot Node Package


<p style="text-align:center">
  <br />
  Visual Credit : Sydney Lai
  <br />
 <img src="__PATH_PREFIX__/assets/blog/2019-11-06/visual-sydney-lai.png" width = 600 >
</p>

## Introduction

### What is DAppNode

[DAppNode](http://dappnode.io) mission is to facilitate the setup of **decentralized infrastructures**.

It allows you to :

- Join your favorites p2p networks and p2p economies
- Increase the global censorship resistant of the network by running a peer
- Serve yourself without going to third-party providers
- Serve your friends and your nomadism with VPN access.

`youtube:https://www.youtube.com/embed/dPoovW5tjzc`
  DAppNode: Your node, plug & play

DAppNode is composed of hardware and a software part.

If you have available hardware at home, you can install directly this [Debian ISO](https://github.com/dappnode/DAppNode/wiki/DAppNode-Installation-Guide#install-dappnode). Otherwise, you can grab your hardware preconfigured and ready to run at <http://shop.dappnode.io.>

The software part is composed of system packages that allow you to install, run and manager blockchain nodes or others software.

---

### What is Polkadot

The possibility to interconnect multiple blockchains together is crucial for blockchain ecosystem.

Polkadot : a chain of chains.

More precisely, it is composed of a [Relay Chain](https://wiki.polkadot.network/docs/en/learn-architecture#relay-chain) offering slots to [Parachains](https://wiki.polkadot.network/docs/en/learn-parachains) or [Parathreads](https://wiki.polkadot.network/docs/en/learn-parathreads). They inherit security from the Relay Chain with a [shared validators pool](https://wiki.polkadot.network/docs/en/learn-security).

As DAppNode is here to facilitate running blockchain nodes, let’s try with Polkadot node and see, step-by-step, how to create a DAppNode package for Polkadot Node.

---

### What is DAppNode Package

To run your software on DAppNode, the prerequisite is to create a docker image of it. Then, the DAppNode Package is a bunch a metadata wrapping this docker image.

Those metadata allow you to :

- access and manage your package from a Dashboard
- Reference it in a decentralized way with IPFS
- Manage versioning thanks to ArgonPM, ENS, Ethereum ([soon off-chain using swarm](https://youtu.be/oUyiTaS4iwA?t=1026))

You can use the [dappnode SDK cli](https://github.com/dappnode/DAppNodeSDK) to create metadata, build and publish easily.

---

### Create a new DAppNode Package

First, you need to download the dappnode SDK cli that will help you to create the package template.

>
npm install -g @dappnode/dappnodesdk

Then, create a new directory for your package and launch
>
dappnodesdk init

After answering basics questions, you have 3 files that you need to modify :

- [dappnode_package.json](https://github.com/branciard/DAppNodePackage-polkadot/blob/master/dappnode_package.json) : contains all metadata used by DAppNode System to manager your new package.

- [docker-compose.yml](https://github.com/branciard/DAppNodePackage-polkadot/blob/master/docker-compose.yml) : basic docker-compose file that will be used to launch your docker image.

- [build/Dockerfile](https://github.com/branciard/DAppNodePackage-polkadot/blob/master/build/Dockerfile) : you must your configure docker image for the software or node you want to create.

For Polkadot, we inherit from [the official docker image](https://hub.docker.com/r/parity/polkadot) and add a parameter EXTRA_OPTS in the command. This parameter will be then valorize and can be changed in the web interface of the DAppNode.

To have a nice logo in the interface you need to set [a logo in the directory](https://github.com/branciard/DAppNodePackage-polkadot/blob/master/avatar.png). This logo will be added to IPFS when you will launch the sdk build command. After that, the IPFS link will be set in [avatar parameter in dappnode_package.json](https://github.com/branciard/DAppNodePackage-polkadot/blob/master/dappnode_package.json#L5) file.

You can now try to build.

Be Careful, you must be connected to some IPFS provider to be able to generate the IPFS link for the package et the logo. If you are connected to a DAppNode Wifi your have nothing to do, the config is good by default. Otherwise, you can overwrite the [IPFS provider to target](https://github.com/dappnode/DAppNodeSDK/blob/master/src/utils/verifyIpfsConnection.js#L7).
>
dappnodesdk build

`youtube:https://www.youtube.com/embed/45FmYTzIkrU`
DAppNode SDK build command

The build command upload the logo to IPFS and create docker image thanks to your Dockerfile.

When all is ok, it loads the package metadata to IPFS and give you a direct link to install it on your DAppNode.

Configure the EXTRA_OPTS parameter and after clicking on Install, you node will start automatically.

<p align="center">
 <img src="__PATH_PREFIX__/assets/blog/2019-11-06/installPkgWithIPFSLink.png" width = 600 >
 <br />
Install Package with IPFS link
</p>

In the installer Menu, everybody that have the IPFS link will now be able to install the package you have just created !

But how to install with just the DAppNode Package Name ?

You need to do the sdk publish step

>
dappnodesdk publish

It uses Ethereum for the versioning and ENS to resolve the name : polkadot.public.dappnode.eth

You need also to prepare a developer Ethereum wallet that will be responsible to publish the package and publish new versions of the package.

`youtube:https://www.youtube.com/embed/EFyLJS41iMU`
DAppNode SDK publish command

When publish command is successful, it gives you a direct link to a form filled out. Connect you wallet and propagate the transaction. The new repo is then created with version 1.0.0. Now, you can direct install your package with his name.

### Release a new version of your DAppNode Package

Edit the Dockerfile of your project to target your new version and increase version in metadata files with :

>
dappnodesdk increase minor

`youtube:https://www.youtube.com/embed/uyN94Txxq-8`
DAppNode SDK publish command

Then launch :
>
dappnodesdk build
>
dappnodesk publish

Go to the form link and propagate the transaction to update the package version.

Now, when you go to the installer menu and click to update you will see that your Node will switch to the new version you just published !

---

### Activate auto-update for a DAppNode Package

Recently DAppNode team add auto-update feature for packages. You can choose to auto-update for system package and or your installed packages too.

When a new release is triggered and after a delay, you will be automatically updated according to your choice.

`youtube:https://www.youtube.com/embed/T25EnYitPW8`
Auto-update feature of DAppNode Package

Activate the auto-update for Polkadot package

Wait to the schedule for auto-update.

At auto-update time, the node is automatically upgraded !

---

### Conclusion

Here the DAppNodePackage result for Polkadot <https://github.com/branciard/DAppNodePackage-polkadot>

Now, you have learn how to deploy a new Package on DAppNode ! It is your turn to choose your favorite p2p softwares or nodes and increase the number of DAppNode packages available and promote decentralized and resilient networks !

---

[@fbranciard](https://twitter/fbranciard), LUGUS LABS <https://luguslabs.com/>

Thank you Sydney Lai for the visual creation.
