#!/bin/bash

# Set the repository URL and branch
REPO_URL="https://github.com/Snigdha-OS/docs.snigdhaos.org.git"
BRANCH="master"  # or "master" depending on your repository's default branch

# Commit message
MESSAGE="@eshanized: pushed the code via #push.sh"

# Add all files, commit, and push changes
git add .
git commit -m "$MESSAGE"
git push origin $BRANCH