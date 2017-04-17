require('./src/globals');
const app = require('./src/app');

app.listen(g.config.port);

g.logger.info(`'${g.config.appName}' is running on port: ${g.config.port}`);
