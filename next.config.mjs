/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD,
        RECIVING_MAIL: process.env.RECIVING_MAIL
      }
};

export default nextConfig;
