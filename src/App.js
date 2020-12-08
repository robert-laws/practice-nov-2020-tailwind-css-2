import React from 'react';
import Stories from './components/Stories';
import Transitions from './components/Transitions';

const App = () => {
  return (
    <div className='max-w-2xl mx-auto p-8'>
      <h2 className='sm:text-3xl sm:leading-snug font-semibold tracking-wide text-yellow-800 mb-6'>
        Tailwind Stories
      </h2>
      <Stories />
      <hr />
      <Transitions />
    </div>
  );
};

export default App;
