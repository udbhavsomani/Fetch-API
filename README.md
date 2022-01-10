# FETCH-MENTOR API

### Routes
- > /refresh
    - Fetch and update the mentor data from the given API on the server
- > /
    - Returns the stored mentor list : an array of JSON objects
- > /getdata
    - GET query params:
        > - offset : integer (Default: 10)
        > - limit : integer (Default: 10)
    - Returns the given number of mentors from the complete list starting from offset to limit
    - **Query Params should be within the range of the mentor list**
