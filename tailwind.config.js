/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'index.html',
        'test.html'
    ],
    theme: {
        extend: {
            colors: {
                'fushia': '#AD005E',
                'dark-fushia': '#73003f',
                'vert': '#629D00',
                'bleu': '#14A8C6',
                'dark-bleu': '#0D7084'
            },
            fontFamily: {
                'mediametrie': ['Mediametrie', 'sans-serif'],
            },
            screens: {
                'lg': '1250px',
                'md': '990px'
            },
            backgroundImage: {
                'hero': "url('img/background.png')",
                'hero-mobile': "url('img/background-mobile.png')"
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(-10px)', opacity: '0'},
                    '100%': { transform: 'translateX(0px)' , opacity: '1'}
                },
                appear: {
                    '0%': { opacity: '0'},
                    '100%': { opacity: '1'}
                },
            },
            animation: {
                'slide-left': 'slide 1.5s linear',
                'appear': 'appear 1.5s linear',
            },

        },
    },
    plugins: [],
}
