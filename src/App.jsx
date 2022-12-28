import { useEffect, useState } from 'react';

import logo from './assets/images/logo.svg';

function App() {
  const [value, setValue] = useState('poi');

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">Vite React Starter 💯</p>
        <p>
          Vite + React <br />
          ESLint + Prettier + Tailwind
          <br />
          Jest
        </p>
      </header>
    </div>
  );
}

export default App;
