import {useContext, useState} from 'react';
import ThemeContext from './ThemeContext';

export default function Form() {
  const currentTheme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;
  const updatedTheme = currentTheme === 'light' ? 'dark' : 'light';

  const [updatedTitle, setUpdatedTitle] = useState('Welcome');
  
  return (
    <Panel title={updatedTitle}>
      <Button setUpdatedTitle={setUpdatedTitle}>Sign Up</Button>
      <Button setUpdatedTitle={setUpdatedTitle}>Log In</Button>
      <button onClick={() => setTheme(updatedTheme)}>
        Toggle Theme
      </button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext).theme;
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
      <div className="image-container">
        <img src={theme === 'light' ? "Sun.png" : "Moon.png"}/>
      </div>
    </section>
  )
}

function Button({ children, setUpdatedTitle}) {
  const theme = useContext(ThemeContext).theme;
  const className = 'button-' + theme;

  function updateTitle(evt) {
    if (evt.target.innerText === 'Sign Up') {
      setUpdatedTitle('Sign Up');
    } else {
      setUpdatedTitle('Log In');
    }
  }
  
  return (
    <button className={className} onClick={updateTitle}>
      {children}
    </button>
  )
}