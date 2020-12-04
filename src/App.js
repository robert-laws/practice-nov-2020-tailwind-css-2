import 'tailwindcss/tailwind.css';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Navigation />
      <div className='flex-1 p-4'>Main</div>
      <div className='flex-none p-4 bg-blue-200 h-32'>Footer</div>
    </div>
  );
}

export default App;
