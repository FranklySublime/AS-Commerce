# Wearables E-Commerce Project

This is the group project that was created collaboratively for Concordia Bootcamp's final group project.

We assigned each other roles and each contributed to the final product.

# Details

## Technologies Used

- React
- Styled-Components
- Node.js
- Express
- MongoDB

## Deploying

In order to see the final product you'll need to follow these steps:

- Clone this repo this repo locally on your system.
- You'll need to create a `.env` file in the server's root directory where you'll need to add your MongoDB credentials in saved as the following:
  -- `MONGO_URI="mongodb+srv://<YOUR_DB_CREDENTIALS>`
- You will then need to run the batchimport.js file using the command `node batchImport.js` from the server's root directory.
- Once the database is set up you can install the dependencies in the server's root using the command `yarn install`.
- You can then deploy the server using `yarn start` or `npm run start`
- Next you'll want to install the frontend dependencies by running the command `yarn install` in the client's root.
- You can then deploy the client using `yarn start` or `npm run start`
