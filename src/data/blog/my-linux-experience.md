---
title: "My Linux Experience"
description: "My journey from Arch Linux to Xubuntu and how I found a more development-friendly distribution"
published: 2024-01-19
category: "Linux"
readTime: "14 min read"
featured: false
tags: [linux, arch-linux, xubuntu, open-source]
type: "post"
---

![Linux with Arch Linux, Ubuntu, and Xubuntu symbols](/images/blog/linux-journey-cover.webp "My journey from Arch Linux to Xubuntu")

For the past two years, I have been using Linux as my primary operating system. My experience with Arch Linux has been an excellent learning opportunity, allowing me to explore the Linux operating system and gain a deeper understanding of system architecture and configuration.

Unlike many other distributions, Arch Linux does not come pre-installed with graphical interfaces or software, allowing users to build their systems from the ground up. This approach enabled me to dive deeper into the world of Linux customization and optimization, and the result was a fully functional system that was tailored to my needs.

Once installed, Arch Linux users choose their preferred graphical interface, software packages, and configurations. This flexibility is perfect for those who want to optimize their systems for specific tasks or hardware.

Initially, I chose KDE purely out of curiosity. However, after using it for a while, I wanted a more lightweight and customizable interface, leading me to switch to XFCE. And it was everything I wanted in a desktop environment, offering a fast and lightweight interface that was easily customizable to fit my preferences.

## First things first

**What is a Linux distribution?** A Linux distribution is a fully functional operating system based on the Linux kernel. It consists of a comprehensive set of system and application software, accompanied by a package management system that enables users to add, update, and remove software with ease.

