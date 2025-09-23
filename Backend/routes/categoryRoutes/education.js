const express = require('express');
const router = express.Router();

// Mock data for the Education category
const educationContent = {
    categoryDetails: {
        id: '1',
        name: 'Education',
        description: 'Explore articles and resources on the latest trends in education, learning, and skill development.',
    },
    educationalArticles: [
        {
            id: 'edu1',
            title: 'The Future of Learning: Technology in Classrooms',
            description: 'A deep dive into how AI and digital tools are transforming educational methods.',
            image: 'https://via.placeholder.com/600x400/87CEEB/000000?text=Education+Article+1',
            date: 'September 1, 2025',
        },
        {
            id: 'edu2',
            title: 'Why STEM Education is Crucial for the Future',
            description: 'An analysis of the importance of Science, Technology, Engineering, and Mathematics in modern curriculums.',
            image: 'https://via.placeholder.com/600x400/ADD8E6/000000?text=STEM+Article+2',
            date: 'August 28, 2025',
        },
        {
            id: 'edu3',
            title: 'Financial Literacy for Students: A Beginner\'s Guide',
            description: 'Teaching young people the basics of managing money, saving, and investing.',
            image: 'https://via.placeholder.com/600x400/90EE90/000000?text=Financial+Literacy+3',
            date: 'August 25, 2025',
        },
    ],
    recentNews: [
        {
            img: 'https://via.placeholder.com/150x150?text=EduNews1',
            title: 'New Policy on Online Education Announced',
            date: 'September 10, 2025',
        },
        {
            img: 'https://via.placeholder.com/150x150?text=EduNews2',
            title: 'Universities to Adopt AI-Powered Grading',
            date: 'September 9, 2025',
        },
    ],
    popularNews: [
        {
            img: 'https://via.placeholder.com/150x150?text=PopEduNews1',
            title: 'Top 10 Learning Apps of the Year',
            date: 'September 5, 2025',
        },
        {
            img: 'https://via.placeholder.com/150x150?text=PopEduNews2',
            title: 'How to Choose the Right Career Path',
            date: 'September 1, 2025',
        },
    ],
    resources: {
        swadeshiList: {
            title: "स्वदेशी-विदेशी प्रोडक्ट्स लिस्ट",
            image: "https://via.placeholder.com/400x200/F08080/000000?text=Swadeshi+Products",
            link: "https://example.com/swadeshi-products.pdf",
        },
        latestPrint: {
            title: "Latest Educational Edition",
            image: "https://via.placeholder.com/400x200/FFB6C1/000000?text=Latest+Print",
            link: "https://example.com/latest-print-magazine.pdf",
        },
    },
};

// Define the API endpoint for all education content
router.get('/', (req, res) => {
    res.json(educationContent);
});

// Define separate endpoints for specific sections (optional, but good practice)
router.get('/articles', (req, res) => {
    res.json(educationContent.educationalArticles);
});

router.get('/recentNews', (req, res) => {
    res.json(educationContent.recentNews);
});

router.get('/popularNews', (req, res) => {
    res.json(educationContent.popularNews);
});

router.get('/resources', (req, res) => {
    res.json(educationContent.resources);
});

module.exports = router;