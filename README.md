# SuperChat
# Raghupatruni Manoj Kumar
# IIT Kharagpur - 3rd year
# Electronics and Electrical Communication Engineering

SuperChat Chatting Application using ReactJS and DjangoREST Framework:
Admin username: manoj
Admin email: manoj@gmail.com
Admin password: manojthekj

# Backend : Django REST Framework:
# Key Backend Components:
• API Endpoints: The backend exposes several API endpoints for various functionalities for user registration, login, messaging, user search, etc.
• User Authentication: When users register or log in, they receive tokens which are used to authenticate subsequent API requests. The tokens expire after 60 minutes. The users need to refresh thier browser to get new tokens.
• Message model: A message model is maintained which stores the message details like the sender, receiver, and content.
• Profile model: A profile model is maintained which stores the additional details of the user.
• Different view functions are created to handle the URL Routing effectively.

# Extensions used in Django REST:
• Django REST framework- flexible toolkit for building Web APIs: pip install djangorestframework
•  ckeditor5 - JavaScript rich text editor with MVC architecture, custom data model and virtual DOM: pip install django-ckeditor-5
• simple jwt - A JSON Web Token authentication plugin for the Django REST Framework: pip install djangorestframework-simplejwt
• shortuuid - A generator library for concise, unambiguous and URL-safe UUIDs: pip install shortuuid

# Frontend : ReactJS:
# Key Frontend Components:
• Navbar: Displays Login and Register Links when no user is logged in, and an Logout link when a user is logged in.
• Registration page, Login Page
• Message Components: Allows users to send messages and view their message history. Messages are loaded dynamically when two people are chatting in real-time, but it needs to refreshed if their chats are not open.
• Search Users Component: Displays a search bar and a list of users based on search queries.
• State Management: THe react-router-dom library is used for client-side routing
• HTTP Requests: useAxios is used as a custom hook for making HTTP requests to interact with the backend APIs.

# Extensions used in ReactJS:
• All the extensions can be installed using the command: npm i

# Running the application:
• We run the backend first. Open up a new terminal, type the following commands:
  •cd backend
  •python manage.py makemigrations
  •python manage.py migrate
  •python manage.py runserver
• This opens up the backend server. The admin panel of the backend can be visited with the given admin credentials.
• Now, we open up the frontend server. To do this, open up a new terminal, type the command:
  • npm start
• This opens up the frontend server. Now, we can see the login and register buttons.
• The user is again directed to the login page after successful registration. If logged in, he/she will be redirected to the inbox page.
• The search bar on the top of the inbox page can be used to find out people who are registered in the application. He/she can chat with the other people by clicking on their profiles.

