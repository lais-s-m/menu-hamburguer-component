import { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';

import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      <div>
        <h1>Hello. This is burger menu tutorial</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1858/1858002.png"
          alt="burger icon"
        />
      </div>
    </>
  );
}

export default App;
