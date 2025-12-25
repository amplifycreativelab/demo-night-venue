import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: "https://amplifycreativelab.github.io",
    base: "/Night-Venue",
    vite: {
        plugins: [tailwindcss()]
    }
});
