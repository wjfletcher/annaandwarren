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
                      <li><a href="#content1">Date and Location</a>
                      </li>
                      <li><a href="#content2">Food</a>
                      </li>

                  </ul>

              </div>
          </div>

      </div>

      <div className="jumbotron center" id="jumbotron">
          <div className="spacer"></div>
          <div className="title">
              <h1>Anna and Warren</h1>
              <p>Were getting married!</p>



          </div>

      </div>
      <div className="forestdiv"><img className="forest" src="/assets/forest.png"/></div>

      <div id="content1">
          <div id="firstsec">
              <div className="container">

                  <br/>
                  <br/>
                  <div className="center">
                      <h1>Date</h1>
                      <br/>
                      <h3>September 16th, 2017</h3>
                  </div>
                  <br/>
                  <br/>


              </div>
              <br/>
              <br/>
              <br/>
          </div>
          <div id="secsec">
              <div className="container">
              <div id="map-canvas" className="col-md-6"></div>
              <div className="col-md-4 hidden-xs center" id="location">

                  <h2>The Venue</h2>
                  <p>Southport Island, Maine</p>

              </div>
              </div>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8NHUe0vxBliSKU7znHt7AVQUVuRfYDodfmB4Ju_dNjg0kyg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </div>
      </div>
      <div id="content2">

              <div className="container center">
                  <br/>
                  <br/>
                  <h2>Food and Drink!</h2>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
              </div>
          </div>

      </div>
    )
  }
}

export default Home;
