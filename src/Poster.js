import React from "react";

class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posterPath: ""
    };
  }

  componentDidMount() {
    this.fetchMoviePoster(this.props.quoteEntry);
  }

  componentDidUpdate(prevProps) {
    if (this.props.quoteEntry.quote !== prevProps.quoteEntry.quote) {
      this.fetchMoviePoster(this.props.quoteEntry);
    }
  }

  fetchMoviePoster(quoteEntry) {
    const encodedFilm = encodeURI(quoteEntry.film);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ebd1150a2d454c4ef81403b65c6871a2&language=en-US&query=${encodedFilm}&page=1&include_adult=false&primary_release_year=${quoteEntry.year}`
    )
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            posterPath: data.results[0].poster_path
          });
          console.log(data.results[0].poster_path);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {}
      );
  }
  render() {
    if (!this.state.posterPath) return <div></div>;
    return (
      <img
        alt="movie poster"
        className="poster-image"
        src={`https://image.tmdb.org/t/p/w500/${this.state.posterPath}`}
      ></img>
    );
  }
}

export default Poster;
