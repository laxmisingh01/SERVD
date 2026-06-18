# SERVD 

SERVD is an AI-powered cooking assistant that helps users transform available pantry ingredients into delicious recipes. By combining Generative AI, pantry management, and recipe tracking, SERVD makes cooking smarter, reduces food waste, and helps users discover meals tailored to their ingredients.

## Features

* 🤖 AI-powered recipe generation using Google Gemini
* 🥫 Pantry management system
* 📖 Save and organize favorite recipes
* 🔐 Secure authentication with Clerk
* 📊 User profile and personalized recipe experience
* ☁️ Headless CMS powered by Strapi
* ⚡ Modern and responsive user interface built with Next.js

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* Clerk Authentication
* Google Gemini AI
* Arcjet Security

### Backend

* Strapi CMS
* SQLite / PostgreSQL
* REST APIs

## Project Structure

```text
SERVD/
│
├── frontend/     # Next.js application
├── backend/      # Strapi CMS backend
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/laxmisingh01/SERVD.git
cd SERVD
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run develop
```

## Environment Variables

Create the required `.env` files and add your API credentials:

* Clerk Authentication Keys
* Gemini API Key
* Strapi API Token
* Arcjet API Key

## Future Improvements

* Premium subscription plans
* Advanced meal planning
* Shopping list generation
* Nutrition tracking
* Multi-language recipe support

## Author

**Laxmi Singh**

Designed and developed with a passion for AI, web development, and building practical products that solve real-world problems.
