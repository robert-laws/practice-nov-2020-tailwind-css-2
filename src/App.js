import React from 'react';

const App = () => {
  return (
    <main>
      <div className='w-auto h-60 p-10 m-10 border border-gray-800 rounded-md flex flex-row justify-evenly'>
        <div className='w-64 h-24 py-1 px-3 bg-emerald-600 rounded-md shadow-md relative'>
          <div className='w-4 h-4 bg-emerald-600 transform rotate-45 absolute -bottom-2 right-5'></div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit.
          </p>
        </div>

        <div className='w-64 h-24 py-1 px-3 bg-emerald-600 rounded-md shadow-md relative'>
          <div className='w-4 h-4 bg-emerald-600 transform rotate-45 absolute -bottom-2 left-5'></div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit.
          </p>
        </div>

        <div className='w-64 h-24 py-1 px-3 bg-emerald-600 rounded-md shadow-md relative'>
          <div className='w-4 h-4 bg-emerald-600 transform rotate-45 absolute bottom-5 -left-2'></div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit.
          </p>
        </div>

        <div className='w-64 h-24 py-1 px-3 bg-emerald-600 rounded-md shadow-md relative'>
          <div className='w-4 h-4 bg-emerald-600 transform rotate-45 absolute bottom-5 -right-2'></div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit.
          </p>
        </div>
      </div>
      <div className='w-auto h-96 p-10 m-10 border border-gray-800 rounded-md flex flex-row justify-evenly'>
        <div className='main-text w-96 h-56 p-3 border border-gray-400ccccc relative'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio at
          veniam animi cum, possimus enim dignissimos ab commodi, vero dolorem
          nisi explicabo! Repellendus mollitia minima impedit, veritatis laborum
          assumenda dolorum similique optio? Est provident accusantium id,
          repellendus autem repellat.
          <div className='w-60 h-24 py-1 px-3 bg-emerald-600 rounded-md shadow-md absolute top-1 -right-64 main-text-tooltip'>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit.
            </p>
            <div className='w-4 h-4 bg-emerald-600 transform rotate-45 -mx-5 -my-14'></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
