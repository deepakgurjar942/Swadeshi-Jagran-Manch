const express = require('express');
const router = express.Router();

const popularNewsData = [
    {
        id: 'pn1',
        title: 'Top 5 Eco-Friendly Innovations of the Year',
        img: 'https://via.placeholder.com/150x150?text=PopEnvNews1',
        date: 'September 1, 2025',
    },
    {
        id: 'pn2',
        title: 'Why STEM Education is Crucial for the Future',
        img: 'https://via.placeholder.com/150x150?text=PopEduNews1',
        date: 'September 1, 2025',
    },
    {
        id: 'pn3',
        title: 'Guide to Starting a Home Garden',
        img: 'https://via.placeholder.com/150x150?text=PopEnvNews2',
        date: 'August 25, 2025',
    },
    // Add more popular news items here
];

router.get('/', (req, res) => {
    res.json(popularNewsData);
});

module.exports = router;