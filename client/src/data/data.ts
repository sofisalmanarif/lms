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
        id: 12,
        title: "The Lean Startup",
        author: "Eric Ries",
        genre: "Business",
        isbn: "9780307887894",
        yearOfPublish: 2011,
        description:
            "A guide for entrepreneurs to create successful startups through rapid experimentation and innovation.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
    {
        id: 8,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic Fiction",
        isbn: "9780316769488",
        yearOfPublish: 1951,
        description:
            "A story about teenage angst and rebellion, narrated by the cynical Holden Caulfield.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    },
    {
        id: 10,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        genre: "Self-Help",
        isbn: "9780062457714",
        yearOfPublish: 2016,
        description:
            "A counterintuitive approach to living a good life, focusing on accepting limitations and embracing values.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
    },
    {
        id: 5,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "History",
        isbn: "9780062316097",
        yearOfPublish: 2011,
        description:
            "A groundbreaking narrative exploring the history of humankind, from ancient times to the present.",
        image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    },
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
        id: 11,
        title: "Becoming",
        author: "Michelle Obama",
        genre: "Autobiography",
        isbn: "9781524763138",
        yearOfPublish: 2018,
        description:
            "A deeply personal and inspiring memoir by the former First Lady of the United States.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
    },
    {
        id: 6,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        isbn: "9780061120084",
        yearOfPublish: 1960,
        description:
            "A novel of warmth and humor that tackles serious issues such as racial injustice in the Deep South.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81Ox05xmK4L.jpg",
    },
    {
        id: 7,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Literature",
        isbn: "9780743273565",
        yearOfPublish: 1925,
        description:
            "A tragic story of love, ambition, and the American Dream set in the Jazz Age.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71rr2tQsm5L.jpg",
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
        id: 9,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "History",
        isbn: "9780062316097",
        yearOfPublish: 2011,
        description:
            "A groundbreaking narrative exploring the history of humankind, from ancient times to the present.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71X5WQ2aU4L.jpg",
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
];
