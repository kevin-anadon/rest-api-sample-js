# API Sample JS

- [API Sample JS](#api-sample-js)
  - [About the App](#about-the-app)
  - [Repository Structure](#repository-structure)
  - [Environment variables](#environment-variables)

## About the App

Application routes are:

- `/`. Landing page.
- `/reserve?name=NAME&book=BOOK_NAME`. Displays reserve status.
- `/author?book=BOOK_NAME`. Displays book author.
- `/book?book=BOOK_NAME`. Displays book info.

## Examples

- `/reserve`
```
http://localhost:8080/reserve?book=Ficciones
```

Displays: 
```json
{
  "reserved": true
}
```

- `/author`
```
http://localhost:8080/author?book=Ficciones
```

Displays: 
```json
{
  "author": "Jorge Luis Borges"
}
```

- `/book`
```
http://localhost:8080/book?book=Ficciones
```

Displays: 
```json
{
  "name": "Ficciones",
    "author": "Jorge Luis Borges",
    "genre": [
        "Ficción",
        "Cuentos"
    ],
    "reserved": true
}
```

En caso de error: 
```json
{
    "error": "Book not found"
}
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
