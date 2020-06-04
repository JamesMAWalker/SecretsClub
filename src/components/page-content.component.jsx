import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme.context';

export default function PageContent({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  const style = {
    backgroundColor: isDarkMode ? 'rgb(30, 30, 30)' : 'aliceblue',
    height: '100vh',
    width: '100vw',
    transition: 'all .2s',
  };

  return <div style={style}>{children}</div>;
};
