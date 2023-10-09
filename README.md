# API Sample JS

- [API Sample JS](#api-sample-js)
  - [About the App](#about-the-app)
  - [Repository Structure](#repository-structure)
  - [Environment variables](#environment-variables)

## About the App

Application routes are:

- `/`. Landing page.
- `/reserve?name=NAME&book=BOOK_NAME`. Displays "Hello *NAME*, *BOOK* book is now reserved for you. ".
- `/author?book=BOOK_NAME`. Displays book author. (Always the same for ease of use)

## Examples

- `/reserve`
```
http://localhost:8080/reserve?name=Pepe&book=It
```

- `/author`
```
http://localhost:8080/author?book=Mummy
```


## Repository Structure

The repository is structured as follows:

```
.
├── assets/                     # Development assets
├── images/                     # Images used in the present document
├── source/                     # Source code
│   ├── controllers/            # Application behavior    
│   ├── models/                 # Model definition 
│   └── routes/                 # Route definition
└── README.md                   # Present document
```

For more information see [ExpressJS Project Structure](https://dev.to/brianemilius/expressjs-project-structure-2ka4).

## Environment variables

The app uses the following environment variables:

- `PORT`: port the app will run on. Default: `8080`.