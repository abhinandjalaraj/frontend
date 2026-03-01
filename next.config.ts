import type { NextConfig } from "next";

const nextConfig: NextConfig = {

images: {
  remotePatterns:[
    {
      protocol:'http',
      hostname:'**',
      pathname:'**',
    },
  ],
   
    domains: ["firstecommercebackend.onrender.com"],
  },
};



export default nextConfig;
