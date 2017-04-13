import React, { Component }  from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let fetchBody = {
      response: {
        name: this.refs.name.value,
        songs: this.refs.songs.value,
        beers: this.refs.beers.value
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
        this.setState({
          confirm: "Your requests were submitted!"
        });
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

      <div className="jumbotron center background" id="jumbotron">
          <div className="title">
            <h1 id="aw">Anna and Warren</h1>
            <p>are getting married!</p>
            <h1>September 16th, 2017</h1>
          </div>
          <video autoplay muted loop id="vid">
              <source src="/assets/testvid.mp4" type="video/mp4" />
          </video>



      </div>


      <div id="content1">
        <div id="firstsec">
          <div className="container center equal">




            <div className="col-md-6">
              <div className="spacer"></div>
              <div className="venue">
                <h2>The Venue</h2>
                <p>Southport Island, Maine</p>
                <form action="http://maps.google.com/maps" method="get" target="_blank">
                Enter your starting address:
                <input type="text" name="saddr" />
                <input type="hidden" name="daddr" value="602 hendricks hill rd, southport island, ME" />
                <input type="submit" value="get directions" />
                </form>
              </div>
            </div>

            <div id="map" className="col-md-6"></div>

          </div>
        </div>
        <div className="background first">
          <div className="container">

          </div>
        </div>
      </div>
      <div id="content2">
        <div id="firstsec">
          <div className="container center">
            <div className="col-md-6">
              <img src="/assets/beermusic.jpg" className="img-responsive image"></img>
            </div>
            <div className="col-md-6">
            <h2>Beer and Song Requests</h2>
              <h3>{this.state.confirm}</h3>
              <form onSubmit={this.handleSubmit} method="post" action="/response" >
                <div className="input-group input-group-lg">
                  <input type="text" name="name" placeholder="Name" className="form-control" id="name" ref="name" required="required"/>
                </div>
                <br />
                <div className="input-group input-group-lg">
                  <input type="text" name="songs" placeholder="Song requests" className="form-control" id="songs" ref="songs" />
                </div>
                <br />
                <div className="input-group input-group-lg">
                  <input type="text" name="beers" placeholder="Beer requests" className="form-control" id="beers" ref="beers" required="required"/>
                </div>
                <br />
                <input className="button" type="submit" name="commit" value="Save" />
              </form>


            </div>
          </div>
        </div>
      </div>
      <div className="background second">
        <div className="container">
          <div id="map-canvas" className="col-md-6"></div>
          <div className="col-md-4 hidden-xs center" id="location">
          </div>
        </div>
      </div>


      <div id="content2">
        <div id="firstsec">
          <div className="container center">




        </div>
      </div>
      <div className="background third">
        <div className="container">




          </div>
        </div>
      </div>

      </div>


    )
  }
}

export default Home;
