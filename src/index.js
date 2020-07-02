import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const movie = {
  title: "Ocean's Eleven",
  vote_average: 7.7,
  image:
    "https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  overview:
    "Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously."
};

function Image(props) {
  console.log("Image Props =", props);
  return <img src={props.src} alt={props.alt} width="100%" />;
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({ show: !this.state.show });
  };

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this.state);
    return (
      <div style={{ width: "300px" }}>
        <p>{title}</p>
        <Image src={image} a lt={title} />
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn_liked" : ""}
          >
            Like
          </button>
        </div>

        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
