import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import starsGif from '../../assets/img/stars.gif'

function MyJumbotron() {
  return (
    <div className="jumbotron" style={{ background: `url(${starsGif}) no-repeat center center`, backgroundSize: 'cover', color: 'white' }}>
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4">A Step Above Others</h1>
            <p>Website under Construction</p>
            <p>Mcpherson and Co Jewelers</p>
            <p>Georgia | Louisiana | Alabama</p>
          </div>
          <div className="col-md-6">
            <p>Make an Appointment with us at:</p>
            <p><a href="mailto:Mcphersonandco@gmail.com" className="text-white">Mcphersonandco@gmail.com</a></p>
            <p>Or call us at <a href="tel:678-664-1874" className="text-white">678-664-1874</a></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MyJumbotron;