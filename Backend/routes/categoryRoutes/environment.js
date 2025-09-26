const express = require('express');
const router = express.Router();

// Mock data for the Environment category
const environmentContent = {
    categoryDetails: {
        id: '2',
        name: 'Environment',
        description: 'Discover the latest articles, news, and guides on environmental protection, sustainability, and green initiatives.',
    },
    environmentalArticles: [
        {
            id: 'env1',
            title: 'The Impact of Deforestation on Local Ecosystems',
            description: 'An in-depth look at how habitat loss affects biodiversity and climate.',
            image: 'https://via.placeholder.com/600x400/228B22/FFFFFF?text=Environment+Article+1',
            date: 'September 15, 2025',
        },
        {
            id: 'env2',
            title: 'Renewable Energy: The Path to a Sustainable Future',
            description: 'Exploring the benefits and challenges of transitioning to solar and wind power.',
            image: 'https://via.placeholder.com/600x400/50C878/000000?text=Renewable+Energy+2',
            date: 'September 12, 2025',
        },
        {
            id: 'env3',
            title: 'Recycling 101: Simple Steps to Make a Big Difference',
            description: 'A practical guide for households to improve their recycling habits.',
            image: 'https://via.placeholder.com/600x400/98FB98/000000?text=Recycling+Tips+3',
            date: 'September 8, 2025',
        },
    ],
    featuredEducationalContent: {
        title: "Understanding Sustainable Agriculture",
        description: "A video series on farming methods that protect the environment.",
        videoUrl: "https://www.youtube.com/embed/your-video-id", // Replace with an actual video URL
        isComingSoon: true,
    },
    resources: {
        swadeshiList: {
            title: "स्वदेशी-विदेशी प्रोडक्ट्स लिस्ट (Environment Focus)",
            image: "https://www.swadeshionline.in/assets/images/comodity.jpg",
            link: "https://www.swadeshionline.in/assets/pdf/swadeshi-videshi_products.pdf",
        },
        latestPrint: {
            title: "Latest Environment Edition Magazine",
            image: "https://www.swadeshionline.in/assets/uploads/thumb-22-07-2025-465.jpg",
            link: "https://www.swadeshionline.in/assets/uploads/magazine-22-07-2025-465.pdf",
        },
    },
    recentNews: [
        {
            img: 'https://via.placeholder.com/150x150?text=EnvNews1',
            title: 'New National Park Established to Protect Endangered Species',
            date: 'September 20, 2025',
        },
        {
            img: 'https://via.placeholder.com/150x150?text=EnvNews2',
            title: 'Global Leaders Sign New Climate Accord',
            date: 'September 19, 2025',
        },
        {
            img: 'https://via.placeholder.com/150x150?text=EnvNews3',
            title: 'Community Initiative for River Cleanup Launched',
            date: 'September 18, 2025',
        },
    ],
    popularNews: [
        {
            img: 'https://via.placeholder.com/150x150?text=PopEnvNews1',
            title: 'Top 5 Eco-Friendly Innovations of the Year',
            date: 'September 1, 2025',
        },
        {
            img: 'https://via.placeholder.com/150x150?text=PopEnvNews2',
            title: 'Why Sustainable Fashion is Gaining Popularity',
            date: 'August 28, 2025',
        },
        {
            img: 'https://via.placeholder.com/150x150?text=PopEnvNews3',
            title: 'Guide to Starting a Home Garden',
            date: 'August 25, 2025',
        },
    ],
};

// Main endpoint to get all environment data
router.get('/', (req, res) => {
    res.json(environmentContent);
});

// Optional: Specific endpoints for each section
router.get('/articles', (req, res) => {
    res.json(environmentContent.environmentalArticles);
});

router.get('/featured', (req, res) => {
    res.json(environmentContent.featuredEducationalContent);
});

router.get('/resources', (req, res) => {
    res.json(environmentContent.resources);
});

router.get('/recentNews', (req, res) => {
    res.json(environmentContent.recentNews);
});

router.get('/popularNews', (req, res) => {
    res.json(environmentContent.popularNews);
});

module.exports = router;