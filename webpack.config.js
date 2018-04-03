var webpack = require('webpack');

// webpack의 기능: require 기능을 클라이언트 사이드에서도 사용하고 코드를 한 파일로 합침
// entry 파일부터 시작해서 require 한 파일을 순서대로 불러오고 필요한 모듈들을 다 불러옴

// exports: 이 객체를 모듈로 내보내겠다. 다른 코드에서 이 객체를 require 해서 불러 올 수 있음.
module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js' // 이렇게 합친 파일을 bundle.js로 저장한다라는 의미
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', // 로더를 통하여 es6와 react.js 형식을 일반 자바스크립트 형식으로 변환해줌
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
