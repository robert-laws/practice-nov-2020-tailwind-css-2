import { SearchIcon, ChatIcon, UserIcon } from './icons';

function App() {
  return (
    <div className='flex flex-row h-screen bg-gray-100'>
      <div className='flex flex-col justify-between items-center flex-none w-16 p-4 bg-gray-200'>
        <div className='flex flex-col space-y-3'>
          <a href='/'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='/'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='/'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
        </div>
        <div className='flex flex-col space-y-2'>
          <a href='/'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='/'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
          <a href='/'>
            <div className='rounded-full bg-gray-400 w-8 h-8'></div>
          </a>
        </div>
      </div>
      <div className='w-64 flex-none bg-gray-100 p-4 flex flex-col space-y-4 shadow-md'>
        <div className='flex flex-row justify-between items-center mb-6'>
          <h1 className='font-semibold text-2xl'>Inbox</h1>
          <SearchIcon width='w-6' height='h-6' />
        </div>
        <div className='bg-red-200 h-64'></div>
        <div className='bg-red-200 h-64'></div>
      </div>
      <div className='flex-auto flex flex-row bg-white rounded-tl-xl rounded-r-none shadow-md'>
        <div className='flex flex-col w-1/5'>
          <div className='flex-none h-24'>Top</div>
          <div className='flex-auto overflow-y-auto border-t'>
            <a href='/' className='block border-b'>
              <div class='border-l-2  border-transparent p-2 space-y-4'>
                <div className='flex flex-row items-center space-x-2'>
                  <UserIcon width='w-6' height='h-6' />
                  <strong className='flex-grow text-md'>Bob Cobb</strong>
                  <div className='text-gray-500 text-sm'>5d</div>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                  <ChatIcon />
                  <div className='flex-grow truncate'>
                    some mostly general chat message info
                  </div>
                </div>
              </div>
            </a>
            <a href='/' className='block border-b'>
              <div class='border-l-2 border-blue-500 bg-blue-50 p-2 space-y-4'>
                <div className='flex flex-row items-center space-x-2'>
                  <UserIcon width='w-6' height='h-6' />
                  <strong className='flex-grow text-md'>Bob Cobb</strong>
                  <div className='text-gray-500 text-sm'>5d</div>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                  <ChatIcon />
                  <div className='flex-grow truncate'>
                    some mostly general chat message info
                  </div>
                </div>
              </div>
            </a>
            <a href='/' className='block border-b'>
              <div class='border-l-2  border-transparent p-2 space-y-4'>
                <div className='flex flex-row items-center space-x-2'>
                  <UserIcon width='w-6' height='h-6' />
                  <strong className='flex-grow text-md'>Bob Cobb</strong>
                  <div className='text-gray-500 text-sm'>5d</div>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                  <ChatIcon />
                  <div className='flex-grow truncate'>
                    some mostly general chat message info
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='w-3/5 border-l border-r border-gray-300'>center</div>
        <div className='w-1/5 bg-gray-200'>right</div>
      </div>
    </div>
  );
}

export default App;
