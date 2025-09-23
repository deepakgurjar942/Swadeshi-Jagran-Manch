const express = require('express');
const router = express.Router();

// Mock data for the press releases page
const pressArticles = [
    {
        id: 'pa1',
        title: 'Swadeshi Jagran Manch Urges Focus on Rural Economy',
        description: 'An official statement on the importance of strengthening rural and agricultural sectors for national growth.',
        image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Press+Release+1',
        date: 'October 1, 2025',
    },
    {
        id: 'pa2',
        title: 'New Policy on Small Businesses Welcomed by SJM',
        description: 'A press release highlighting the positive impact of new government policies on small and medium enterprises.',
        image: 'https://via.placeholder.com/600x400/C70039/FFFFFF?text=Press+Release+2',
        date: 'September 28, 2025',
    },
    {
        id: 'pa3',
        title: 'SJM to Host National Seminar on Technological Sovereignty',
        description: 'Details about an upcoming seminar on promoting indigenous technology and innovation.',
        image: 'https://via.placeholder.com/600x400/900C3F/FFFFFF?text=Seminar+News',
        date: 'September 25, 2025',
    },
    {
        id: 'pa4',
        title: 'SJM Statement on Renewable Energy Initiatives',
        description: 'Official comments on recent government steps to boost solar and wind energy projects across the country.',
        image: 'https://via.placeholder.com/600x400/581845/FFFFFF?text=Energy+Statement',
        date: 'September 22, 2025',
    },
    {
        id: 'pa5',
        title: 'Memorandum Submitted on Foreign Direct Investment',
        description: 'A release detailing the recommendations submitted to the government regarding foreign investment policies.',
        image: 'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=FDI+Memorandum',
        date: 'September 20, 2025',
    },
    {
        id: 'pa6',
        title: 'Campaign for Local Products Gains Momentum',
        description: 'An update on a nationwide campaign encouraging consumers to choose locally-made goods.',
        image: 'https://via.placeholder.com/600x400/228B22/FFFFFF?text=Local+Products',
        date: 'September 18, 2025',
    },
];

router.get('/', (req, res) => {
    res.json(pressArticles);
});

module.exports = router;