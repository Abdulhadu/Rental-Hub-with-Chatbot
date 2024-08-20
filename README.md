# Rental Hub
![Alt text](public/Website%20SS/ss%20(1).png)
Rental Hub is a comprehensive platform that facilitates the rental of products through an intuitive user interface and a powerful admin dashboard. The application is built using modern web technologies and offers seamless user authentication, payment integration, and a chatbot for enhanced user experience.

## Table of Contents
- [Front End](#front-end)
- [Back End](#back-end)
- [Database](#database)
- [User Authentication](#user-authentication)
- [Database Details](#database-details)
- [Functions](#functions)
  - [User View of Website](#user-view-of-website)
  - [Admin Dashboard](#admin-dashboard)
- [Chatbot](#chatbot)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Front End
- **Framework**: Next.js
- **Language**: 
  - React.js
  - JavaScript
- **UI Library**:
  - Material MUI
  - Tailwind CSS

## Back End
- **Framework**: Node.js
- **API**: Restful API Integration

## Database
- **Storage**: MongoDB Atlas Cloud Storage
- **Language**: Mongoose CLI

## User Authentication
- **Method**: JWT Token 
  - Tokens are stored in session (server side) upon sign in.
  - After authentication, tokens are transferred to cookie storage for service access.

## Database Details
- **Database Name**: Online Store
- **Collections**:
  - **Admin**: Includes the admin users who sign in to list products and check orders.
  - **Category**: Includes categories for each product.
  - **Product**: Contains products with a category ID as a foreign key.
  - **Order**: Contains order details, invoices, and order statuses.
  - **User**: Includes normal users who sign in to rent products.

## Functions

### User View of Website
![Alt text](public/Website%20SS/ss%20(3).png)
### Functions or Featuures
- Rent products
- Check product availability in your city
- View order details
- Complete checkout process with payment integration
- Receive order completion updates

### Admin Dashboard
![Alt text](public/Website%20SS/ss%20(9).png)
- **Products**:
  - Add products
  - View products
  - Delete products
  - Update products
- **Category**:
  - Add category
  - Delete category
  - Update category
  - View category
- **Orders**:
  - View orders
  - View order statuses
- **Admin Users**:
  - View admins
  - Delete admin users
  - Create admin users

## Chatbot
- **Model**: Chatbot Model-h5
- **Language**: Python (Flask)
- **Server**: Flask Server

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Abdulhadu/Rental-Hub-with-Chatbot.git
