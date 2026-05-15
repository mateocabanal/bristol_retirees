import fs from "fs/promises";

import path from "path";
import imageSize from "image-size";
import ExifReader from 'exifreader';

const gm = require('gm').subClass({ imageMagick: '7+' });

const IMAGES_DIR = path.join(process.cwd(), "docs/History/");

function getImageDimensions(longSide, aspectRatio) {
    let widthRatio, heightRatio;

    // Normalize aspect ratio input
    if (typeof aspectRatio === "string") {
        [widthRatio, heightRatio] = aspectRatio.split(":").map(Number);
    } else if (Array.isArray(aspectRatio)) {
        [widthRatio, heightRatio] = aspectRatio;
    } else {
        throw new Error("Aspect ratio must be a string ('16:9') or array ([16, 9])");
    }

    if (!widthRatio || !heightRatio) {
        throw new Error("Invalid aspect ratio values");
    }

    // Determine orientation
    const isLandscape = widthRatio >= heightRatio;

    let width, height;

    if (isLandscape) {
        width = longSide;
        height = Math.round(longSide * (heightRatio / widthRatio));
    } else {
        height = longSide;
        width = Math.round(longSide * (widthRatio / heightRatio));
    }

    return { width, height };
}

function getAspectRatio(width, height) {
    if (!width || !height) {
        throw new Error("Width and height must be positive numbers");
    }

    // Greatest Common Divisor (Euclidean algorithm)
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const divisor = gcd(width, height);

    return {
        ratio: `${width / divisor}:${height / divisor}`,
        widthRatio: width / divisor,
        heightRatio: height / divisor,
        orientation:
            width > height ? "landscape" :
                height > width ? "portrait" :
                    "square"
    };
}


async function generateBlurDataURL(file) {
    const filePath = path.join(IMAGES_DIR, file);
    const buffer = await fs.readFile(filePath);

    const dimensions = imageSize(buffer);
    const aspectRatio = getAspectRatio(dimensions.width, dimensions.height);

    const dimensions320 = getImageDimensions(320, aspectRatio.ratio);
    const dimensions480 = getImageDimensions(480, aspectRatio.ratio);
    const dimensions640 = getImageDimensions(640, aspectRatio.ratio);
    const dimensions960 = getImageDimensions(960, aspectRatio.ratio);
    const dimensions1280 = getImageDimensions(1280, aspectRatio.ratio);
    const dimensions1920 = getImageDimensions(1920, aspectRatio.ratio);

    const tags = await ExifReader.load(buffer, { async: true });

    const lensModel = tags.LensModel?.description ?? "Unknown Lens";

    return {
        src: `/${file}`,
        srcSet: [
            {
                src: `/320/${file}`,
                width: dimensions320.width,
                height: dimensions320.height,
            },
            {
                src: `/480/${file}`,
                width: dimensions480.width,
                height: dimensions480.height,
            },
            {
                src: `/640/${file}`,
                width: dimensions640.width,
                height: dimensions640.height,
            },
            {
                src: `/960/${file}`,
                width: dimensions960.width,
                height: dimensions960.height,
            },
            {
                src: `/1280/${file}`,
                width: dimensions1280.width,
                height: dimensions1280.height,
            },
            {
                src: `/1920/${file}`,
                width: dimensions1920.width,
                height: dimensions1920.height,
            },
            // OG in set
            {
                src: `/${file}`,
                width: dimensions.width,
                height: dimensions.height,
            }
        ],
        fullSrc: `/${file}`,
        width: dimensions.width,
        height: dimensions.height,
        focalLength: tags.FocalLength?.description,
        shutterSpeed: tags.ShutterSpeedValue?.description,
        iso: tags.ISOSpeedRatings?.description,
        model: tags.Model?.description,
        aperature: tags.ApertureValue?.description
    }
}

async function createGalleryVersion(file) {
    try {
        await fs.access("public/320/" + file, fs.constants.F_OK);
    } catch {
        console.log(file + " does not have a 320px version");
        gm(IMAGES_DIR + file).resize(320, 320, '>').write("public/320/" + file, (err) => console.error(err));
    }

    try {
        await fs.access("public/480/" + file, fs.constants.F_OK);
    } catch {
        console.log(file + " does not have a 480px version");
        gm(IMAGES_DIR + file).resize(480, 480, '>').write("public/480/" + file, (err) => console.error(err));
    }

    try {
        await fs.access("public/640/" + file, fs.constants.F_OK);
    } catch {
        console.log(file + " does not have a 640px version");
        gm(IMAGES_DIR + file).resize(640, 640, '>').write("public/640/" + file, (err) => console.error(err));
    }

    try {
        await fs.access("public/960/" + file, fs.constants.F_OK)
    } catch {
        console.log(file + " does not have a 960px version");
        gm(IMAGES_DIR + file).resize(960, 960, '>').write("public/960/" + file, (err) => console.error(err));
    }

    try {
        await fs.access("public/1280/" + file, fs.constants.F_OK)
    } catch {
        console.log(file + " does not have a 1280px version");
        gm(IMAGES_DIR + file).resize(1280, 1280, '>').write("public/1280/" + file, (err) => console.error(err));
    }

    try {
        await fs.access("public/1920/" + file, fs.constants.F_OK)
    } catch {
        console.log(file + " does not have a 1920px version");
        gm(IMAGES_DIR + file).resize(1920, 1920, '>').write("public/1920/" + file, (err) => console.error(err));
    }

    try {
        await fs.access("public/" + file, fs.constants.F_OK)
    } catch {
        console.log(file + " does not have a full size version");
        gm(IMAGES_DIR + file).strip().write("public/" + file, (err) => console.error(err));
    }
}

async function main() {
    const files = await (async () => {
        let files = (await fs.readdir(IMAGES_DIR))
            .map(async (fileName) => ({
                name: fileName,
                time: (await fs.stat(`${IMAGES_DIR}/${fileName}`)).mtime.getTime()
            }))

        files = await Promise.all(files);
        return files
            .sort((a, b) => b.time - a.time)
            .map(file => file.name)
    })();

    const results = [];
    for (const f of files) {
        if (!f.match(/\.(jpe?g|png|webp|avif)$/i)) continue;

        createGalleryVersion(f);
        results.push(await generateBlurDataURL(f));
    }

    await fs.writeFile("src/lib/metadata.json", JSON.stringify(results, null, 2));
    console.log("✨ blurPlaceholders.json generated!");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
