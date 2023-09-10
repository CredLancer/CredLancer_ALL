#!/bin/bash

set -eu -o pipefail
sudo -n true
test $? -eq 0 || exit 1 "You should have sudo privilege to run this script."

install_brew_update(){

	echo -e "\n\033[33mInstalling the latest update... \033[m\n"
	sleep 1
	while read -r p ; do sudo brew -y $p ; done < <(cat << "EOF"
	doctor
	update
EOF
)
}

install_brew_requisites(){

	echo -e "\n\033[33mInstalling Vagrant pre-requisites... \033[m\n"
	sleep 1
	while read -r p ; do sudo brew cask -y $p ; done < <(cat << "EOF"
	virtualbox
	vagrant
EOF
)
}

install_apt_update(){

	echo -e "\n\033[33mInstalling the latest update... \033[m\n"
	sleep 1
	while read -r p ; do sudo apt -y $p ; done < <(cat << "EOF"
	update
	upgrade
EOF
)
}

install_apt_requisites(){

	echo -e "\n\033[33mInstalling Vagrant update... \033[m\n"
	sleep 1
	while read -r p ; do sudo apt install -y $p ; done < <(cat << "EOF"
	virtualbox
	vagrant
EOF
)
}

if [ -n "`which apt-get`" ];
	then
		intall_apt_update
		install_apt_requisites
elif [ -n "`which brew`" ];
	then
		intall_brew_update
		install_brew_requisites
fi

echo -e "\n\033[33mDone !\033[m\n"
