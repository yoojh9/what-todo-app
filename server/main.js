import express from 'express';
import morgan from 'morgan';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import user from './routes/user';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const devPort = 3001;

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    return res.send('Can you hear me?');
});

app.use('/user', user);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
