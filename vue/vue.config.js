module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    },
    pwa: {
        themeColor: '#121619',
        msTileColor: '#121619'
    }
};
