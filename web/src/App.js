import React, { useState } from 'react';
import './global.css';
import './App.css';

import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('C');

  return (
    <div id='app'>
      <Aside
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Main selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default App;
