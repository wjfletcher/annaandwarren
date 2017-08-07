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
    this.setState({
      confirm: <i className='fa fa-spinner fa-pulse fa-3x fa-fw'></i>
    });
    if (this.refs.songname.value === "" && this.refs.beers.value === "") {
      this.setState({
        confirm: "You must request either a song or a beer!"
      });
    } else {
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
          setTimeout(function() { this.setState({confirm: ""}); }.bind(this), 6000);
        });
    }
  }


  render() {
    let today = new Date()
    let weddingDay = new Date("09/16/2017")
    let timeDiff = Math.abs(weddingDay.getTime() - today.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

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
                <li><a href="#content4" className="smooth">Zola Registry</a>
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
              <p>(in {diffDays} days!)</p>
            </div>
          </div>
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
                <h3>After looking around at more traditional venues, we realized they were all too restrictive and... well, traditional. We decided the best way to have the reception we wanted was to use the Cartier Cabin up on Southport Island in Maine! It was still being built at the time, but we knew it would be the perfect place to get married. No formal sit-down dinner where you're forced to only socialize with the strangers at your table. Think backyard party with a wedding theme!</h3>
                <h3>Directions</h3>
                <form action="http://maps.google.com/maps" method="get" target="_blank">
                <input type="text" name="saddr" id="saddr" placeholder="starting address" />
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

      <div id="content4">
        <div className="content">
        <div id="firstsec">
          <div className="container center equal">
            <h2>Zola Registry</h2>
            <h3>As a couple who has been together for six and a half years, we have everything we need, actually more than we need! Because of that, we request that you contribute to our Zola instead of physical gifts. Zola is a site that can be used for a more traditional gift registry, but it also has the option allowing you to contribute to experiences on our honeymoon! Any contribution would be greatly appreciated, though your presence at our reception is all we really care about. So follow the link below if you'd like to pitch in!</h3><br />
            <h3><a href="https://www.zola.com/registry/annaandwarren" target="_blank">Zola</a></h3>

          </div>
        </div>
        </div>
      </div>

      <div className="background fifth">
        <div className="container">

        </div>
      </div>

      <div id="content2">
        <div className="content">
        <div id="firstsec">
          <div className="container center">
            <h2>Beer and Song Requests</h2>
            <div className="col-md-6">

              <h3>We are going to have a selection of beer, and also some red and white wine. If you have any beer requests, please fill out the form. We can't guarantee that all requested beers will be available, but we'll do our best!</h3>

              <h3>Music is going to be handled by a DJ by the name of Spotify. You can request songs using the form too, but we have the right to refuse any request, especially songs by the likes of Bieber or Swift!</h3>
            </div>

            <div className="col-md-6">
              <br />
              <h3>{this.state.confirm}</h3>
              <form onSubmit={this.handleSubmit} name="requestForm" method="post" action="/response" >
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

                <h3>and/or</h3>
                <div className="beer input-group input-group-lg">
                  <input type="text" name="beers" placeholder="Beer request" className="form-control" id="beers" ref="beers" />
                </div>
                <br/>
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
                <h3>Cheap as shit and clean: $39-$59 per night</h3>
                <h3><a href="http://www.shipahoymotel.com/rates.html" target="_blank">website</a></h3>
              </div>
              <div className="col-md-4">
                <h3>Ocean Gate Resort</h3>
                <h3>Pricey compared to Ship Ahoy, however nice resort with lots of amenities and where we are staying for the weekend: $119-$169 per night</h3>
                <h3><a href="http://www.oceangateinn.com/ogrCalendar/ogr_reservations.html?_ga=1.156248062.436664161.1492382771" target="_blank">website</a></h3>
              </div>
              <div className="col-md-4">
                <h3>Gray's Homestead Campground</h3>
                <h3>for the folks who like to rough it, a campground right smack dab on the ocean: $48-$53 cash only...</h3>
                <h3><a href="http://www.graysoceancamping.com/rates.htm" target="_blank">website</a></h3>
              </div>
            </div>
            <hr />
            <div className="row">
              <h3>In Boothbay Harbor</h3>
              <div className="col-md-4">
                <h3>Flagship Inn</h3>
                <h3>Pet friendly, so friendly to the point that the dog gets a goodie bag and the humans don't... $119-$134 per night</h3>
                <h3><a href="http://www.boothbaylodging.com/rooms.htm" target="_blank">website</a></h3>
              </div>
              <div className="col-md-4">
                <h3>Boothbay Harbor Oceanside Golf Resort</h3>
                <h3>Previously known as Rocktide Inn. However, not really sure where the golfing is... But beautiful rooms for good rates: $119-$209 per night</h3>
                <h3><a href="https://boothbayharboroceansideresort.com/boothbay-harbor-reservations/" target="_blank">website</a></h3>
              </div>
              <div className="col-md-4">
                <h3>Midtown Motel</h3>
                <h3>from the 1950s and has not changed, yet prices are low and they're nice people. Also walking distance to downtown: $69-$89 per night (call to make reservations: 207-633-2751)</h3>
                <h3><a href="http://www.midtownmaine.com/" target="_blank">website</a></h3>
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
