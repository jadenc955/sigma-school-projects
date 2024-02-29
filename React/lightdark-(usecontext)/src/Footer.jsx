import { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function Footer() {
  const theme = useContext(ThemeContext).theme;
  const lightThemeText = 'Thank you for visiting! Enjoy the light theme';
  const darkThemeText = 'Thank you for visiting! Have a great time with the dark theme';

  const text = theme === 'light' ? lightThemeText : darkThemeText;

  return (
    <div>
      {text}
    </div>
  )
}