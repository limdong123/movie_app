import React from "react";
import propTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovie = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({
      movies: movies,
      isLoading: false
    })  // 이름이 같기 때문에 ({movies})적어도 가능하다.

  }

  componentDidMount() {
    this.getMovie()
  }

  render() {
    const { isLoading, movies } = this.state
    return (
      <div>
        {isLoading ? "Loading..." :
          movies.map(item => {
            return <Movie
              key={item.id}
              id={item.id}
              year={item.year}
              title={item.title}
              summary={item.summary}
              poster={item.medium_cover_image}
            />

          })
        }
      </div>
    );
  }
}

export default App;
