const express = require('express');
const router = express.Router();

// Import individual route files for other data types
const articlesRouter = require('./articles');
const recentNewsRouter = require('./recentNews');
const popularNewsRouter = require('./popularNews');
const resourcesRouter = require('./resources');

// Import individual route files for each category
const educationRouter = require('./categoryRoutes/education');
const environmentRouter = require('./categoryRoutes/environment');
const gmFoodRouter = require('./categoryRoutes/gmFood');
const nationalEventsRouter = require('./categoryRoutes/nationalEvents');
const movementsRouter = require('./categoryRoutes/movements');
const touristGuideRouter = require('./categoryRoutes/touristGuide');
const covidGuideRouter = require('./categoryRoutes/covidGuide');
const pressReleasesRouter = require('./categoryRoutes/pressReleases');

// Mount the non-category routers to their paths
router.use('/articles', articlesRouter);
router.use('/recentNews', recentNewsRouter);
router.use('/popularNews', popularNewsRouter);
router.use('/resources', resourcesRouter);

// Mount the individual category routers to their specific paths
router.use('/categories/education', educationRouter);
router.use('/categories/environment', environmentRouter);
router.use('/categories/gm-food', gmFoodRouter);
router.use('/categories/national-events', nationalEventsRouter);
router.use('/categories/movements', movementsRouter);
router.use('/categories/tourist-guide', touristGuideRouter);
router.use('/categories/covid-guide', covidGuideRouter);
router.use('/categories/press-releases', pressReleasesRouter);

module.exports = router;