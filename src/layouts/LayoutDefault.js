import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => {
  
  return(
  <>
    <Header navPosition="right" className="reveal-from-bottom" ruta={children.props.location.pathname}/>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
)
;
}

export default LayoutDefault; 