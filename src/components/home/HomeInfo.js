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
                <img src={InfoOne} alt="info 1" className='img-border' />
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
                <img src={InfoTwo} alt="info 1" className='img-border' />
              </div>
            </div>
          </div>
        </section>

        <section className='features'>
          <div className="container">
            <div className="heading">
              <h2>Features to enhance your listening experience</h2>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo numquam rem voluptatibus, architecto id obcaecati repellat porro ullam deserunt sapiente, neque explicabo nobis minus? Soluta nihil tempore facere distinctio!
              </h5>
            </div>
            <div className="row">
              <div className="col-md-6">

              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </section>

        <section className="points">
          <div className="container-fluid">
            <div className="background">
              <div className="heading">
                <h2>Podify Account</h2>
                <h5>
                  With a Podify account you get access to additional features, which are listed below.
                </h5>

                <div className="point">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="512" width="512"><g><line x1="6" y1="13.25" x2="8" y2="13.25" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line><path d="M11,5.75a4,4,0,0,0-8,0v3.5a1.5,1.5,0,0,1-1.5,1.5h11A1.5,1.5,0,0,1,11,9.25Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M.5,5.62A6,6,0,0,1,3,.75" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5,5.62A6,6,0,0,0,11,.75" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                  <span>
                    <h4>Alerts</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis possimus laudantium eveniet id nisi
                    </p>
                  </span>
                </div>


                <div className="point">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="512" width="512"><g><path d="M3,5H1.5a1,1,0,0,0-1,1V8a1,1,0,0,0,1,1H3Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3,9l3.91,2.81a1,1,0,0,0,1,.08A1,1,0,0,0,8.5,11V3A1,1,0,0,0,8,2.11a1,1,0,0,0-1,.08L3,5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5,4a4.38,4.38,0,0,1,1,3,6.92,6.92,0,0,1-1,3.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5,5.5A2.19,2.19,0,0,1,11,7a2.19,2.19,0,0,1-.5,1.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                  <span>
                    <h4>HIFI Sound</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis possimus laudantium eveniet id nisi consequuntur numquam
                    </p>
                  </span>
                </div>


                <div className="point">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="512" width="512"><g><g><line x1="5.5" y1="3.19" x2="5.5" y2="7.81" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line><line x1="3.19" y1="5.5" x2="7.81" y2="5.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line></g><rect x="0.5" y="0.5" width="10" height="10" rx="1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M3.5,13.5h9a1,1,0,0,0,1-1v-9" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                  <span>
                    <h4>Library Management</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis possimus laudantium eveniet id nisi consequuntur numquam, perferendis iure aliquid modi
                    </p>
                  </span>
                </div>
                <div className="col-md-12 text-start home-cta">
                  <button type="button" className="btn btn-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="512" width="512"><g><circle cx="5" cy="2.75" r="2.25" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M4.5,12.5H.5V11A4.51,4.51,0,0,1,7,7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><line x1="10.5" y1="7.5" x2="10.5" y2="13.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line><line x1="7.5" y1="10.5" x2="13.5" y2="10.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                    Create an account
                  </button>
                  <button type="button" className="btn btn-primary me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="512" width="512"><g><polygon points="13.5 5.5 7 12.5 0.5 5.5 3.5 1.5 10.5 1.5 13.5 5.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></polygon><line x1="0.5" y1="5.5" x2="13.5" y2="5.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line><polyline points="3.5 1.5 7 5.5 10.5 1.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></polyline><line x1="7" y1="5.5" x2="7" y2="12.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                    
                    Go premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeInfo;