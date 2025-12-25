
import fs from 'fs';
import path from 'path';

const mappings = {
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/home_hero_1766596548940.png': 'home-hero.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/vip_hero_1766596576668.png': 'vip-hero.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/cocktail_neon_demon_1766596595288.png': 'cocktail-neon-demon.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/cocktail_midnight_sour_1766596610648.png': 'cocktail-midnight-sour.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/cocktail_velvet_rope_1766596638487.png': 'cocktail-velvet-rope.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/event_neon_nights_1766596655365.png': 'event-neon-nights.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/event_saturday_social_1766596673693.png': 'event-saturday-social.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/event_urban_jungle_1766596702053.png': 'event-urban-jungle.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/event_default_1766596718253.png': 'event-default.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/gallery_1_1766596734722.png': 'gallery-1.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/gallery_2_1766596762083.png': 'gallery-2.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/gallery_3_1766596806606.png': 'gallery-3.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/gallery_4_1766596777887.png': 'gallery-4.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/gallery_5_1766596845246.png': 'gallery-5.png',
    'C:/Users/Stefano/.gemini/antigravity/brain/088fd0a6-497b-4f36-88e3-c9f1fd82e932/og_image_1766596863440.png': 'og-image.png'
};

const destDir = 'src/assets/images';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

for (const [src, dest] of Object.entries(mappings)) {
    const destPath = path.join(destDir, dest);
    try {
        fs.copyFileSync(src, destPath);
        console.log(`Copied ${src} to ${destPath}`);
    } catch (err) {
        console.error(`Error copying ${src}: ${err.message}`);
    }
}
