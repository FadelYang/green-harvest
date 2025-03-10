import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  await imagemin(["public/img/*.{jpg,png}"], {
    destination: "public/img/optimized",
    plugins: [
      imageminWebp({ quality: 75 }), // Convert to WebP
      imageminMozjpeg({ quality: 75 }), // Optimize JPEGs
      imageminPngquant({ quality: [0.6, 0.8] }) // Optimize PNGs
    ]
  });

  console.log("✅ Images optimized successfully (SVGs skipped)!");
})();
