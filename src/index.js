import React from "react";
import ReactDOM from "react-dom";

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
  return <img src={props.src} alt={props.alt} width="300px" />;
}

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this);
    return (
      <div>
        <p>{title}</p>
        <Image src={image} alt={title} />
        <p>{vote_average}</p>
        <p>{overview}</p>
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
