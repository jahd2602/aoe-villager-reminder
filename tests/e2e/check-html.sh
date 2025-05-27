#!/bin/bash

# Path to the index.html file relative to the script location or project root
# Assuming the script is run from the project root where index.html exists
INDEX_FILE="./index.html"

# Check if index.html exists
if [ ! -f "$INDEX_FILE" ]; then
    echo "ERROR: $INDEX_FILE not found!"
    exit 1
fi

# Check for the presence of <div id="root">
if grep -q '<div id="root">' "$INDEX_FILE"; then
    echo "SUCCESS: Found <div id="root"> in $INDEX_FILE"
else
    echo "FAILURE: Did not find <div id="root"> in $INDEX_FILE"
    exit 1
fi

# Check for the inclusion of the React script
if grep -q "react.development.js" "$INDEX_FILE"; then
    echo "SUCCESS: Found React script (react.development.js) in $INDEX_FILE"
else
    echo "FAILURE: Did not find React script (react.development.js) in $INDEX_FILE"
    exit 1
fi

# Check for the inclusion of the Material UI script
if grep -q "material-ui.development.js" "$INDEX_FILE"; then
    echo "SUCCESS: Found Material UI script (material-ui.development.js) in $INDEX_FILE"
else
    echo "FAILURE: Did not find Material UI script (material-ui.development.js) in $INDEX_FILE"
    exit 1
fi

echo "All non-Puppeteer HTML checks passed."
exit 0
