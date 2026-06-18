# SERVD Frontend

The frontend of SERVD is built using Next.js and provides a modern AI-powered cooking experience. Users can manage pantry items, generate recipes using AI, save recipes, and maintain their cooking profile through a clean and responsive interface.

## Features

* AI Recipe Generation
* Pantry Management
* Recipe Saving
* Clerk Authentication
* Responsive UI
* Dark Mode Support
* Protected Routes
* Arcjet Security Integration

## Tech Stack

* Next.js 16
* React 19
* Tailwind CSS
* Clerk Authentication
* Google Gemini AI
* Lucide Icons
* Arcjet

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file and configure:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
GEMINI_API_KEY=
ARCJET_KEY=
STRAPI_API_TOKEN=
NEXT_PUBLIC_STRAPI_URL=
```

## Folder Structure

```text
app/
components/
actions/
hooks/
lib/
public/
```

## Main Functionalities

### Authentication

User authentication and session management are handled using Clerk.

### Recipe Generation

Google Gemini AI generates personalized recipes based on available ingredients.

### Pantry Management

Users can add, update, and manage pantry items for better recipe recommendations.

### Saved Recipes

Generated recipes can be saved and accessed later through the user dashboard.

## Author

Designed and developed by **Laxmi Singh**.

Connect with me through the social links available on the application footer.
