import React from 'react';
import Stories from './components/Stories';

const App = () => {
  return (
    <div className='max-w-2xl mx-auto p-8'>
      <h2 className='sm:text-3xl sm:leading-snug font-semibold tracking-wide text-yellow-800 mb-6'>
        Tailwind Stories
      </h2>
      <Stories />
    </div>
  );
};

export default App;