> The Linux® kernel is the main component of a [Linux operating system (OS)](https://www.redhat.com/en/topics/linux/what-is-linux) and is the core interface between a computer’s hardware and its processes. It communicates between the 2, managing resources as efficiently as possible

Because Linux is open source, there is a distribution available for every type of user. As a Linux user, I have had the opportunity to use a variety of distributions, from the user-friendly Ubuntu Gnome to the minimalist Arch Linux with XFCE, and ultimately, Xubuntu. Based on my experiences, I would like to share my honest opinions about these distributions.

## Let's start with ARCH

If you're looking for a Linux distribution that constantly provides the latest packages and updates, Arch Linux is worth considering. Being a rolling release distribution, Arch Linux is constantly updated, so if you love to stay on the latest bleeding-edge packages - you might find yourself updating your system frequently, sometimes even weekly. However, if you're a newcomer to the Linux world, coming from macOS or Windows, Arch Linux may not be the best option for your first distribution.

If you have experience using the terminal and executing basic Linux commands, and you are interested in delving deeper into the system, then Arch Linux may be worth exploring.

Arch Linux is like a big box of Lego bricks. It doesn't come with preinstalled toys but you can use the bricks to build whatever you want at your own pace.

You can use the official Arch Linux [installation documentation](https://wiki.archlinux.org/title/installation_guide), Use the [Installation script](https://archinstall.readthedocs.io/installing/guided.html), or watch a simple guided [installation video](https://www.youtube.com/watch?v=_ZYuzjH-ZIA&t=361s)

I suggest trying your first-time installation in a virtual machine just to get used to the process before you take the next steps.

A few arch-based distributions offer easier installations and a preconfigured Desktop environment while still retaining the customization and flexibility of Arch Linux. These are distros built on Arch Linux (Using arch as an [upstream](https://www.redhat.com/en/blog/what-open-source-upstream) source for packages and repositories). Examples are Manjaro, EndeavourOS, Anarchy Linux, and ArcoLinux.

### Some of the after Installations

Once Arch Linux and the XFCE desktop environment were installed, I took a few steps to get a fully functional operating system. Among the essential tasks to perform after booting up a freshly installed XFCE environment are:

* Install and configure NetworkManager: While a wired network may work out of the box, wireless connectivity may require the installation and configuration of a package called [NetworkManager](https://wiki.archlinux.org/title/NetworkManager).
    
* Update the system: Run the following command to update the package databases and install any available updates.
    
    ```plaintext
    sudo pacman -Syu
    ```
    
    Updating Arch Linux is important for security, bug fixes, new features, compatibility, and support from the community.
    
* Add additional package managers: Arch Linux 'pacman' is a powerful package manager that comes by default with Arch-based distros but it lacks the ability to install packages from the AUR - [Arch User Repository](https://aur.archlinux.org/). One of the most popular packages called Yay (formally Yaourt-now deprecated) can be used as a wrapper around pacman allowing you to search the AUR and find packages not officially supported by Arch
    
    [Yay](https://github.com/Jguer/yay) (Yet Another Yaourt)- Also known as an AUR helper: is a CLI tool used to install and manage packages and dependencies.
    
* Update your pacman mirrors via [reflector](https://gist.github.com/KenEkanem/5d4b9846317708710ea8a605a545a8f8)
    

> In Arch Linux, a "reflector" is a utility that helps users to find the fastest and most up-to-date mirrors for their system. Mirrors are servers that store copies of the Arch Linux packages and updates.

* You may want to switch to LTS (Long Term Support) Kernel
    

**Why LTS?** LTS Offers more stability and compatibility with some hardware and software that may not work properly on the latest kernels.

By Switching to LTS you can reduce the frequency of kernel updates on your system and in some cases, you can perform a rollback when a kernel update causes an issue.

You can do this by running

```plaintext
sudo pacman -Syu linux-lts linux-lts-headers
```

If using VirtualBox, you need to swap its kernel modules to match the new LTS kernel before you can remove the standard Linux kernel

```plaintext
sudo pacman -S virtualbox-host-dkms
```

To remove the standard kernel run

```plaintext
sudo pacman -R linux linux-headers
```

Update the grub config

```plaintext
sudo grub-mkconfig -o /boot/grub/grub.cfg Reboot
```

### My Arch Linux installation

![My Arch Linux setup after running some customizations](/images/blog/arch-linux-customized.jpeg "My Arch Linux setup after running some customizations")

After installing the necessary packages which include web browsers, and text editors like neovim and obsidian. I installed additional packages such as alacritty, olivia, discord, slack, handbrake, neofetch, redshift, smplayer, pycharm, vscode and so much more.

By default, Arch Linux comes with **Bash (Bourne Again Shell)**, and as a budding Software developer learning my way around the shell and experimenting on the terminal, customizing Bash manually can be exciting and time-consuming at the same time.

I started my customization by just simply modifying the bash prompt, adding a few functionalities and custom aliases to the .bashrc, Then I stumbled on [Oh-My-BASH](https://ohmybash.nntoan.com/) - a lightweight framework for customizing Bash.

After getting comfortable with Bash, I decided to switch to the [Z shell (Zsh)](https://youtu.be/w77PJ_HU1zI?si=6_XPMhDOZK9B3DJa) to allow for more customization and a little more extra performance. Before I talk a bit more about shells.

ICYDN

> Oh My Zsh is not Zsh. Zsh is not a bash theme. Zsh is a SHELL.

**What is a SHELL?**

A shell is a program that provides an interface for users to interact with an operating system (OS) and execute commands. [8 types of Linux Shell](https://phoenixnap.com/kb/linux-shells)

During my research on ways to customize the Bash shell, I stumbled upon various approaches to customize the Z shell. However, the common misconception among people is that the Z shell comes bundled with the [Oh My Zsh framework](https://ohmyz.sh/).

*Note: The reason I don't use Oh My Zsh (Z shell customization framework) is that it comes with a lot of plugins (Really just aliases) already installed which makes it heavy and bloated.*

Customizing the Z shell is as easy as finding a Zsh plugin and sourcing it in the .zshrc file located in the '~' directory, other customizations can be done directly in the .zshrc file.

For my Z shell, I used (and still currently using) [Spaceship prompt](https://spaceship-prompt.sh/), zstyle competitions, [ZSH auto suggestions](https://github.com/zsh-users/zsh-autosuggestions), [ZSH syntax highlighting](https://github.com/zsh-users/zsh-syntax-highlighting), and [LSD](https://github.com/lsd-rs/lsd) to print a more colorful terminal. Additionally, I installed patched fonts from the NERD fonts [repository](https://www.nerdfonts.com/font-downloads) to add a touch of icons for personalizing my setup.

Lastly, All my configs can be found among my [dotfiles](https://github.com/KenEkanem/dotfiles).

![My terminal showing Zsh plugins, LSD, syntax highlighting, and autosuggestions](/images/blog/xubuntu-alacritty-terminal.png "My Alacritty terminal with Zsh plugins, LSD, syntax highlighting, and autosuggestions")

### Issues with Arch Linux

> A major issue with Arch Linux is the potential for a full system upgrade to cause system breakage.

In the following section, I will outline a few of the issues I faced.

If your system gets broken after a full system upgrade on Arch Linux, you will need to boot your system using a USB stick and fix the problem by replacing or reinstalling the packages and files that were corrupted or updated. This usually takes some time to figure out depending on the state of the problem.

Therefore, it's important to be cautious when performing system upgrades and to keep backups of important data. One of the commonly used tools for backups is ["rsync"](https://wiki.archlinux.org/title/rsync)

* Upgrade conflicts with AUR packages: If a user has an AUR package installed that conflicts with a system package during an upgrade, it can cause the upgrade to fail and potentially break the system.
    
* Dependency issues: When updating packages in Arch Linux, dependencies may also need to be updated. If a dependency update is missed or fails, it can cause the system to break.
    
* [Global Bugs](https://bugs.archlinux.org/?project=0&order=id&sort=desc&status%5B%5D=closed&string=global)
    
* [**Few issues I encountered with Arch and fixes**](https://gist.github.com/KenEkanem/d28949c4663046ab87c0083496df151c#step-3)
    

### Why I love ARCH

* Arch does not patch [upstream](https://www.redhat.com/en/blog/what-open-source-upstream) sources (Again read what upstream sources mean using the link) unless it is necessary for compatibility and stability reasons. What this means is that ARCH relies on its rolling release model where packages are updated frequently to include the latest software changes and bug fixes.
    
* Arch tries to minimize patching and customization to stay as close as possible to the upstream sources.
    
* Arch Linux has the best package management system designed with a notch for simplicity and speed. Having detailed documentation that helps users to explore the functionalities and use them efficiently.
    
* Arch Linux is designed to be minimalist.
    
* Extensive documentation is available both online and locally covering everything from installation to the most advanced customization for its users.
    
* Arch Linux has one of the largest Linux communities that offer support and advice to its users. With such a community, users can find solutions to any issues they may encounter while using the distro.
    

## Ubuntu

Ubuntu is a Linux distribution based on Debian. It is one of the most popular Linux operating systems and is widely used in both personal and professional settings. Ubuntu is known for its ease of use and user-friendly interface, making it accessible to both new and experienced users. It is also known to be one of the most widely used operating systems for server deployment, as well as its large and supportive community of developers and users. Ubuntu has two types of releases - LTS (Long Term Support) and Non-LTS. LTS receives support for Five years on desktops and servers while Non-LTS releases are supported for about Nine months.

One thing I noticed after installing Ubuntu LTS is that many packages come by default. What that means is that I got all the necessary system packages such as NetworkManager, Bluetooth daemon, and Media Transfer Protocol installed and enabled with additional drivers and software installed.

Ubuntu gnome as the name suggests comes preinstalled with the Gnome desktop environment and the gnome shell.

Checkout the [Ubuntu desktop Flavours](https://ubuntu.com/desktop/flavours)

### Why I Love Ubuntu

* Ubuntu comes with preinstalled packages and drivers to get you started.
    
* Aesthetic and user-friendly for those coming from Windows and macOS.
    
* Ubuntu is quite stable, with a rigorous testing process that helps to ensure that updates and new releases are thoroughly vetted before being made available to users.
    
* Ubuntu has a large and comprehensive software repository that includes thousands of packages for a wide range of applications and use cases.
    

### Issues with Ubuntu

* Ubuntu GNOME uses a lot of system resources, especially on older machines, making it slow and unresponsive.
    
* Ubuntu GNOME uses the Wayland display server by default, which can cause compatibility issues with some applications and hardware drivers.
    
* While Ubuntu GNOME offers some customization options, there are limitations to how much you can tweak the desktop environment, which can be frustrating for power users.
    

## Xubuntu

Xubuntu is a community-maintained flavor of Ubuntu that uses the XFCE desktop environment by default. It is designed to be lightweight and user-friendly, making it suitable for older hardware or users who prefer a simple and efficient interface. Xubuntu includes many pre-installed applications for everyday use, such as a web browser, email client, office suite, media player, and more.

### Xubuntu is a cool distro

* Xubuntu is fast and lightweight which means it can run a wide range of devices with modest hardware.
    
* It allows for a lot of customization, from themes to icons and fonts and even custom panels and applets.
    
* Uses the Ubuntu repository hosted on Ubuntu servers for its packages.
    
* it is quite stable being based on Ubuntu - one of the most stable and reliable distributions available.
    
* Additionally, you can also add PPAs (Personal Package Archives): PPAs are custom repositories created by individuals and communities.
    
    See - [Adding a custom PPA](https://gist.github.com/KenEkanem/27d3fa00e506f4ed5017cac453d5aa4d)
    

### Why I switched from Arch to (Xubuntu)

![Stock Xubuntu Desktop](/images/blog/stock-xubuntu-desktop.png "Stock Xubuntu Desktop")

As a software developer, experiencing system crashes or malfunctions in the middle of projects can be quite frustrating. I recall having to restart my system into a broken state when testing a branch of a project I was working on at the time, and it reminded me that we often overlook the importance of regular reboots. I had a lot of packages and dependencies I installed using very specific versions and  I forgot to add most of them to the IgnorePkg line in the pacman.conf. Essentially my system was running on so many patches resulting in a significant number of modifications and one restart caused a major system failure that was very difficult to trace.

To prevent this from happening in the future, it's essential I keep track of all the packages and dependencies I install in my system, including their specific versions. Additionally, I regularly review and update my pacman.conf file to include any new packages I've installed, this can ensure my system is running on a consistent and stable set of packages.

> By the time of writing this article I am gradually moving from XFCE to a lighter 'WM' called openbox (A tiling windows manager for linux based systems)
> 
> "Tiling manager is NOT designed for everyone. It will NOT fit everyone's workflow." LunaSPR

Update: [Tiling windows managers (WM): What am I missing?](https://youtu.be/b5kaEtv0BtE)

![Flex on my Xubuntu Desktop](/images/blog/customized-xubuntu-desktop.png "My customized Xubuntu desktop")

*Some concepts that required more detailed explanations were linked/moved to other pages*

## Conclusion

In summary, my experience with Arch Linux has been noteworthy because of its unique approach to customization and control. It's a great choice for users who want to tailor their systems to their needs and preferences.

Arch Linux's package manager, "pacman", is known for being powerful and fast. However, it can also be challenging to find the right packages for specific tasks, which can result in wasted time and effort when manually installing dependencies and libraries required for development. When you don't install the right dependencies on your system, it can cause issues with the stability and reliability of the system

Xubuntu on the other hand is the most stable I've been in the last couple of months. Not having to worry about system failures can be a huge relief which ultimately improves productivity and reduces downtime.

[I used ARCH BTW](https://www.reddit.com/r/linuxmemes/comments/12emd3e/stop_saying_i_use_arch_btw/)😈
