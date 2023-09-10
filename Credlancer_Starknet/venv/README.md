 <div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Vagrant.png" width=200 alt="vagrant-logo" />
 <h3 align="center">CredLancer development environment</h3>

  <p align="center">
    An awesome Vagrant to jumpstart your development into CredLancer.
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template/issues"><strong>Report Bug</strong></a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues"><strong>Request Feature</strong></a>
  </p>
</div>

---

## Table of contents 
- [About](#about)
- [Installation](#installation)
- [Development](#development)
  - [Vagrant Commands](#vagrant-commands)
  - [Setting up Cairo](#setting-up-cairo-environment)
- [More](#more)

## About <a name="about"></a>

Vagrant enables the creation and configuration of lightweight, reproducible, and portable development environments.

## Installation <a name="installation"></a>

To use the environment, you need to have [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/) installed.
<br />
So if you don't, you should run:

```shell
curl -L https://raw.githubusercontent.com/captainahab0x/CredLancer_Starknet/env/install.sh | bash
```

To install and use the environment, run:

```shell
git clone --branch env --single-branch git@github.com:captainahab0x/CredLancer_Starknet.git env && cd env/
```

---


## Development <a name="development"></a>

### Vagrant Commands <a name="vagrant-commands"></a>

Let's look at some of the basic commands to control the Vagrant environment.
<br />
To be able to control Vagrant environment, you must be at the location of the `Vagrantfile` :
* **`vagrant up`** - Turns on the environment (or creates it if it doesn't exist yet).
* **`vagrant ssh`** - This connects you to the environment over ssh.
* **`vagrant halt`** - Shutdown the environment.
* **`vagrant status`** - See what the environment is up to.
* **`vagrant destroy`** - Completely delete the environment and all data on it.
* **`vagrant reload`** - Reloads the environment. Useful if you change the Vagrantfile. Essentially a **`vagrant halt`** followed by **`vagrant up`**.

### Setting up Cairo environment <a name="setting-up-cairo-environment"></a>

When you are in your environment, you just need to activate the python virtual environment :
```shell
source ~/.venvs/venv-cairo/bin/activate
```
In this virtual python environment, you can compile and run your [Cairo](https://www.cairo-lang.org/) programs. You can also use all the [Protostar](https://docs.swmansion.com/protostar/) tools.

## More <a name="more"></a>

You can optimize your work when using a Vagrant environment in several ways.
* [Connect Visual Studio Code with Vagrant in your local machine](https://medium.com/@lopezgand/connect-visual-studio-code-with-vagrant-in-your-local-machine-24903fb4a9de)
