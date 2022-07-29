module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, // 關閉語法檢查 (eslint)
    // 開啟代理服務器(方式一)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    // 開啟代理服務器(方式二)
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/api': ''},
                ws: true, // 用於支持websocket
                changeOrigin: true // 用於控制請求頭中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/demo': ''},
                ws: true, // 用於支持websocket
                changeOrigin: true // 用於控制請求頭中的host值
            }
        }
    }
}