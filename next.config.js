/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV;

const nextConfig = {
  basePath: isProduction ? 'nowlistening-webpage' : '',
  assetPrefix: isProduction ? '/nowlistening-webpage/' : '',
  out: 'export',
  distDir: 'dist'
};

module.exports = nextConfig
