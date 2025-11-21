<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1YyDuGUPQjQVMhEEvpuDlcy9sZIVik8Wq

# Skill Swap Network

A web application that connects people who want to exchange skills and knowledge without monetary transactions. Users can offer their expertise while requesting help with tasks they need assistance with, fostering community reciprocity.

## Problem Statement

Many people have skills they could teach others but lack access to skills they need to learn. Traditional platforms either require payment or fail to facilitate direct skill-for-skill exchanges. This creates barriers to learning and reduces community connection. The Skill Swap Network addresses this by creating a direct matching system based on mutual needs.

## Core Functionality

### User Profiles
Users create profiles that include:
- Name and location information
- List of skills they can offer to others
- List of skills or help they are seeking

### Browse and Search
- View all active user profiles in the network
- Search functionality to filter by specific skills or needs
- Smart matching algorithm that identifies compatible users

### Match Detection
The system automatically identifies potential matches by analyzing:
- Users who have skills that match your stated needs
- Users who need skills that you have listed as offerings

These matches are highlighted in the interface to facilitate easier connections.

### Data Persistence
All user profiles and network data persist across sessions using a shared storage system. This allows the community to grow organically over time.

## Technical Implementation

### Technology Stack
- TypeScript for type-safe application logic
- Google AI Studio for AI-powered features
- Persistent storage API for data management
- HTML/CSS for user interface
- Vanilla JavaScript/TypeScript for DOM manipulation

### AI Integration
The application leverages Google AI Studio to enhance matching capabilities:
- Natural language processing for skill description analysis
- Improved match quality through semantic understanding
- Potential for conversational interfaces in future iterations

### Data Structure
User profiles are stored as JSON objects containing:
- Unique identifier and timestamp
- User name and location
- Arrays of skills offered and needed
- Profile creation date

### Storage Architecture
- Personal data (user's own profile) stored in isolated user storage
- Network profiles stored in shared storage accessible to all users
- Key-based data retrieval for efficient querying

## Key Features

### Profile Management
Users can add or remove skills and needs dynamically. Changes are saved automatically and reflected in the network immediately.

### Network Discovery
The browse view displays all active users with their complete skill sets and needs. The search function filters results in real-time as users type.

### Connection Interface
When users find potential matches, they can view detailed profile information and initiate contact. The interface provides context about why the match was suggested.

## Use Cases

### Scenario 1: Career Development
A junior developer needs help understanding system design. They offer tutoring in Python basics. The system matches them with a senior engineer who wants to learn Python and can teach system design principles.

### Scenario 2: Practical Skills
Someone needs help filing taxes and offers cooking lessons. They connect with an accountant who wants to learn cooking and provides tax assistance.

### Scenario 3: Language Exchange
A Spanish speaker wants to learn Mandarin. They match with a Mandarin speaker who wants to learn Spanish. Both parties benefit without monetary exchange.

## Development Roadmap

### Current Implementation
- Basic profile creation and management
- Network browsing and search
- Match detection algorithm
- Persistent data storage

### Potential Enhancements
- Direct messaging system between matched users
- Calendar integration for scheduling exchanges
- User verification and endorsement system
- Location-based filtering and sorting
- Rating and review functionality
- Safety features including public meetup recommendations

## Installation and Setup

The application runs as a standalone React component. No external API keys or backend services are required for the core functionality.

### Requirements
- Modern web browser with JavaScript enabled
- Storage API support for data persistence
- Google AI Studio API key for AI features

### Running the Application
Deploy the TypeScript application after compilation to JavaScript. The compiled code can run in any standard web hosting environment. The application is self-contained and handles all data management internally.

## Privacy and Safety Considerations

The current implementation stores all profile data in shared storage accessible to network participants. In a production environment, additional considerations would include:

- User authentication and authorization
- Data encryption for sensitive information
- Reporting mechanisms for inappropriate behavior
- Privacy controls for profile visibility
- Safety guidelines for in-person meetings

## Technical Notes

### Performance
The application uses efficient data structures and minimal re-renders. Search functionality operates on the client side for immediate results.

### Scalability
The current implementation works well for small to medium-sized communities. For larger scale deployment, consider implementing server-side search indexing and pagination.

### Browser Compatibility
The application requires modern JavaScript features including async/await and the Fetch API. It is compatible with all current versions of major browsers.

## Project Status

This is a functional prototype demonstrating the core concept of skill-based exchange matching. It successfully proves the viability of the matching algorithm and user interface patterns.

## License

This project is provided as-is for demonstration purposes.



<img width="1068" height="566" alt="image" src="https://github.com/user-attachments/assets/dd389ab1-9aa7-41ee-800f-4dac675beae4" />

https://github.com/user-attachments/assets/ee54c92d-f3f0-4af5-9e8f-a3887c1c2f98






























## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
