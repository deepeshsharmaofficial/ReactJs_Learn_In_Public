import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    // console.log(this.props.anime)
    const {name, image} = this.props.anime;

    return(
      <div className="anime-card">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    )
  }
}

export default AnimeCard;
