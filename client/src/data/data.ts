export type Book = {
    id: number;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    yearOfPublish: number;
    description: string;
    image: string;
};

export const books: Book[] = [
    {
        id: 1,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        genre: "Programming",
        isbn: "746378634767",
        yearOfPublish: 2014,
        description:
            "An insightful book diving into JavaScript's core mechanics and concepts, helping developers deeply understand the language.",
        image: "https://m.media-amazon.com/images/I/71mKvD89oEL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Programming",
        isbn: "9780132350884",
        yearOfPublish: 2008,
        description:
            "A handbook of agile software craftsmanship that guides you on how to write clean and maintainable code.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX258_BO1,204,203,200_.jpg",
    },
    {
        id: 3,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        genre: "Programming",
        isbn: "9781593279509",
        yearOfPublish: 2018,
        description:
            "A modern introduction to programming, teaching the essentials of JavaScript and beyond.",
        image: "https://eloquentjavascript.net/img/cover.jpg",
    },
    {
        id: 4,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt, David Thomas",
        genre: "Software Development",
        isbn: "9780201616224",
        yearOfPublish: 1999,
        description:
            "A must-read for programmers, offering practical advice and core principles for becoming a better developer.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX380_BO1,204,203,200_.jpg",
    },
    {
        id: 5,
        title: "Design Patterns",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        genre: "Software Design",
        isbn: "9780201633610",
        yearOfPublish: 1994,
        description:
            "A classic book cataloging solutions to common design problems in object-oriented software development.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg",
    },
    {
        id: 6,
        title: "Refactoring",
        author: "Martin Fowler",
        genre: "Software Development",
        isbn: "9780134757599",
        yearOfPublish: 1999,
        description:
            "A comprehensive guide to improving the design of existing code without changing its functionality.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51kL68IuOQL._SX258_BO1,204,203,200_.jpg",
    },
    {
        id: 7,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        genre: "Programming",
        isbn: "9780596517748",
        yearOfPublish: 2008,
        description:
            "Explores the best and most effective parts of JavaScript, showing how to use the language efficiently.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    },
    {
        id: 8,
        title: "Head First Design Patterns",
        author: "Eric Freeman, Elisabeth Robson",
        genre: "Software Design",
        isbn: "9780596007126",
        yearOfPublish: 2004,
        description:
            "A visually rich guide to learning design patterns, making it easier to grasp complex concepts.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81ZfHq2jD-L.jpg",
    },
    {
        id: 9,
        title: "The Art of Computer Programming",
        author: "Donald Knuth",
        genre: "Computer Science",
        isbn: "9780201896831",
        yearOfPublish: 1968,
        description:
            "A comprehensive and authoritative book series on algorithms and programming techniques.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51ztyP4g8xL.jpg",
    },
    {
        id: 10,
        title: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        genre: "Career Development",
        isbn: "9780984782857",
        yearOfPublish: 2015,
        description:
            "A guide to acing coding interviews, featuring 189 programming questions and solutions.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71vQtH8tK8L.jpg",
    },
];
