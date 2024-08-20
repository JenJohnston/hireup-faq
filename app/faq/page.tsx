import React from 'react';
import Link from 'next/link';
import Grid from '../components/Grid';
import { faqData } from '../utils/faqData';
import Accordion from '../components/Accordion';
import { shapes } from '../utils/shapes';
import SearchBar from '../components/SearchBar';

const FAQPage: React.FC = () => {
  return (
    <Grid
      title="FAQ Page"
      blobs={[
        {
          pathData: shapes.shape6,
          width: '600px',
          height: '600px',
          className: 'opacity-60 col-start-1 row-start-1',
        },
        {
            pathData: shapes.shape1,
            width: '600px',
            height: '600px',
            className: 'opacity-60 col-start-3 row-start-1',
          },
        {
          pathData: shapes.shape7,
          width: '600px',
          height: '600px',
          className: 'opacity-60 col-start-2 row-start-2',
        },
        // Add more blobs as needed
      ]}
    >
      <div className="flex flex-col items-center space-y-8 max-w-3xl mx-auto">
        <SearchBar faqData={faqData} />
        <Link href="/" className="bg-purple-400 text-white py-4 px-6 rounded-xl hover:bg-purple-500 transition text-sm sm:text-base md:text-lg lg:text-xl shadow-lg">
          Back Home
        </Link>
      </div>
      
    </Grid>
  );
};

export default FAQPage;