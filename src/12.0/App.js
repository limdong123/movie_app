import React from "react";
import propTypes from "prop-types";
import axios from "axios";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovie = async() => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
  }//axios가 끝날때까지 기다렸다가 계속해 
  
  componentDidMount(){
    this.getMovie()
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
