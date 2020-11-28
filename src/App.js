import 'tailwindcss/tailwind.css';
import NoticeImage from './images/notice-icon.svg';

function App() {
  const darkModeToggle = () => {
    let htmlElement = document.querySelector('html');
    htmlElement.className === 'dark'
      ? htmlElement.classList.remove('dark')
      : htmlElement.classList.add('dark');
  };

  return (
    <div className='flex flex-col'>
      <div className='p-6 m-3 space-x-4 rounded-xl shadow-lg flex max-w-sm mx-auto bg-white dark:bg-black'>
        <div className='flex-shrink-0'>
          <img className='h-12 w-12' src={NoticeImage} alt='Notification' />
        </div>
        <div>
          <div className='text-xl font-medium text-black dark:text-white'>
            Notification...
          </div>
          <p className='text-gray-500 text-black dark:text-white'>
            You have a new notification
          </p>
        </div>
      </div>
      <div className='max-w-sm mx-auto'>
        <button
          onClick={darkModeToggle}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Toggle Dark Mode
        </button>
      </div>
      <div className='mt-6 max-w-xl mx-auto'>
        <form>
          <input
            type='text'
            className='border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent px-3 py-2 rounded-lg shadow'
            placeholder='Enter your email'
          />
          <button className='bg-purple-600 hover:bg-purple-800 text-white px-3 py-2 rounded-lg shadow'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
