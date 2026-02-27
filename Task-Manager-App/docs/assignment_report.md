# DevOps Practice Assignment Report

## Three-Tier Task Manager Application

------------------------------------------------------------------------

## 1. Introduction

This assignment was completed to practice core DevOps concepts
including:

-   Git repository management
-   Branching strategy
-   Merge requests workflow
-   Deployment using WSL (Linux environment)
-   Shell scripting for service monitoring
-   Structured documentation practices

A simple three-tier Task Manager application was developed to implement
and demonstrate these DevOps practices.

------------------------------------------------------------------------

## 2. Application Overview

The Task Manager application follows a three-tier architecture:

### Frontend

-   HTML
-   CSS
-   JavaScript

### Backend

-   Python (Flask)

### Database

-   SQLite

The frontend communicates with the backend using REST API calls.\
The backend interacts with the SQLite database to store and retrieve
tasks.

------------------------------------------------------------------------

## 3. Project Structure

    Task-Manager-App/
    │
    ├── frontend/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    │
    ├── backend/
    │   ├── app.py
    │   └── requirements.txt
    │
    ├── database/
    │   └── tasks.db
    │
    ├── scripts/
    │   └── service_monitor.sh
    │
    └── docs/
        └── assignment_report.md

------------------------------------------------------------------------

## 4. Application Generation

Steps Followed:

1.  Created three-tier folder structure.
2.  Developed frontend UI.
3.  Built Flask REST API backend.
4.  Connected backend to SQLite database.
5.  Tested complete CRUD flow.

Result: Successfully implemented a working application.

------------------------------------------------------------------------

## 5. Git Initialization

Commands Used:

    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin <repository_url>
    git push -u origin master

Issue Faced: - Remote repository already had README file.

Resolution:

    git pull origin master --allow-unrelated-histories --no-rebase

------------------------------------------------------------------------

## 6. Deployment in WSL

Steps:

1.  Cloned repository inside WSL.

2.  Installed dependencies:

        pip install -r requirements.txt

3.  Started backend:

        python app.py

4.  Accessed application at: http://localhost:5000

------------------------------------------------------------------------

## 7. Service Monitoring Script

Created:

    scripts/service_monitor.sh

Functionality: - Checks backend service (port 5000) - Verifies database
file existence - Displays status report

Made executable:

    chmod +x scripts/service_monitor.sh

------------------------------------------------------------------------

## 8. Feature Branch Workflow

Commands Used:

    git checkout -b feature/update-header
    git add .
    git commit -m "Updated header text"
    git push -u origin feature/update-header

Created Merge Request in GitLab and merged into master branch.

------------------------------------------------------------------------

## 9. Issues Faced

  Issue                  Resolution
  ---------------------- ---------------------------------------
  Push rejected          Pulled with allow-unrelated-histories
  404 Error              Added root route in Flask
  Authentication issue   Used SSH instead of password

------------------------------------------------------------------------

## 10. Key Learnings

-   Practical Git branching workflow
-   WSL-based deployment
-   Shell scripting basics
-   Merge request process
-   Importance of documentation

------------------------------------------------------------------------

## Conclusion

This assignment provided hands-on experience with DevOps fundamentals
including version control, branching, deployment, monitoring, and
documentation practices.

------------------------------------------------------------------------

## Author

Archana GS\
DevOps Practice Assignment
