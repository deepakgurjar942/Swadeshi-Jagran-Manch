const express = require('express');
const router = express.Router();

// Mock data for the Resources page
const resources = [
    {
        id: 1,
        title: 'Swadeshi-Videshi Products List',
        description: 'A comprehensive list of products to help you choose Swadeshi over foreign brands.',
        image: 'https://via.placeholder.com/600x400/8A2BE2/FFFFFF?text=Swadeshi+List',
        date: 'October 1, 2025'
    },
    {
        id: 2,
        title: 'Latest Swadeshi Patrika Edition',
        description: 'Download the latest issue of our magazine featuring articles on national development.',
        image: 'https://via.placeholder.com/600x400/4B0082/FFFFFF?text=Magazine',
        date: 'September 25, 2025'
    },
    {
        id: 3,
        title: 'Video Guide to Rural Employment Schemes',
        description: 'A video guide explaining government schemes to boost employment in rural areas.',
        image: 'https://via.placeholder.com/600x400/FFD700/000000?text=Video+Guide',
        date: 'September 20, 2025'
    },
];

// Endpoint to get all resources
router.get('/', (req, res) => {
    res.json(resources);
});

module.exports = router;