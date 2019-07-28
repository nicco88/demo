import React from 'react';

// const DestroyTrigger = () => (
//   <DetailConsumer>
//     {({ destroyModal }) => <span onClick={ destroyModal }>Close</span>}
//   </DetailConsumer>
// );

const Content = () => (
  <div>
    <h1>Text modal</h1>
    <p>Some next here !</p>
  </div>
);

const Detail = () => {
  return (
      <div style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'pink',
        zIndex: 99,
      }}>
        Modal
      </div>
  );
}

export default Detail;