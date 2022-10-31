import React from 'react';
import { context } from '../Context';
import { Fragment } from 'react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

function Content() {
  return (
    <Fragment>
      <context.Consumer>
        {(value) => {
          <>
            <Header id={value.id} />
            <Main />
            <Footer />
          </>;
        }}
      </context.Consumer>
    </Fragment>
  );
}

export { Content };
