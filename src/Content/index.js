import React from 'react';
import { Context } from '../Context';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

function Content() {
  return (
    <Context.Consumer>
      {({
        education
      }) => [
        <Header/>,
        <Main 
          info={education}
        />,
        <Footer />,
      ]}
    </Context.Consumer>
  );
}

export { Content };
