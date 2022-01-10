# FETCH-MENTOR API

> _This repository is a part of an assignment task._

### Routes
- > /refresh
    - Fetch and update the mentor data from the given API on the server
    - Stored in [mentor_data.json](https://github.com/udbhavsomani/Fetch-API/blob/main/data/mentor_data.json)
- > /
    - Returns the stored mentor list : an array of JSON objects
- > /getdata
    - GET query params:
        > - offset : integer (Default: 10)
        > - limit : integer (Default: 10)
    - Returns the given number of mentors from the complete list starting from offset to limit
    - **Query Params should be within the range of the mentor list**

### Setup
- > Clone this repo and run the following commands
    - > ```npm install```
    - > ```npm run start```
        - Local development server will start at http://localhost:3000