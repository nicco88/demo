import React from 'react';
import { MoviesConsumer } from './MoviesContext';
import no_pic from './../assets/no_pic.jpg'

const DestroyTrigger = (props) => (
    <span onClick={ props.destroyModal }>Close</span>
);

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
            height: '80vh',
            overflowY: 'auto',
            padding: '2rem 3rem',
            maxWidth: '400px'
          }}
        >
          <DestroyTrigger destroyModal={ destroyModal }/>
          {
            console.log(detailData)
          }
          <h1 style={{ textAlign: 'center' }}>{ detailData.data.Title }</h1>
          <h2 style={{ textAlign: 'center' }}>({ detailData.data.Year })</h2>
          <div
            style={{
              maxWidth: '200px',
              margin: '0 auto'
            }}
          >
            <img
              src={detailData.data.Poster}
              onError={e => e.target.src = no_pic}
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </div>

          <h3>Plot</h3>
          <p >
            { detailData.data.Plot }
          </p>

          <h3>Production</h3>
          <p>{ detailData.data.Production }</p>

          <h3>Director</h3>
          <p>{ detailData.data.Director }</p>

          <h3>Actors</h3>
          <p>{ detailData.data.Actors }</p>

          <h3>Runtime</h3>
          <p>{ detailData.data.Runtime }</p>

          <h3>Imdb Rating</h3>
          <p>{ detailData.data.imdbRating }</p>
        </div>
      </div>
    )}
  </MoviesConsumer>
    
  );
}

export default Detail;