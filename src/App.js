import React from 'react';

import Navbar from './components/Navbar.component';
import Form from './components/Form.component';
import PageContent from './components/page-content.component';

import { ThemeProvider } from './contexts/Theme.context';
import { LanguageProvider } from './contexts/Language.context';
import './styles/app.styles.scss';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
