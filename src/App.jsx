
import './App.css';
import { Toaster } from 'react-hot-toast';
import BookNow from './Pages/BookNow/BookNow';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BookNow />
    </>
  );
}

export default App;


