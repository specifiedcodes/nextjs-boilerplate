// next-seo.config.ts
const defaultSEOConfig = {
    title: 'My App', // You can use a placeholder like '__PROJECT_NAME__' if needed
    description: 'A production-ready Next.js template',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.example.com/', // Replace with your site URL
      site_name: 'My App', // Replace or use a placeholder if desired
    },
    twitter: {
      handle: '@handle', // Replace with your Twitter handle
      site: '@site',
      cardType: 'summary_large_image',
    },
  };
  
  export default defaultSEOConfig;