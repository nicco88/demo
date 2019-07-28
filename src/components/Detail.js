import React from 'react';
import { MoviesConsumer } from './MoviesContext';


const DestroyTrigger = (props) => (
    <span onClick={ props.destroyModal }>Close</span>
);

// const Content = () => (
//   <div>
//     <h1>Text modal</h1>
//     <p>Some next here !</p>
//   </div>
// );




const Detail = () => {
  return (
  <MoviesConsumer>
    {({ destroyModal, detailData }) => (
      <div style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: '#29292bdb',
        zIndex: 99,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div
          style={{
            background: '#fff',
            width: '80vw',
            height: '80vh'
          }}
        >
          <DestroyTrigger destroyModal={ destroyModal }/>

        </div>
      </div>
    )}
  </MoviesConsumer>
    
  );
}

export default Detail;