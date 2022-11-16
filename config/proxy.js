module.exports = {
    '^/image': {
        target: 'http://api.ixiaowai.cn/',
        changeOrigin: true,
        pathRewrite: {
            '^/image': ''
        }
    }
}
