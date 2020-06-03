import React, { Component } from 'react';
import { ThemeContext } from '../contexts/Theme.context';

class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode, setLanguage } = this.context;
    
    const style = {
      backgroundColor: isDarkMode ? 'rgb(30, 30, 30)' : 'aliceblue',
      height: '100vh',
      width: '100vw',
      transition: 'all .2s',
    };  

    
    return (
      <div style={style} >
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;