# API Sample JS

- [API Sample JS](#api-sample-js)
  - [About the App](#about-the-app)
  - [Examples](#examples)
    - [Available Books](#available-books)
  - [Repository Structure](#repository-structure)
  - [Environment variables](#environment-variables)

## About the App

Application routes are:

- `/`. Landing page.
- `/reserve`. Displays reserve status.
- `/author`. Displays book author.
- `/book`. Displays book info.

## Examples

- GET `/reserve?name=NAME&book=BOOK_NAME`
```
http://localhost:8080/reserve?book=Ficciones
```

Displays: 
```json
{
  "reserved": true
}
```

- GET `/author?book=BOOK_NAME`
```
http://localhost:8080/author?book=Ficciones
```

Displays: 
```json
{
  "author": "Jorge Luis Borges"
}
```

- GET `/book?book=BOOK_NAME`
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

- POST `/book`
```
http://localhost:8080/book
```

Body of the request: 
```json
{
  "name": string,
  "author": string,
  "genre": [string]
}
```

Displays: 
```json
{
  "message": "Book has been succesfully inserted"
}
```

En caso de error: 
```json
{
    "error": "Missing book info"
}
```

### Available Books
```
.
├── source/                     # Source code
│   ├── database/books.json     # Books databse
```
```json
[
    {
        "name": "Cien años de soledad",
        "author": "Gabriel García Márquez",
        "genre": ["Ficción", "Realismo mágico"],
        "reserved": true
    },
    {
        "name": "El amor en los tiempos del cólera",
        "author": "Gabriel García Márquez",
        "genre": ["Ficción", "Romance"],
        "reserved": true
    },
    {
        "name": "Rayuela",
        "author": "Julio Cortázar",
        "genre": ["Ficción", "Experimental"],
        "reserved": false
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Miguel de Cervantes",
        "genre": ["Clásico", "Aventuras"],
        "reserved": true
    },
    {
        "name": "La sombra del viento",
        "author": "Carlos Ruiz Zafón",
        "genre": ["Ficción", "Misterio"],
        "reserved": true
    },
    {
        "name": "Pedro Páramo",
        "author": "Juan Rulfo",
        "genre": ["Ficción", "Realismo mágico"],
        "reserved": true
    },
    {
        "name": "La casa de los espíritus",
        "author": "Isabel Allende",
        "genre": ["Ficción", "Realismo mágico"],
        "reserved": false
    },
    {
        "name": "Ficciones",
        "author": "Jorge Luis Borges",
        "genre": ["Ficción", "Cuentos"],
        "reserved": true
    },
    {
        "name": "Los detectives salvajes",
        "author": "Roberto Bolaño",
        "genre": ["Ficción", "Novela"],
        "reserved": true
    },
    {
        "name": "La guerra y la paz",
        "author": "León Tolstói",
        "genre": ["Clásico", "Historia"],
        "reserved": false
    },
    {
        "name": "Crimen y castigo",
        "author": "Fyodor Dostoevsky",
        "genre": ["Clásico", "Suspense"],
        "reserved": true
    },
    {
        "name": "El amor en los tiempos del cólera",
        "author": "Gabriel García Márquez",
        "genre": ["Ficción", "Romance"],
        "reserved": true
    },
    {
        "name": "Ficciones",
        "author": "Jorge Luis Borges",
        "genre": ["Ficción", "Cuentos"],
        "reserved": true
    },
    {
        "name": "Los detectives salvajes",
        "author": "Roberto Bolaño",
        "genre": ["Ficción", "Novela"],
        "reserved": false
    },
    {
        "name": "La guerra y la paz",
        "author": "León Tolstói",
        "genre": ["Clásico", "Historia"],
        "reserved": false
    },
    {
        "name": "Crimen y castigo",
        "author": "Fyodor Dostoevsky",
        "genre": ["Clásico", "Suspense"],
        "reserved": false
    },
    {
        "name": "Cien años de soledad",
        "author": "Gabriel García Márquez",
        "genre": ["Ficción", "Realismo mágico"],
        "reserved": true
    },
    {
        "name": "El amor en los tiempos del cólera",
        "author": "Gabriel García Márquez",
        "genre": ["Ficción", "Romance"],
        "reserved": true
    },
    {
        "name": "Rayuela",
        "author": "Julio Cortázar",
        "genre": ["Ficción", "Experimental"],
        "reserved": false
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Miguel de Cervantes",
        "genre": ["Clásico", "Aventuras"],
        "reserved": true
    },
    {
        "name": "La sombra del viento",
        "author": "Carlos Ruiz Zafón",
        "genre": ["Ficción", "Misterio"],
        "reserved": false
    }
]
```


## Repository Structure

The repository is structured as follows:

```
.
├── assets/                     # Development assets
├── images/                     # Images used in the present document
├── source/                     # Source code
│   ├── database/               # Books databse    
│   ├── controllers/            # Application behavior    
│   ├── models/                 # Model definition 
│   └── routes/                 # Route definition
└── README.md                   # Present document
```

For more information see [ExpressJS Project Structure](https://dev.to/brianemilius/expressjs-project-structure-2ka4).

## Environment variables

The app uses the following environment variables:

- `PORT`: port the app will run on. Default: `8080`.
