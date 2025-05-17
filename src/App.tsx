import {StatusProvider} from './store/status-context';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <StatusProvider>
        <Outlet />
      </StatusProvider>
    </>
  );
}

export default App;
