# Volunteer Management Website

## Project Overview

The Volunteer Management Website is a user-friendly platform designed to facilitate the management of volunteer activities. Users can create posts requesting volunteers, update or delete these posts, and also volunteer for other users' posts. This project demonstrates expertise in web development, database integration, authentication, and responsive design.

## Live URL

[https://heartfelt-trifle-9895a1.netlify.app/](https://heartfelt-trifle-9895a1.netlify.app/)

## Key Features

### General Features:

- **Responsive Design**: The website is fully responsive, adapting seamlessly to mobile, tablet, and desktop screens.
- **Dark/Light Theme**: Users can toggle between dark and light themes for a personalized experience.
- **Dynamic Titles**: Website titles dynamically change based on the current route.
- **404 Page**: A user-friendly Not Found page for invalid routes.

### User Management:

- **Authentication**: Email-password-based authentication with optional Google or GitHub login.
- **JWT Authentication**: Secure user authentication and private route protection.
- **Profile Management**: Logged-in users can manage their posts and requests.

### Volunteer Posts:

- **CRUD Operations**: Users can add, update, delete, and view volunteer need posts.
- **Pagination**: Displays 6-9 posts per page with pagination.
- **Search Functionality**: Search posts by title with backend integration.
- **Be a Volunteer**: Users can volunteer for posts and their status is tracked in the database.
- **Layouts**: Toggle between card and table layouts for viewing posts.

### UI Enhancements:

- **Navbar**: Includes conditional Login/Logout buttons, profile dropdown, and theme toggle.
- **Footer**: Displays relevant information with eye-catching design.
- **Banner/Slider**: A carousel with meaningful information and images.
- **Extra Sections**: Two additional sections with relevant content to enhance the Home page.

### Notifications and Feedback:

- **Toast/Alerts**: Informative messages for all CRUD operations, authentication, and errors.
- **Loading Spinner**: Displays during data loading states.

## Deployment Details

- **Client-Side Hosting**: Hosted on Firebase for reliable performance.
- **Server-Side Hosting**: Hosted on Vercel with proper CORS and authorization configurations.
- **Environment Variables**: Firebase and MongoDB credentials are secured using environment variables.

## Technologies Used

### Frontend:

- **React.js**: For building a responsive and dynamic user interface.
- **Tailwind CSS**: Styling with utility-first CSS framework.
- **Additional Libraries**: Flowbite, React Datepicker, Framer Motion for animations.

### Backend:

- **Node.js**: Backend server for handling API requests.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: Database for storing user and post data.
- **JWT**: Secure token-based authentication.

### Tools:

- **Firebase**: Authentication and hosting.
- **Vercel**: Backend deployment.
- **Git**: Version control with meaningful commit messages.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone [client-repo-url]
   git clone [server-repo-url]
   ```

2. Navigate to the directories and install dependencies:

   ```bash
   cd client
   npm install

   cd server
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in both client and server directories.
   - Add Firebase and MongoDB credentials to respective `.env` files.

4. Start the development servers:

   ```bash
   cd client
   npm start

   cd server
   npm run dev
   ```

5. Deploy the application:
   - Client: Use Firebase hosting.
   - Server: Deploy using Vercel CLI.

## Usage

### For Users:

1. Register and log in to access all features.
2. Create, view, update, and delete your volunteer need posts.
3. Search and browse other posts to volunteer.
4. Manage your volunteer requests and view statuses.

### For Admins/Examiners:

- Verify responsiveness and dark/light theme functionality.
- Test CRUD operations and authentication.
- Evaluate code quality via the GitHub repository with meaningful commits.

## GitHub Repositories

- **Client-Side Repository**: [Insert client repo link]
- **Server-Side Repository**: [Insert server repo link]

## Live Links

- **Live Site**: [https://heartfelt-trifle-9895a1.netlify.app/](https://heartfelt-trifle-9895a1.netlify.app/)
- **Server**: [https://volunteer-blue.vercel.app/](https://volunteer-blue.vercel.app/)

## Additional Features

- Framer Motion animations for enhanced user experience.
- Meaningful extra sections and customizable themes.

## Guidelines Followed

- 15+ client-side commits and 8+ server-side commits.
- All CRUD operations secured and functional.
- No errors on route reloads or private route access.

## Future Improvements

- Add email verification and password recovery features.
- Enhance animations and implement more advanced UI libraries.
- Introduce admin roles for managing volunteer requests.

## Contact

For any issues or feedback, please feel free to reach out via [arshakib428@gmail.com].
