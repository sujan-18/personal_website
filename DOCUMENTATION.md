# Sujan Portfolio Documentation

## Overview
A modern, full-stack portfolio website designed to showcase your work dynamically. It features a React-based frontend for a premium user experience and a Django backend for easy content management.

## Tech Stack
*   **Frontend:** React 19, Vite, Tailwind CSS, Lucide React (Icons), Axios
*   **Backend:** Django 5, Django REST Framework, SQLite
*   **AI Feature:** "Malla" - A strict, context-aware chatbot assistant

## Key Features
1.  **Dynamic Project Showcase:** Add/Edit projects via the Admin Panel; updates instantly on the site.
2.  **Resume Management:** Upload multiple CV versions and toggle the active one using `is_active`.
3.  **Chatbot "Malla":** A dedicated assistant that answers questions about your skills and projects (and politely refuses off-topic queries).
4.  **Contact Form:** Visitors can send messages which are stored in the database.
5.  **Admin Panel:** Full control over all site content at `/admin/`.

## Directory Structure
*   `api/` - Application logic (Database models, API views, Chatbot logic).
*   `backend/` - Main Django configuration and settings.
*   `frontend/` - Source code for the React user interface.

## Quick Start Guide

### 1. Backend Setup
```bash
# In the root directory
python -m venv venv                # Create virtual env
venv\Scripts\activate              # Activate (Windows)
pip install django djangorestframework django-cors-headers pillow  # Install dependencies
python manage.py migrate           # Setup database
python manage.py runserver         # Start backend at http://127.0.0.1:8000
```

### 2. Frontend Setup
```bash
cd frontend
npm install                        # Install Node modules
npm run dev                        # Start frontend at http://localhost:5173
```

## API Endpoints
*   `GET /api/projects/`: List portfolio projects
*   `GET /api/cv/`: Retrieve the active Resume/CV
*   `POST /api/contact/`: Send a message
*   `POST /api/chat/`: Interact with Malla
