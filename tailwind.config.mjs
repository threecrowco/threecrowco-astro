/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            padding: {
                edge: "calc(50/19.2 * 1vw)"
            },
            aspectRatio: {
                poster: "11 / 17",
                marquee: "27 / 41",
                widescreen: "21 / 9"
            }
        }
    },
    plugins: []
};
