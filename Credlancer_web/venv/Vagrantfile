# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-22.04"
  config.vm.hostname = "credlancer"
  config.vm.provision "shell", path: "./scripts/setup.sh", privileged: true
  config.vm.provision "shell", path: "./scripts/run_ansible.sh", privileged: false
  config.ssh.forward_agent = true
  config.ssh.forward_x11 = true
end
