import 'tailwindcss/tailwind.css';
import { SearchIcon } from './icons';

function App() {
  return (
    <div className='flex flex-row h-screen'>
      <div className=' flex flex-col justify-between items-center w-16 p-4 bg-gray-200'>
        <div className='flex flex-col space-y-3'>
          <a href='#'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='#'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='#'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
        </div>
        <div className='flex flex-col space-y-2'>
          <a href='#'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='#'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='#'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
        </div>
      </div>
      <div className='w-64 bg-gray-100 p-4'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='font-semibold text-2xl'>Inbox</h1>
          <SearchIcon width='w-6' height='h-6' />
        </div>
      </div>
      <div className='flex-auto bg-blue-200'></div>
    </div>
  );
}

export default App;
