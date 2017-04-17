const Router = require('koa-router');
const router = new Router();
const statusController = require('../controllers/status.controller');
const torrentsController = require('../controllers/torrents.controller');
const imdbController = require('../controllers/imdb.controller');

router.get('/status', statusController.getStatus);
router.get('/torrents', torrentsController.search);
router.get('/details', imdbController.search);
router.get('/details/:id', imdbController.searchById);

module.exports = router.routes();
