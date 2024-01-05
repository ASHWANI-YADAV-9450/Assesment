# Getting Started

1. **Clone the repository:**

    ```bash

    git clone https://github.com/ASHWANI-YADAV-9450/Assesment.git
    
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the application:**

    ```bash
    npm start || nodemon app.js
    ```

4. **Obtain Authorization Token:**

   - Use the provided Postman collection (`Assesment.postman_collection`) to make a `POST` request to `/api/auth/login` with valid credentials.
   - The response will include an `access_token`. Copy this token for use in authenticated requests.

5. **Testing the API:**

    - Import the provided Postman collection (`Assesment.postman_collection`) into Postman.
    - Configure environment variables, including the `Authorization` header with the value `Bearer <your_access_token>`.
    - Use the collection to test various API endpoints.

6. **Information about shareNotes API:**

   Share a specific note by providing the note's ID as a parameter (`:id`) and the user ID to share with (`sharedUserId`) in the request body.


