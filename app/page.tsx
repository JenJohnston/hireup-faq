import React from 'react';
import Link from 'next/link'; // Import Next.js Link component
import { shapes } from './utils/shapes';
import Grid from './components/Grid';

const Home: React.FC = () => {
  return (
    <Grid
      title="Jennifer Johnston"
      blobs={[
        {
          pathData: shapes.shape1,
          width: '600px',
          height: '600px',
          className: 'opacity-60 col-start-1 row-start-1',
        },
        {
          pathData: shapes.shape6,
          width: '600px',
          height: '600px',
          className: 'opacity-60 col-start-3 row-start-2',
        },
        // Add more blobs as needed
      ]}
    >
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
        Full Stack Developer | Tech Enthusiast | Problem Solver
      </p>
      <Link href="/faq" className="bg-purple-400 text-white py-4 px-6 rounded-xl hover:bg-purple-500 transition text-sm sm:text-base md:text-lg lg:text-xl shadow-lg">
          Explore My Tech Journey
      </Link>
    </Grid>
  );
};

export default Home;