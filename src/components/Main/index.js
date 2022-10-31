import React from 'react';
import './Main.css';

function Main() {
  return (
    <main>
      <div className="main_title">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          sagittis velit eu augue cursus aliquet. Suspendisse mattis quam et
          urna iaculis, sed gravida diam elementum. Donec rhoncus leo est, quis
          varius orci mollis vitae. Suspendisse quis libero ac neque tempor
          eleifend nec eu ante.
        </p>
      </div>
      <div className="main--area">
        <section className="main_info collage-item"></section>
        <section className="main_lookingfor collage-item"></section>
        <section className="main_whatioffer collage-item"></section>
        <section className="main_projectspreview collage-item"></section>
      </div>
    </main>
  );
}

export { Main };
