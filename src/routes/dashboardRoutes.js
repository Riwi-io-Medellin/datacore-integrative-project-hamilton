'use strict';

const { Router } = require('express');
const DashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.use(authMiddleware);

// GET /api/dashboard
router.get('/', DashboardController.global);

// GET /api/dashboard/campuses/:sedeId
router.get('/campuses/:sedeId', DashboardController.cohortsByCampus);

// GET /api/dashboard/cohorts/:cohortId
router.get('/cohorts/:cohortId', DashboardController.clansByCohort);

// GET /api/dashboard/clans/:clanId
router.get('/clans/:clanId', DashboardController.clanDetail);

module.exports = router;
