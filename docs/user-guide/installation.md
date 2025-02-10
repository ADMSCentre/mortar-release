---
title: Installing Mortar
---

> [!WARNING]
>
> 🚧 **Under Construction** 🚧 - This document is a work in progress. More information will be added soon.

# Installation Guide

> [!WARNING]
>
> The application is currently **under development and may contain bugs or incomplete features**, and is intended to be shared with a limited audience for testing purposes. Please use the application with caution and report any issues or feedback to the development team.

This document provides instructions on how to download and install Mortar on your computer. Mortar is a desktop application that is developed to view [Freedom of Information (FOI) documents](https://www.oaic.gov.au/freedom-of-information), as part of the [Designing Automated Tools to support Welfare Rights Advocacy](https://www.admscentre.org.au/designing-automated-tools-to-support-welfare-rights-advocacy/) project of the ARC Centre of Excellence for Automated Decision-Making and Society.

The installer for Mortar is available for Windows, macOS, and Linux, available to download from the latest release [**here**](https://github.com/ADMSCentre/mortar-release/releases/latest).

> [!NOTE]
>
> The `<version>` in the file names below refers to the version number of the Mortar release. For example, if you are downloading Mortar version 0.1.0, the file name would be `Mortar-0.1.0.exe` for Windows, `Mortar-0.1.0.dmg` for macOS, and `Mortar-0.1.0.AppImage` for Linux.
>
> If you want to download a specific version of Mortar instead of the [latest release](https://github.com/ADMSCentre/mortar-release/releases/latest), visit the [releases page](https://github.com/ADMSCentre/mortar-release/releases).

## Before You Begin

Before downloading Mortar, please check if your computer has an ARM64 processor. If you are unsure, follow the instructions below to determine your processor type.

- **What is ARM64?**
  - ARM64 is a 64-bit architecture used in some processors, particularly in mobile devices and newer computers.
- **How to Check if Your Computer is ARM64**:
  - **Windows**:
    1. Open **Settings**.
    2. Go to **System** > **About**.
    3. Under **Device specifications**, check the **System type**. If it reads "64-bit operating system, ARM-based processor," then you have an ARM64-based processor.
  - **macOS**:
    1. Click the **Apple menu** and select **About This Mac**.
    2. Check the **Processor** or **Chip** information. If it mentions "Apple M1" or "Apple M2," you have an ARM64-based processor.
  - **Linux**:
    1. Open a terminal.
    2. Run the command: `uname -m`. If it returns `aarch64`, you have an ARM64-based processor.

If you have an ARM64 processor, please download the appropriate version of Mortar for your system, e.g., `Mortar-0.1.0-arm64.dmg`.

## Installation Steps

### Windows
1. **Download the Installer**:
   - 📥 Download `Mortar-Setup-<version>.exe` from the release assets. 
2. **Run the Installer**:
   - 🖱️ Double-click the downloaded `.exe` file.
   - 🛠️ Follow the on-screen instructions to complete the installation.
3. **Launch the Application**:
   - 🚀 Once installed, you can find Mortar in your Start Menu or on your Desktop.

### macOS
1. **Download the DMG or ZIP**:
   - 📥 Download either `Mortar-<version>.dmg` or `Mortar-<version>-mac.zip` from the release assets. 
2. **Install the Application**:
   - For `.dmg`:
     - 🖱️ Double-click the `.dmg` file to open it.
     - 🗂️ Drag the Mortar app to your Applications folder.
   - For `.zip`:
     - 🖱️ Double-click the `.zip` file to extract it.
     - 🗂️ Move the Mortar app to your Applications folder.
3. **Launch the Application**:
   - 🚀 Open the Applications folder and double-click the Mortar app to start it.

> [!IMPORTANT]
>
> Since Mortar is not yet registered with Apple, you will need to temporarily override your security settings to open the application by following [this guide](https://support.apple.com/en-au/102445#openanyway).

### Linux
1. **Download the AppImage**:
   - 📥 Download `Mortar-<version>.AppImage` from the release assets. 
2. **Make the AppImage Executable**:
   - 🖥️ Open a terminal and navigate to the directory where the AppImage is downloaded.
   - 🛠️ Run the command: `chmod +x Mortar-<version>.AppImage`
3. **Run the AppImage**:
   - 🚀 Execute the AppImage by running: `./Mortar-<version>.AppImage`

