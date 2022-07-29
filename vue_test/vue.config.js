module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, // 關閉語法檢查 (eslint)
    // 開啟代理服務器
    devServer: {
        proxy: 'http://localhost:5000'
    }
}