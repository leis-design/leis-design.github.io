# Lassonde Visual Planner Builder

The **Lassonde Visual Planner Builder** is a client-side React application designed for instructors at the university to create and manage course schedules visually. The tool helps instructors plan course schedules and assessments in a way that is easy to understand and share with students. This tool allows instructors to build, save, and transfer visual plans to eClass.

## Features

- **Visual Schedule Creation:** Instructors can create a visual course schedule.
- **Import/Export Functionality:** Easily import existing schedules and export new ones.
- **Schedule Management:** Add, edit, and manage events for each day.
- **HTML Copy Functionality:** Copy HTML code for eClass integration.
- **Instructional Guide:** Provides step-by-step instructions for using the planner.
- **Responsive Design:** Optimized for desktop and laptop computers using Chrome, Firefox, or Edge browsers.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing.

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/lassonde-visual-planner.git
   cd lassonde-visual-planner
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- **Build a Visual Plan:** Select the dates and start adding events to build a visual course plan.
- **Save Your Plan:** Save your current progress as a `.json` file for future edits.
- **Copy HTML to eClass:** Copy the generated HTML code and paste it directly into your eClass course page to share the planner with your students.

## Deployment

The Lassonde Visual Planner Builder app is currently deployed using the `gh-pages` method. This method uses the `gh-pages` npm package to deploy the app to GitHub Pages, a free hosting service provided by GitHub.

### How to Deploy

To deploy the app or apply new changes, follow these steps:

1. **Install `gh-pages` (if not already installed):**

   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add Deployment Scripts:**

   Ensure that the `package.json` file includes the following scripts:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     "start": "react-scripts start",
     "build": "react-scripts build"
   }
   ```

3. **Deploy to GitHub Pages:**

   Run the following command to deploy the app:

   ```bash
   npm run deploy
   ```

   This command will build the application and push the build files to the `gh-pages` branch of your GitHub repository. GitHub Pages will then serve the content from this branch.

### Deploying New Changes

To deploy new changes after modifying the app:

1. Make changes to the source code in the repository.

2. Commit your changes:

   ```bash
   git add .
   git commit -m "Your commit message here"
   ```

3. Push the changes to the main branch:

   ```bash
   git push origin main
   ```

4. Deploy the changes to GitHub Pages:

   ```bash
   npm run deploy
   ```

   This will rebuild the app and update the content served on GitHub Pages.

### Deploying with a Custom Commit Message

If you want to deploy the app with a custom commit message, use the following command:

```bash
npm run deploy -- -m "write your message here"
```

This allows you to specify a meaningful commit message for the deployment.

---

Thank you for using the **Lassonde Visual Planner Builder**! If you have any questions or feedback, please feel free to reach out.