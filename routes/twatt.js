const express = require('express');
const router = express.Router();
const twattController = require('../controllers/TwattController')

router.get('/usertimeline', twattController.getUserTimeline)
router.get('/hometimeline', twattController.getHomeTimeline)
router.get('/searchtweet', twattController.searchTweets)
router.post('/updatestatus', twattController.updateStatus)


module.exports = router;