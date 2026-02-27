#!/bin/bash

echo "Service Status Report"
echo "---------------------"

# Check Flask backend (port 5000)
if ss -tuln | grep -q ":5000"; then
    echo "Backend (Flask): Running"
else
    echo "Backend (Flask): Not Running"
fi

# Check database file
if [ -f "../database/tasks.db" ]; then
    echo "Database: Available"
else
    echo "Database: Not Found"
fi
