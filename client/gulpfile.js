const { watch, parallel } = require('gulp');
const bs = require('browser-sync');

function bs_html() {
    bs.init({
        server: {
            baseDir: '.',
        },
        browser: 'default',
        open: true
    })

    watch("./**/*.html").on('change', bs.reload);
    watch("./**/*.css").on('change', bs.reload);
}

exports.default = parallel(bs_html);