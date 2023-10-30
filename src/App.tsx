import React from 'react';
import './App.css';
import Header from './level3/Header';
import Footer from './level3/Footer';
import Main from './level3/Main';

import {StatusProvider} from './store/status-context';

function App() {
  return (
    <>
      <StatusProvider>
        <Header />
        <Main />
        <Footer />
      </StatusProvider>
    </>
  );
}

export default App;
