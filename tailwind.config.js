/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,jsx}', // Adjust this to your project structure
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary_color: '#FAA80A',
                secondary_color: '#000000',
                tertiary_color: '#17ACEA',
                quaternary_color: '#020033',
            },
            textColor: {
                primary_color: '#FAA80A',
                secondary_color: '#000000',
                tertiary_color: '#17ACEA',
                color_light: '#666666',
                quaternary_color: '#020033',
            },
            borderColor: {
                primary_color: '#FAA80A',
                secondary_color: '#000000',
                tertiary_color: '#17ACEA',
                color_light: '#666666',
            },
            boxShadow: {
                customShadow:
                    'rgba(0, 0, 0, 0.06) 0px -2px 5px, rgba(0, 0, 0, 0.06) 0px 2px 5px',
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                '5fr': 'repeat(5, minmax(0, 1fr))',
                '4fr': 'repeat(4, minmax(0, 1fr))',
            },
            screens: {
                menu: '1200px',
            },
        },
    },
    plugins: [],
}
