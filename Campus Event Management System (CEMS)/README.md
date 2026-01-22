Campus Event Management System (CEMS)

A web-based system that allows students to view campus events and organizers to create, manage, and publish events.



1️⃣ SDLC PHASE 1: PLANNING & PROBLEM IDENTIFICATION

(Where chaos is first named)

🔍 Problem Statement

In many universities, campus events are scattered across notice boards, WhatsApp groups, and word of mouth. Students miss events. Organizers struggle with attendance. Order is needed.


🎯 Project Objectives

Centralize campus events in one platform

Allow organizers to create and manage events

Allow students to view upcoming events

Provide basic authentication for organizers


👥 Stakeholders

Students – view events

Event Organizers – create/manage events

System Admin – oversees platform


🛠️ Tools & Technologies

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB

Version Control: Git & GitHub



2️⃣ SDLC PHASE 2: REQUIREMENTS ANALYSIS

(Listening before speaking)

✅ Functional Requirements

1. Users can view all published events


2. Organizers can:

-Register
-Log in
-Create events
-Edit events
-Delete events


3. Each event must have:

-Event title
-Description
-Date
-Venue


❌ Non-Functional Requirements

System must be easy to use

Data must persist in database

Basic authentication security



3️⃣ SDLC PHASE 3: SYSTEM DESIGN

(The blueprint before the building)

🧱 Architecture

Client–Server Architecture

Frontend (Browser)
       ↓
Backend (Express Server)
       ↓
Database (MongoDB)

🗂️ Database Design

Organizer Schema

Organizer
- organizerId
- name
- email
- password

Event Schema

Event
- eventId
- title
- description
- date
- venue
- organizerId
