//npm run build, cp -r out/* docs/, git add docs, git commit -m "Update docs Version 1.0", git push origin main

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;