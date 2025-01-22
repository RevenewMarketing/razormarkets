# RAZOR MARKETS
 
### LIVE LINK: [razormarkets.co.za](https://razormarkets.co.za)
### STAGING LINK: [razormarketsstaging.netlify.app](https://razormarketsstaging.netlify.app)

This document provides instructions for setting up, running, and making changes to this project.

## Prerequisites

1. **Code Editor**: Install a code editor like [VS Code](https://code.visualstudio.com/) or any other editor of your choice.
2. **Web Browser**: Ensure you have a web browser like [Google Chrome](https://www.google.com/chrome/) or [Mozilla Firefox](https://www.mozilla.org/firefox/).

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the HTTPS or SSH link to your GitHub repository.

2. **Navigate to the Project Directory**:
   ```bash
   cd <project-directory>
   ```
  OPTIONAL: You can also download the project as a ZIP file and extract it to a folder on your local machine.

## Running the Project Locally

### Option 1: Open Directly in Browser

1. **Locate `index.html`**:
   - Navigate to the folder containing the project files.

2. **Open `index.html`**:
   - Double-click on the `index.html` file to open it in your default browser.
   - If the webpage opens and displays incorrectly, proceed to Option 2.

### Option 2: Use a Simple HTTP Server

Using a local server ensures that all relative paths and additional features work correctly.

1. **Install NodJS or Python (Optional)**:
   - If not already installed, download and install [Python](https://www.python.org/downloads/).
    - Alternatively, install [Node.js](https://nodejs.org/en/download/).

2. **Start a Simple HTTP Server**:
    - Open a terminal or command prompt in the project directory and run one of the following commands:
   - For Python 3:
     ```bash
     python -m http.server 8000
     ```
   - For Python 2:
     ```bash
     python -m SimpleHTTPServer 8000
     ```
    - For Node.js:
      ```bash
      npx http-server -p 8000
      ```

3. **Access the Application**:
   - Open your browser and navigate to:
     ```
     http://localhost:8000
     ```

### Option 3: Use Live Server in VS Code

1. **Install the Live Server Extension**:
   - In VS Code, go to the Extensions Marketplace and install the **Live Server** extension.

2. **Run the Server**:
   - Right-click on `index.html` in the Explorer panel and select **Open with Live Server**.

3. **Access the Application**:
   - Your browser will open automatically, showing the application.

## Making Changes

1. **Edit Files**:
   - Modify any file as needed.

2. **Refresh the Browser**:
   - If not using Live Server, manually refresh the browser to see changes.

## Pushing Changes to GitHub

 **NOTE:** This project has two branches, **main** and **staging**. Main is the production branch and staging is the testing branch.
  All changes should be pushed to the staging branch first for testing before being merged to the main branch.

1. **Check the Status of Your Changes**:
   ```bash
   git status
   ```

2. **Stage Changes**:
   ```bash
   git add .
   ```

3. **Commit Changes**:
   ```bash
   git commit -m "Your commit message here"
   ```
   Replace `Your commit message here` with a descriptive message about your changes.

4. **Push Changes to the Repository**:
   ```bash
   git push origin <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you're working on (e.g., `main` or `feature-branch`).

## Notes

- Ensure your HTML, CSS, and JavaScript files are properly linked.
- For significant changes, consider creating a new branch:
  ```bash
  git checkout -b <new-branch-name>
  ```

Happy coding!
