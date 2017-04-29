const Router = require('koa-router');
const router = new Router();
const statusController = require('../controllers/status.controller');
const torrentsController = require('../controllers/torrents.controller');
const imdbController = require('../controllers/imdb.controller');
const graphqlController = require('../controllers/graphql.controller');
const graphqlDocsController = require('../controllers/graphql.docs.controller');

router.get('/status', statusController.getStatus);
router.get('/torrents', torrentsController.search);
router.get('/details', imdbController.search);
router.get('/details/:id', imdbController.searchById);
router.post('/graphql', graphqlController.handler());
router.get('/graphql', graphqlDocsController.handler());

module.exports = router.routes();
