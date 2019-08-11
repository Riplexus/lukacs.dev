module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    },
    pwa: {
        themeColor: '#161b20',
        msTileColor: '#161b20'
    }
};
