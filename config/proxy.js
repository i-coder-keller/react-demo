module.exports = {
    '/image': {
        target: 'https://api.ixiaowai.cn',
        changeOrigin: true,
        pathRewrite: {
            '^/image': ''
        }
    }
}
