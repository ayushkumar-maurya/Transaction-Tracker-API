# Transaction-Tracker-API
An API for the Transaction Tracker mobile app and website, built using Node.js.
- [Click here](https://github.com/ayushkumar-maurya/Transaction-Tracker) for the Transaction Tracker mobile app repository.
- [Click here](https://github.com/ayushkumar-maurya/Transaction-Tracker-Web) for the Transaction Tracker website repository.


### Database Setup
*MySQL served as the database for this project.*
- Navigate to the `database` folder.
- Run `db.sql` to create the database.
- Run `tables.sql` to create the required tables.
- Run `data.sql` to add the required data.


### API Setup
- Navigate to the `api` folder.
- Install all the required packages using `npm i`.
- Create `.env` file and mention the following information:
    ```
    PORT=
    DB_HOST=
    DB_USERNAME=
    DB_PASSWORD=
    DB_NAME=
    WEB_APP_URL=
    ```
    where,
    - **PORT:** The port on which you want to start the API.  
    - **DB_HOST:** The database host.  
    - **DB_USERNAME:** The database username.  
    - **DB_PASSWORD:** The database password.  
    - **DB_NAME:** The database name.  
    - **WEB_APP_URL:** The URL of the Transaction Tracker website.
- Start the server using `node app`.
