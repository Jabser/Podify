import React, { Component } from 'react';
import '../../sass/home.scss';

import InfoOne from '../../images/home/info-1.jpg';
import InfoTwo from '../../images/home/info-2.jpg';

class HomeInfo extends Component {
  render () {
    return (
      <div className="home-info">
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img src={InfoOne} alt="info 1" className='img-glow' />
              </div>
              <div className="col-md-6 text-box">
                <div>
                  <h2>Heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius! Neque tempore debitis iure odio saepe laborum illo placeat natus assumenda, atque obcaecati dolorum ea dolor pariatur ratione facilis culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laborum consectetur sequi repellendus aliquid necessitatibus, pariatur, obcaecati cum perferendis molestiae deserunt dolor expedita, illum odio error. Tenetur ipsa soluta mollitia?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 text-box">
                <div>
                  <h2>Heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius! Neque tempore debitis iure odio saepe laborum illo placeat natus assumenda, atque obcaecati dolorum ea dolor pariatur ratione facilis culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laborum consectetur sequi repellendus aliquid necessitatibus, pariatur, obcaecati cum perferendis molestiae deserunt dolor expedita, illum odio error. Tenetur ipsa soluta mollitia?
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={InfoTwo} alt="info 1" className='img-glow' />
              </div>
            </div>
          </div>
        </section>

        <section className='features'>
          <div className="container">
            <div className="heading">
              <h2>Features to enhance your listening experience</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo numquam rem voluptatibus, architecto id obcaecati repellat porro ullam deserunt sapiente, neque explicabo nobis minus? Soluta nihil tempore facere distinctio!</h5>
            </div>
            <div className="row">
              <div className="col-md-6">

              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeInfo;