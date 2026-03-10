module.exports = {
    production: process.env.NODE_ENV === 'production' || process.env.BRANCH === 'main',
};