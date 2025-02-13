import { MusicContextProvider } from './context/MusicContext';
import PlayerV2 from './components/PlayerV2';

const App = () => {
  return (
    <div className='text-primary'>
      <MusicContextProvider>
        <PlayerV2 />
      </MusicContextProvider>
    </div>
  );
};

export default App;
