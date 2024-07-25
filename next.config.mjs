/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
          },  
          {
            protocol: 'https',
            hostname: 'originallyblackbucket.s3.eu-west-1.amazonaws.com',
            pathname: '**',
          },
        ],
      },
  }
  
  export default nextConfig