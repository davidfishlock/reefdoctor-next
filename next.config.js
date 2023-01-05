/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  publicExcludes: ['!images/species/**/*']
})

module.exports = withPWA({
  reactStrictMode: true,
})