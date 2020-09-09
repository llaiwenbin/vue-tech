module.exports = {
    outputDir: 'dist',
    assetsDir: 'assets',
    runtimeCompiler: true, // 由于display组件需要预编译所以需要开启
    productionSourceMap: false,
    configureWebpack: {
        // webpack配置
    },
    chainWebpack() {
        //细粒度修改已配置的webpack参数
    },
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>',
                changeOrigin: true
            }
        }
    }
}