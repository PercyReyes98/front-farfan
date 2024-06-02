/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container : {
                center : true,
            },
            colors : {
                primary : "#CD0D00",
                secondary : "#FFCF5D",
                chart : "#FE6449"
            }
        },
    },
    plugins: [],
}
