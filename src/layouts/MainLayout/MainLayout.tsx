import React from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

/**
 * MainLayout component
 */
const MainLayout: React.FunctionComponent<React.HtmlHTMLAttributes<any>> = (
  props
) => {
  return (
    <div {...props}>
      <Header />
      <div className="main-container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
