// pages/Home.js

import Home from '@/app/Home/page';

export const getServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'] || ''; // Retrieve user-agent from request headers
  return { props: { userAgent } };
};

export default function HomePage({ userAgent }) {
  return <Home userAgent={userAgent} />;
}
