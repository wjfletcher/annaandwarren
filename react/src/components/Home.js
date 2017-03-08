import React, { Component }  from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return(
      <div>
      <div className="topbar"></div>
      <div className="navbar navbar-inverse navbar-fixed-top navhidden">
          <div className="container">
              <div className="navbar-header">



                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">


                      <span className="sr-only">Toggle navigation</span>


                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>

                  </button>
              </div>
              <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-left">
                      <li><a href="#jumbotron">Home</a>
                      </li>
                      <li><a href="#content1">RSVP</a>
                      </li>
                      <li><a href="#content2">Song/Beer Requests</a>
                      </li>

                  </ul>

              </div>
          </div>

      </div>

      <div className="jumbotron center" id="jumbotron">
          <div className="title">
            <h1>Anna and Warren</h1>
            <p>are getting married!</p>
            <h1>September 16th, 2017</h1>
          </div>

      </div>


      <div id="content1">
        <div id="firstsec">
          <div className="container">
            <div className="center">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNCaEm7s8yShV_KnLP0JmRwA_Ddmk3w_0GGdGgUFSysR0yrw/viewform?embedded=true" width="100%" height="830" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
        </div>
        <div id="secsec">
          <div className="container">
            <div className="col-md-4 hidden-xs center" id="location">

                <h2>The Venue</h2>
                <p>Southport Island, Maine</p>

            </div>
          </div>
        </div>
      </div>
      <div id="content2">
        <div className="container center">
          <div className="col-md-6">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8NHUe0vxBliSKU7znHt7AVQUVuRfYDodfmB4Ju_dNjg0kyg/viewform?embedded=true" width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </div>
          <div className="col-md-6">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScx12urkxZGnUCIUL_vtbTJTAynUlsYQNf3OcGVDxqFr-zdNg/viewform?embedded=true" width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </div>
        </div>
      </div>
      <div id="secsec">
        <div className="container">
          <div id="map-canvas" className="col-md-6"></div>
          <div className="col-md-4 hidden-xs center" id="location">

              <h2>The Venue</h2>
              <p>Southport Island, Maine</p>

          </div>
        </div>
      </div>

      </div>


    )
  }
}

export default Home;
