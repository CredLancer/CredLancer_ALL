#!/bin/bash

apt update && apt upgrade
apt install python3-pip -y
python3 -m pip install --upgrade pip setuptools wheel
apt install software-properties-common -y
apt-add-repository ppa:ansible/ansible -y
apt update
apt install ansible -y
