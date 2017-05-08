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
        songname: this.refs.songname.value,
        songartist: this.refs.songartist.value,
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
          confirm: "Your requests were submitted. Edit the form to submit another!"
        });
        setTimeout(function() { this.setState({confirm: ""}); }.bind(this), 3000);
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
                <li><a href="#jumbotron" className="smooth">Home</a>
                </li>
                <li><a href="#content1" className="smooth">Venue</a>
                </li>
                <li><a href="#content2" className="smooth">Song/Beer Requests</a>
                </li>
                <li><a href="#content3" className="smooth">Where to Stay</a>
                </li>

            </ul>

          </div>
        </div>

      </div>

      <div className="jumbotron center background" id="jumbotron">
          <div className="title">
            <div className="overlay">
              <h1 id="aw">Anna and Warren</h1>
              <p>are getting married!</p>
              <h1>September 16th, 2017</h1>
            </div>
          </div>
          <video autoplay muted loop id="vid">
              <source src="/assets/testvid.mp4" type="video/mp4" />
          </video>
      </div>

      <div className="background fourth">
        <div className="container">
        </div>
      </div>


      <div id="content1">
        <div className="content">
        <div id="firstsec">
          <div className="container center equal">
            <h2>The Venue</h2>
            <div className="col-md-6">
              <div className="venue">
                <h3>Southport Island, Maine</h3>
                <p>After looking around at more traditional venues, we realized they were all too restrictive and... well, traditional. We decided the best way to have the reception we wanted was to use the Cartier Cabin up on Southport Island in Maine! It was still being built at the time, but we knew it would be the perfect place to get married.</p>
                <h4>Directions</h4>
                <form action="http://maps.google.com/maps" method="get" target="_blank">
                <input type="text" name="saddr" placeholder="starting address" />
                <input type="hidden" name="daddr" value="602 hendricks hill rd, southport island, ME" />
                <br/><br/>
                <input type="submit" className="btn btn-default" value="get directions" />
                </form>
              </div>
            </div>
            <div id="map" className="col-md-6"></div>
          </div>
        </div>
        </div>
      </div>

      <div className="background first">
        <div className="container">

        </div>
      </div>


      <div id="content2">
        <div className="content">
        <div id="firstsec">
          <div className="container center">
            <h2>Beer and Song Requests</h2>
            <div className="col-md-6">
              <img src="/assets/beermusic.jpg" className="img-responsive image"></img>
            </div>

            <div className="col-md-6">
              <br />
              <h3>{this.state.confirm}</h3>
              <form onSubmit={this.handleSubmit} method="post" action="/response" >
                <div className="input-group input-group-lg">
                  <input type="text" name="name" placeholder="Name" className="form-control" id="name" ref="name" required="required"/>
                </div>
                <br />

                <div className="inline-input col-md-6">
                  <div className="input-group input-group-lg">
                  <input type="text" name="songname" placeholder="Song Name" className="form-control" id="songname" ref="songname" />
                  </div>
                </div>
                <div className="inline-input col-md-6">
                  <div className="input-group input-group-lg">
                  <input type="text" name="songartist" placeholder="Song Artist" className="form-control" id="songartist" ref="songartist" />
                  </div>
                </div>
                <br />
                <div className="beer input-group input-group-lg">
                  <input type="text" name="beers" placeholder="Beer request" className="form-control" id="beers" ref="beers" required="required"/>
                </div>
                <br />
                <input className="btn btn-default" type="submit" name="commit" value="Save" />
              </form>
            </div>
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


      <div id="content3">
      <div className="content">
        <div id="firstsec">
          <div className="container center">
            <h2>Places to stay</h2>
            <div className="row">
              <h3>On The Island</h3>
              <div className="col-md-4">
                <h3>Ship Ahoy Motel</h3>
                <p>Cheap as shit and clean: $39-$59 per night</p>
                <p><a href="http://www.shipahoymotel.com/rates.html">website</a></p>
              </div>
              <div className="col-md-4">
                <h3>Ocean Gate Resort</h3>
                <p>Pricey compared to Ship Ahoy, however nice resort with lots of amenities and where we are staying for the weekend: $119-$169 per night</p>
                <p><a href="http://www.oceangateinn.com/ogrCalendar/ogr_reservations.html?_ga=1.156248062.436664161.1492382771">website</a></p>
              </div>
              <div className="col-md-4">
                <h3>Gray's Homestead Campground</h3>
                <p>for the folks who like to rough it, a campground right smack dab on the ocean: $48-$53 cash only...</p>
                <p><a href="http://www.graysoceancamping.com/rates.htm">website</a></p>
              </div>
            </div>
            <hr />
            <div className="row">
              <h3>In Boothbay Harbor</h3>
              <div className="col-md-4">
                <h3>Flagship Inn</h3>
                <p>Pet friendly, so friendly to the point that the dog gets a goodie bag and the humans don't... $119-$134 per night</p>
                <p><a href="http://www.boothbaylodging.com/rooms.htm">website</a></p>
              </div>
              <div className="col-md-4">
                <h3>Boothbay Harbor Oceanside Golf Resort</h3>
                <p>previously known as Rocktide Inn. However, not really sure where the golfing is... But beautiful rooms for good rates: $119-$209 per night</p>
                <p><a href="https://boothbayharboroceansideresort.com/boothbay-harbor-accommodations/">website</a></p>
              </div>
              <div className="col-md-4">
                <h3>Midtown Motel</h3>
                <p>from the 1950s and has not changed, yet prices are low and they're nice people. Also walking distance to downtown: $69-$89 per night (call to make reservations: 207-633-2751)</p>
                <p><a href="http://www.midtownmaine.com/">website</a></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="background third">
        <div className="container">
        </div>
      </div>


    </div>


    )
  }
}

export default Home;
