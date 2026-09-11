export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#FF6B00',
                    pink: '#EA088C',
                    violet: '#903AFF',
                }
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, #FF6B00 0%, #EA088C 50%, #903AFF 100%)',
                'brand-gradient-hover': 'linear-gradient(135deg, #FF7B1C 0%, #F51B9B 50%, #9D4FFF 100%)',
            }
        },
    },
    plugins: [],
}