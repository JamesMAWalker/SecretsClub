import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('french');
  const changeLanguage = e => setLanguage(e.target.value);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// export class LanguageProvider extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       language: 'french'
//     };
//   }

//   setLanguage = e => {
//     this.setState({ language: e.target.value });
//   }
  

//   render() {

//     return (
//       <LanguageContext.Provider value={{...this.state, setLanguage: this.setLanguage}} >
//         {this.props.children}
//       </LanguageContext.Provider>
//     );
//   }
// }
