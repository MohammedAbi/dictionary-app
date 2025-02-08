# Dictionary App

![Image](https://github.com/user-attachments/assets/b79b6188-dda9-43c0-bde9-f69304e450b9)

This image showcases the Dictionary App interface, featuring a simple search functionality and the display of results fetched from the API.

A simple dictionary web application built with React that uses the [Dictionary API](https://api.dictionaryapi.dev/api/v2/entries/en/<word>) to fetch word definitions, phonetics, and synonyms.

## Features

- Search for words and get definitions.
- Listen to the pronunciation of words (if available).
- View synonyms related to the word.
- Built with React and styled using Tailwind CSS.

## Live Demo

You can check the live demo of the app at: [Netlify Live Demo Link](https://your-netlify-link.com)

## Technologies Used

- React
- Tailwind CSS
- Dictionary API: [https://api.dictionaryapi.dev/](https://api.dictionaryapi.dev/api/v2/entries/en/<word>)

## Setup

To run this app locally, follow these steps:

### Prerequisites

Ensure that you have `Node.js` and `npm` installed on your machine.

- Install Node.js: [https://nodejs.org/](https://nodejs.org/)
- Install npm (usually comes with Node.js): [https://www.npmjs.com/](https://www.npmjs.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dictionary-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd dictionary-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser by going to `http://localhost:5173`.

## File Structure

```
/dictionary-app
|-- /public
|-- /src
    |-- /assets
    |-- /components
    |-- App.jsx
    |-- index.css
    |-- index.jsx
|-- package.json
|-- tailwind.config.js
|-- vite.config.js
```

## Special Thanks

A special thanks to [Tadnology](https://www.youtube.com/watch?v=lV08MFPRrTo) for the **How To Build a Dictionary App Using React | For Beginners** tutorial. It provided invaluable guidance in helping me learn how to interact with APIs using React and Tailwind as a beginner.
