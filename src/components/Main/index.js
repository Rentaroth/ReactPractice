import React from 'react';
import { Prompt } from './addOn/prompt';
import './addOn/gridTransform/grid-area-1.css';
import './Main.css';

function Main(props) {
  const [ areaClass, setAreaClass ] = React.useState('main--area');
  function areaZoom() {
    if(!areaClass.includes('main_info--zoom--on')) {
      setAreaClass('main_area main_info--zoom--on');
    } else {
      setAreaClass('main_area main_info--zoom--off');
    }
  }
  console.log(areaClass);
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
      <div className={areaClass}>
        <section onClick={areaZoom} className="main_info collage-item">
          <Prompt
            info={props.info}
          />
        </section>
        <section className="main_lookingfor collage-item"></section>
        <section className="main_whatioffer collage-item"></section>
        <section className="main_projectspreview collage-item"></section>
      </div>
    </main>
  );
}

export { Main };
