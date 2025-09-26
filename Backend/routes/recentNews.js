const express = require('express');
const router = express.Router();

const recentNewsData = [
    {
        id: 'rn1',
        img: 'https://via.placeholder.com/150x150?text=EnvNews1',
        title: 'New National Park Established to Protect Endangered Species',
        date: 'September 20, 2025',
    },
    {
        id: 'rn2',
        img: 'https://via.placeholder.com/150x150?text=EduNews1',
        title: 'New Policy on Online Education Announced',
        date: 'September 10, 2025',
    },
    // Add more recent news items here
];

router.get('/', (req, res) => {
    res.json(recentNewsData);
});

module.exports = router;