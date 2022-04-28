# Backend Endpoints

GET `/items`

Retrieves all items from the database.

GET `/items/:_id`

Retrieves a specific item from the database.

GET `/companies`

Retrieves all companies from the database.

GET `/companies/:companyId`

Retrieves a specific company from the database.

GET `/cart`

Retrieves cart info from the database.

GET `/order`

Retrieves order info from the database.

PATCH `/items`

Updates inventory level once an order has been processed.

POST `/cart`

Updates items in the cart.

POST `/order`

Sends cart info to the order collection on the database.

DELETE `/cart/:_id`

Removes items from the current users cart.
