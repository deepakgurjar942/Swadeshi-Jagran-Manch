const express = require('express');
const router = express.Router();

// This is the mock data for your national event articles.
const nationalEvents = [
    {
        id: 1,
        title: 'India’s Space Program Achieves New Milestone',
        description: 'The national space agency successfully launched a new satellite...',
        image: 'https://via.placeholder.com/600x400/FF4500/FFFFFF?text=Space+Mission',
        date: 'September 21, 2025'
    },
    {
        id: 2,
        title: 'Monsoon Session of Parliament Concludes with Key Bills',
        description: 'Parliamentarians debated and passed several important legislations...',
        image: 'https://via.placeholder.com/600x400/B0C4DE/000000?text=Parliament+Session',
        date: 'September 18, 2025'
    },
    {
        id: 3,
        title: 'New Policy on Renewable Energy Receives Widespread Support',
        description: 'The government has unveiled a new framework aimed at boosting the renewable energy sector.',
        image: 'https://via.placeholder.com/600x400/32CD32/FFFFFF?text=Renewable+Energy',
        date: 'September 15, 2025'
    },
    {
        id: 4,
        title: 'Historic Restoration Project Completed at Red Fort',
        description: 'A multi-year effort to restore the iconic Red Fort to its original grandeur has been completed.',
        image: 'https://via.placeholder.com/600x400/800000/FFFFFF?text=Red+Fort',
        date: 'September 12, 2025'
    },
    {
        id: 5,
        title: 'Major Urban Infrastructure Development Plan Announced',
        description: 'A new plan to modernize city infrastructure is set to transform urban living.',
        image: 'https://via.placeholder.com/600x400/6A5ACD/FFFFFF?text=Urban+Development',
        date: 'September 10, 2025'
    },
    {
        id: 6,
        title: 'National Health Mission Extends Coverage to Rural Areas',
        description: 'The government’s flagship health program has been expanded to provide services to remote villages.',
        image: 'https://via.placeholder.com/600x400/FF6347/FFFFFF?text=Health+Mission',
        date: 'September 8, 2025'
    },
];

// This endpoint will return the full list of national events.
router.get('/', (req, res) => {
    res.json(nationalEvents);
});

module.exports = router;