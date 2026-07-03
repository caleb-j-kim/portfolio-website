//npm run build, cp -r out/* docs/, git add docs, git commit -m "Update docs Version 1.0", git push origin main

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig