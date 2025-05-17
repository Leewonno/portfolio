import Header from './level3/Header';
import Footer from './level3/Footer';

import {StatusProvider} from './store/status-context';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <StatusProvider>
        <Header />
        <Outlet />
        <Footer />
      </StatusProvider>
    </>
  );
}

export default App;
