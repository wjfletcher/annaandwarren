import React, { Component }  from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let fetchBody = {
      response: {
        date: this.refs.date.value
      }
    };

    fetch(`/api/v1/mailers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(fetchBody) })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        this.props.getExercises();
      });

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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNCaEm7s8yShV_KnLP0JmRwA_Ddmk3w_0GGdGgUFSysR0yrw/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
        </div>
        <div id="secsec">
          <div className="container">
            <div className="col-md-4 hidden-xs center" id="location">

            </div>
          </div>
        </div>
      </div>
      <div id="content2">
        <div id="firstsec">
          <div className="container center">
            <div className="col-md-12">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8NHUe0vxBliSKU7znHt7AVQUVuRfYDodfmB4Ju_dNjg0kyg/viewform?embedded=true" width="100%" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

              <form onSubmit={this.handleSubmit} method="post" action="/response" >

                <div className="row">
                  <div className="field small-12 large-6 columns">
                    <label htmlFor="workout_date" className="white-text">Date</label>
                    <input type="date" name="workout[date]" id="workout_date" ref="date" required="required"/>
                  </div>
                </div>
                <input className="button" type="submit" name="commit" value="Save" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="secsec">
        <div className="container">
          <div id="map-canvas" className="col-md-6"></div>
          <div className="col-md-4 hidden-xs center" id="location">
          </div>
        </div>
      </div>


      <div id="content2">
        <div id="firstsec">
          <div className="container center">
            <div className="col-md-6">
              <h2>The Venue</h2>
              <p>Southport Island, Maine</p>
              <form action="http://maps.google.com/maps" method="get" target="_blank">
              Enter your starting address:
              <input type="text" name="saddr" />
              <input type="hidden" name="daddr" value="602 hendricks hill rd, southport island, ME" />
              <input type="submit" value="get directions" />
              </form>
            </div>

            <div id="map" className="col-md-6"></div>

            <div className="col-md-4 hidden-xs center" id="location">
          </div>
        </div>
      </div>
      <div id="secsec">
        <div className="container">




          </div>
        </div>
      </div>

      </div>


    )
  }
}

export default Home;
