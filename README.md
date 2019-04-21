# Insta-Clone Backend

## Table of Contents

- [Deployment](#deployment)
- [Dependencies Used](#depUsed)
- [Running The Project](#runningProject)
- [Restrictions](#restrictions)
- [Description](#description)
- [Endpoints (for frontend usage)](#frontend)
  - [api/auth](#authEndpoints)
  - [api/posts](#postsEndpoints)
  - [api/profiles](#profilesEndpoints)
  - [api/likes](#likesEndpoints)
- [Table Schema](#tableSchema)

# Deployment <a name="deployment"></a>

- [Backend Deployment](https://goico-insta-backend.herokuapp.com/)

# Dependencies Used <a name="depUsed"></a>

- Node
- Express
- PostgreSQL (Production)
- SQLite3 (Development)
- Knex
- Knex Cleaner
- Bcryptjs
- Jsonwebtoken
- Cors
- Helmet
- Dotenv
- Nodemon (Development)

# Running The Project <a name="runningProject"></a>

If you would like to run this project locally, `cd` into the repository and run `yarn`. This will install the needed dependencies. Next you can run either `yarn start` to run the server using node or `yarn server` to run the server using nodemon. The purpose of using nodemon is to restart the server any time you make a change and save.

# Restrictions <a name="restrictions"></a>

If you would like to make a request to the profiles endpoint, a valid **JSON web token** is required in your request headers.authorization. For posts and comments, making a **GET** request does not require a **JSON web token**, but **POST, DEL,** and **PUT** requests do.

# Description <a name="description"></a>

This project is a RESTful API built using Node and Express. The purpose of this project is to provide a Backend for my Insta-Clone client. User registration, login, post and comment creation, liking, deleting, fetching, or editing, are all handled here. This project was deployed on `Heroku`.

- The server is run using Node.
- Express is a minimalist Node web application framework for building APIs.
- PostgreSQL is the database used for production. I used SQLite3 for development.
- Knex is a SQL query builder for JavaScript.
- Knex Cleaner is a Knex dependency for cleaning up seed data.
- Jsonwebtoken is used for authenticating users.
- Bcrypt is used for hashing passwords.
- Helmet adds a base layer of security by hiding basic info about the API when interacting with it.
- Dotenv allows the server to interact with environment variables.
- Cors is a dependency used to allow Cross Origin Resource Sharing. This allows my Frontend client to interact with the Backend.

# Endpoints (for frontend usage) <a name="frontend"></a>

# api/auth <a name="authEndpoints"></a>

---

#### POST `/auth/login`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string, up to 128 characters
password: string, up to 100 characters

##### Example Request:

```
Header: default
URL Params: none
Body:
{
    username: 'mandy123',
    password: 'abc123'
}
```

##### Example Response:

```
{
    "message": "Welcome mandy123!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userID": 10
}
```

---

#### POST `/auth/register`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string, up to 128 characters
password: string, up to 100 characters

##### Example Request:

```
Header: default
URL Params: none
Body:
{
    username: 'cooper',
    password: '123abc'
}
```

##### Example Response:

```
{
    "message": "Welcome cooper!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userID": 11
}
```

---

# api/posts <a name="postsEndpoints"></a>

---

#### GET `/api/posts`

##### Example Request:

```
Header: default
URL Params: none
Body: none
```

##### Example Response:

```
[
    {
        "id": 1,
        "user_id": 1,
        "imageUrl": "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
        "createdAt": "2019-04-17T05:31:06.072Z",
        "updatedAt": "2019-04-17T05:31:06.072Z",
        "username": "philzcoffee",
        "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
        "likes": "9",
        "comments": [
            {
                "id": 1,
                "username": "philzcoffee",
                "text": "We've got more than just delicious coffees to offer at our shops!",
                "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
                "createdAt": "2019-04-17T05:31:06.084Z",
                "updatedAt": "2019-04-17T05:31:06.084Z"
            },
            {
                "id": 2,
                "username": "biancasaurus",
                "text": "Looks delicious!",
                "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
                "createdAt": "2019-04-17T05:31:06.084Z",
                "updatedAt": "2019-04-17T05:31:06.084Z"
            },
            {
                "id": 3,
                "username": "martinseludo",
                "text": "Can't wait to try it!",
                "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
                "createdAt": "2019-04-17T05:31:06.084Z",
                "updatedAt": "2019-04-17T05:31:06.084Z"
            },
            {
                "id": 21,
                "username": "t1alpha",
                "text": "looks fire",
                "thumbnailUrl": "https://pbs.twimg.com/profile_images/693320968811380736/g3cD_R1A_400x400.png",
                "createdAt": "2019-04-18T04:35:21.671Z",
                "updatedAt": "2019-04-18T04:35:21.671Z"
            }
        ],
        "showMore": true
    },
    {
        "id": 2,
        "user_id": 2,
        "imageUrl": "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
        "createdAt": "2019-04-17T05:31:06.072Z",
        "updatedAt": "2019-04-17T05:31:06.072Z",
        "username": "fortnite",
        "thumbnailUrl": "https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg",
        "likes": "8",
        "comments": [
            {
                "id": 4,
                "username": "twitch",
                "text": "Epic Street Fighter action here in Las Vegas at #EVO2017!",
                "thumbnailUrl": "https://www.twitch.tv/p/assets/uploads/glitch_474x356.png",
                "createdAt": "2019-04-17T05:31:06.084Z",
                "updatedAt": "2019-04-17T05:31:06.084Z"
            },
            {
                "id": 5,
                "username": "michaelmarzetta",
                "text": "Omg that match was crazy",
                "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
                "createdAt": "2019-04-17T05:31:06.084Z",
                "updatedAt": "2019-04-17T05:31:06.084Z"
            },
            {
                "id": 6,
                "username": "themexican_leprechaun",
                "text": "What a setup",
                "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
                "createdAt": "2019-04-17T05:31:06.084Z",
                "updatedAt": "2019-04-17T05:31:06.084Z"
            },
            {
                "id": 7,
                "username": "dennis_futbol",
                "text": "It that injustice",
                "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
                "createdAt": "2019-04-17T05:31:06.084Z",
                "updatedAt": "2019-04-17T05:31:06.084Z"
            }
        ],
        "showMore": true
    },
]
```

---

#### GET `/api/posts/:id`

##### Required:

**Header**: default

**URL Params**: ID of post

**Body**: none

##### Example Request:

```
Header: default
URL Params: 1
Body: none
```

##### Example Response:

```
{
    "id": 1,
    "user_id": 1,
    "imageUrl": "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    "username": "philzcoffee",
    "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
    "description": "Opened and ready for business!",
    "createdAt": "2019-04-17T05:31:06.072Z",
    "updatedAt": "2019-04-17T05:31:06.072Z",
    "likes": "9",
    "comments": [
        {
            "id": 1,
            "username": "philzcoffee",
            "text": "We've got more than just delicious coffees to offer at our shops!",
            "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
            "createdAt": "2019-04-17T05:31:06.084Z",
            "updatedAt": "2019-04-17T05:31:06.084Z"
        },
        {
            "id": 2,
            "username": "biancasaurus",
            "text": "Looks delicious!",
            "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
            "createdAt": "2019-04-17T05:31:06.084Z",
            "updatedAt": "2019-04-17T05:31:06.084Z"
        },
        {
            "id": 3,
            "username": "martinseludo",
            "text": "Can't wait to try it!",
            "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
            "createdAt": "2019-04-17T05:31:06.084Z",
            "updatedAt": "2019-04-17T05:31:06.084Z"
        },
        {
            "id": 21,
            "username": "t1alpha",
            "text": "looks fire",
            "thumbnailUrl": "https://pbs.twimg.com/profile_images/693320968811380736/g3cD_R1A_400x400.png",
            "createdAt": "2019-04-18T04:35:21.671Z",
            "updatedAt": "2019-04-18T04:35:21.671Z"
        },
        {
            "id": 24,
            "username": "sadfsdaf",
            "text": "sadfsadf",
            "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
            "createdAt": "2019-04-18T16:59:34.551Z",
            "updatedAt": "2019-04-18T16:59:34.551Z"
        },
        {
            "id": 25,
            "username": "sadfsdaf",
            "text": "sadfsadf",
            "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
            "createdAt": "2019-04-18T16:59:37.600Z",
            "updatedAt": "2019-04-18T16:59:37.600Z"
        }
    ]
}
```

---

#### POST `/api/posts`

##### Required:

**Header**: JSON web token

**URL Params**: none

**Body**:

- user_id: integer (FK referring to PK of profiles table. Who is making the post?)
- imageUrl: string, up to 256 characters
- description: string, up to 500 characters (optional)

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: none
Body:
{
    "user_id": 2,
    "imageUrl": "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    "description": "Opened and ready for business!"
}
```

##### Example Response:

```
{
    "id": 1,
    "user_id": 2,
    "imageUrl": "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    "username": "philzcoffee",
    "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
    "description": "Opened and ready for business!",
    "createdAt": "2019-04-17T05:31:06.072Z",
    "updatedAt": "2019-04-17T05:31:06.072Z",
    "likes": null,
    "comments": []
}
```

---

#### PUT `/api/posts/:id`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of post

**Body**:

- imageUrl: string, up to 256 characters (optional)
- description: string, up to 500 characters (optional)

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 1
Body:
{
    "description": "We are closed on Sundays!"
}
```

##### Example Response:

```
{
    "id": 1,
    "user_id": 2,
    "imageUrl": "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    "username": "philzcoffee",
    "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
    "description": "We are closed on Sundays!",
    "createdAt": "2019-04-17T05:31:06.072Z",
    "updatedAt": "2019-04-17T05:31:06.072Z",
    "likes": null,
    "comments": []
}
```

---

#### DELETE `/api/posts/:id`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of post

**Body**: none

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 5
Body: none
```

##### Example Response:

```
{
    "id": 5,
    "user_id": 13,
    "imageUrl": "https://cdn.vs.com.br/webedia-temp/1543339173760-naviliftesl_2517793b.jpg",
    "username": "shroud",
    "thumbnailUrl": "https://pbs.twimg.com/profile_images/986674209106550784/mbmmyb6Z_400x400.jpg",
    "description": "Congrats to the broys and the #GOAT",
    "createdAt": "2019-04-17T05:31:06.072Z",
    "updatedAt": "2019-04-17T05:31:06.072Z",
    "likes": "10",
    "comments": [
        {
            "id": 15,
            "username": "summit1g",
            "text": "This tournament was amaaazing",
            "thumbnailUrl": "https://pbs.twimg.com/profile_images/825045721573314561/efRvTGlf_400x400.jpg",
            "createdAt": "2019-04-17T05:31:06.084Z",
            "updatedAt": "2019-04-17T05:31:06.084Z"
        },
        {
            "id": 16,
            "username": "dennis_futbol",
            "text": "s1mple is officially the #GOAT",
            "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
            "createdAt": "2019-04-17T05:31:06.084Z",
            "updatedAt": "2019-04-17T05:31:06.084Z"
        }
    ]
}
```

---

#### GET `/api/posts/:id/comments`

##### Required (unless marked optional):

**Header**: default

**URL Params**: ID of post

**Body**: none

##### Example Request:

```
Header: default
URL Params: 1
Body: none
```

##### Example Response:

```
[
    {
        "id": 1,
        "text": "We've got more than just delicious coffees to offer at our shops!",
        "username": "philzcoffee",
        "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
        "createdAt": "2019-04-17T05:31:06.084Z",
        "updatedAt": "2019-04-17T05:31:06.084Z"
    },
    {
        "id": 2,
        "text": "Looks delicious!",
        "username": "biancasaurus",
        "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
        "createdAt": "2019-04-17T05:31:06.084Z",
        "updatedAt": "2019-04-17T05:31:06.084Z"
    },
    {
        "id": 3,
        "text": "Can't wait to try it!",
        "username": "martinseludo",
        "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
        "createdAt": "2019-04-17T05:31:06.084Z",
        "updatedAt": "2019-04-17T05:31:06.084Z"
    },
    {
        "id": 21,
        "text": "looks fire",
        "username": "t1alpha",
        "thumbnailUrl": "https://pbs.twimg.com/profile_images/693320968811380736/g3cD_R1A_400x400.png",
        "createdAt": "2019-04-18T04:35:21.671Z",
        "updatedAt": "2019-04-18T04:35:21.671Z"
    },
    {
        "id": 24,
        "text": "sadfsadf",
        "username": "sadfsdaf",
        "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
        "createdAt": "2019-04-18T16:59:34.551Z",
        "updatedAt": "2019-04-18T16:59:34.551Z"
    },
    {
        "id": 25,
        "text": "sadfsadf",
        "username": "sadfsdaf",
        "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
        "createdAt": "2019-04-18T16:59:37.600Z",
        "updatedAt": "2019-04-18T16:59:37.600Z"
    }
]
```

---

#### GET `/api/posts/:id/comments/:comID`

##### Required (unless marked optional):

**Header**: default

**URL Params**: ID of post, ID of comment

**Body**: none

##### Example Request:

```
Header: default
URL Params: 5, 25
Body: none
```

##### Example Response:

```
{
    "id": 25,
    "text": "sadfsadf",
    "username": "sadfsdaf",
    "thumbnailUrl": "https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg",
    "createdAt": "2019-04-18T16:59:37.600Z",
    "updatedAt": "2019-04-18T16:59:37.600Z"
}
```

---

#### POST `/api/posts/:id`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of post

**Body**:

- user_id: integer (FK referring to PK of profiles table. Who is making the comment?)
- post_id: integer (FK referring to PK of posts table. Which post does this comment belong to?)
- text: string, up to 500 characters (optional)

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 4
Body:
{
    "user_id": 13,
    "post_id": 4,
    "text": "ALPHA"
}
```

##### Example Response:

```
{
    "id": 20,
    "text": "ALPHA",
    "username": "shroud",
    "thumbnailUrl": "https://pbs.twimg.com/profile_images/986674209106550784/mbmmyb6Z_400x400.jpg",
    "createdAt": "2019-04-17T05:48:20.598Z",
    "updatedAt": "2019-04-17T05:48:20.598Z"
}
```

---

#### PUT `/api/posts/:id/comments/:comID`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of post, ID of comment
**Body**:

text: string, up to 500 characters (optional)

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 5, 20
Body:
{
    "text": "ALPHA PLAYER"
}
```

##### Example Response:

```
{
    "id": 20,
    "text": "ALPHA PLAYER",
    "username": "shroud",
    "thumbnailUrl": "https://pbs.twimg.com/profile_images/986674209106550784/mbmmyb6Z_400x400.jpg",
    "createdAt": "2019-04-17T05:48:20.598Z",
    "updatedAt": "2019-04-17T05:48:20.598Z"
}
```

---

#### DELETE `/api/posts/:id/comments/:comID`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of post, ID of comment

**Body**: none

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 5, 20
Body: none
```

##### Example Response:

```
{
    "id": 20,
    "text": "ALPHA PLAYER",
    "username": "shroud",
    "thumbnailUrl": "https://pbs.twimg.com/profile_images/986674209106550784/mbmmyb6Z_400x400.jpg",
    "createdAt": "2019-04-17T05:48:20.598Z",
    "updatedAt": "2019-04-17T05:48:20.598Z"
}
```

---

# api/profiles <a name="profilesEndpoints"></a>

---

#### GET `/api/profiles`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: none

**Body**: none

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: none
Body: none
```

##### Example Response:

```
[
    {
        "id": 1,
        "username": "philzcoffee",
        "password": "$2a$08$7qeM4dRjcbAcl71OC7Hub.2fmIMXRm97maJzK7kKv0lngIFd4tmM6",
        "created_at": "2019-04-17T05:31:06.065Z",
        "updated_at": "2019-04-17T05:31:06.065Z",
        "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
    },
    {
        "id": 2,
        "username": "fortnite",
        "password": "$2a$08$Q8ezSEJx.qacGPuAA5wNuueGXfeOZMwLe53o3/Refo/Vi1wtD/Dl.",
        "created_at": "2019-04-17T05:31:06.065Z",
        "updated_at": "2019-04-17T05:31:06.065Z",
        "thumbnailUrl": "https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg"
    },
]
```

---

#### GET `/api/profiles/:id`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of profile

**Body**: none

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 1
Body: none
```

##### Example Response:

```
{
    "id": 1,
    "username": "philzcoffee",
    "password": "$2a$08$7qeM4dRjcbAcl71OC7Hub.2fmIMXRm97maJzK7kKv0lngIFd4tmM6",
    "created_at": "2019-04-17T05:31:06.065Z",
    "updated_at": "2019-04-17T05:31:06.065Z",
    "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
}
```

---

#### PUT `/api/profiles/:id`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of profile

**Body**: Field that you are editing (username, password, or thumbnailUrl)

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 1
Body:
{
    "username": "philzcoffeeOFFICIAL"
}
```

##### Example Response:

```
{
    "id": 1,
    "username": "philzcoffeeOFFICIAL",
    "password": "$2a$08$7qeM4dRjcbAcl71OC7Hub.2fmIMXRm97maJzK7kKv0lngIFd4tmM6",
    "created_at": "2019-04-17T05:31:06.065Z",
    "updated_at": "2019-04-17T05:31:06.065Z",
    "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
}
```

#### DEL `/api/profiles/:id`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: ID of profile

**Body**: none

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: 1
Body: none
```

##### Example Response:

```
{
    "id": 1,
    "username": "philzcoffeeOFFICIAL",
    "password": "$2a$08$7qeM4dRjcbAcl71OC7Hub.2fmIMXRm97maJzK7kKv0lngIFd4tmM6",
    "created_at": "2019-04-17T05:31:06.065Z",
    "updated_at": "2019-04-17T05:31:06.065Z",
    "thumbnailUrl": "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
}
```

---

# api/likes <a name="likesEndpoints"></a>

---

#### POST `/api/likes`

##### Required (unless marked optional):

**Header**: JSON web token

**URL Params**: none

**Body**:

- post_id: ID of post that is being liked.
- user_id: ID of user who is liking that post.

##### Example Request:

```
Header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
URL Params: none
Body:
{
   "post_id": 1,
   "user_id": 13
}
```

##### Example Responses:

If the user had not yet liked this post:

```
{
    "message": "Like created."
    "post_id": 1,
    "liked": true
}
```

If the user had already liked this post and is now disliking it:

```
{
    "message": "Like modified."
    "post_id": 1,
    "liked": false
}
```

---

# Table Schema <a name="tableSchema"></a>

### profiles

| Field        | Data Type | Modifiers                                   |
| ------------ | --------- | ------------------------------------------- |
| id           | integer   | PK, auto-increment                          |
| username     | string    | required, unique, limited to 128 characters |
| password     | string    | required, limited to 100 characters         |
| thumbnailUrl | string    | optional, limited to 256 characters         |
| created_at   | date      | auto-generated                              |
| updated_at   | date      | auto-generated                              |

### posts

| Field       | Data Type | Modifiers                                      |
| ----------- | --------- | ---------------------------------------------- |
| id          | integer   | PK, auto-increment                             |
| user_id     | integer   | required, FK referring to PK of profiles table |
| imageUrl    | string    | required, limited to 256 characters            |
| description | string    | optional, limited to 500 characters            |
| created_at  | date      | auto-generated                                 |
| updated_at  | date      | auto-generated                                 |

### comments

| Field      | Data Type | Modifiers                                      |
| ---------- | --------- | ---------------------------------------------- |
| id         | integer   | PK, auto-increment                             |
| user_id    | integer   | required, FK referring to PK of profiles table |
| post_id    | integer   | required, FK referring to PK of posts table    |
| text       | string    | requried, limited to 500 characters            |
| created_at | date      | auto-generated                                 |
| updated_at | date      | auto-generated                                 |

### likes

| Field      | Data Type | Modifiers                                      |
| ---------- | --------- | ---------------------------------------------- |
| id         | integer   | PK, auto-increment                             |
| user_id    | integer   | required, FK referring to PK of profiles table |
| post_id    | integer   | required, FK referring to PK of posts table    |
| created_at | date      | auto-generated                                 |
| updated_at | date      | auto-generated                                 |
