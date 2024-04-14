import { Client } from '@elastic/elasticsearch';
import fs from 'fs';

const client = new Client({
    node: 'https://localhost:9200',
    auth: {
        // Books API key
        // apiKey: 'MDRndzNvNEJGOHVRUnBIdDNwQ3A6bHZpRm1oMXRTZ1dkV20yM1d1QVhJdw=='

        // Movies API key
        apiKey: 'MzRnNTNvNEJGOHVRUnBIdDZaRG86eHBrRkZISVhTQnFnT1dOcUMwaFV4Zw=='
    },
    tls: {
        ca: fs.readFileSync('http_ca.crt'),
        rejectUnauthorized: false
    }
});


// Sample data books
const movies = [
    {
        title: "The Quantum Cipher",
        director: "Ava Johnson",
        releaseYear: 2023,
        genre: "Sci-Fi"
    },
    {
        title: "Eternal Code",
        director: "Michael Chen",
        releaseYear: 2021,
        genre: "Action"
    },
    {
        title: "Midnight Mirage",
        director: "Emily Wilson",
        releaseYear: 2020,
        genre: "Thriller"
    },
    {
        title: "Neon Serenade",
        director: "Oliver Thompson",
        releaseYear: 2019,
        genre: "Drama"
    },
    {
        title: "Chrono Nexus",
        director: "Sophia Lee",
        releaseYear: 2022,
        genre: "Fantasy"
    },
    {
        title: "Echoes of Eternity",
        director: "Ethan Roberts",
        releaseYear: 2018,
        genre: "Mystery"
    },
    {
        title: "Astral Odyssey",
        director: "Isabella Adams",
        releaseYear: 2024,
        genre: "Adventure"
    },
    {
        title: "Rogue Algorithm",
        director: "Nathan Clark",
        releaseYear: 2023,
        genre: "Action"
    },
    {
        title: "Techno Tango",
        director: "Liam Baker",
        releaseYear: 2020,
        genre: "Comedy"
    },
    {
        title: "Digital Dreamscape",
        director: "Zoe Martinez",
        releaseYear: 2021,
        genre: "Sci-Fi"
    }
];

// Index with the bulk helper
// const result = await client.helpers.bulk({
//     datasource: movies,
//     pipeline: "ent-search-generic-ingestion",
//     onDocument: (doc) => ({ index: { _index: 'movies' } }),
// });

// console.log(result);


// // Let's search!
const searchResult = await client.search({
    index: 'movies',
    q: 'ava'
});

console.log(searchResult.hits.hits);