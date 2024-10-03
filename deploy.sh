#!/bin/bash

# Fail the script if any command fails
set -e

# Step 2: Set up Python
echo "Setting up Python..."
PYTHON_VERSION=3.11.9
apt-get update
apt-get install -y python$PYTHON_VERSION python3-pip

# Step 3: Install Python dependencies
echo "Installing Python dependencies..."
python3 -m pip install --upgrade pip
pip3 install -r requirements.txt

# Step 4: Set up Node.js
echo "Setting up Node.js..."
NODE_VERSION=16.x
curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | bash -
apt-get install -y nodejs

# Step 5: Install PM2
echo "Installing PM2..."
npm install -g pm2

# Step 6: Start the app with PM2 (for a Python app)
echo "Starting Python app with PM2..."
pm2 start app.py --interpreter python3 --name portfoliov1
