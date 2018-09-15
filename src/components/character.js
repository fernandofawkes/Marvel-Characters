import React from "react";

export default class Character extends React.Component {
  render() {
    const { name, description, thumbnail } = this.props.char;
    const { path, extension } = thumbnail;
    return (
      <div className="character-block">
        <img
          src={`${path}/standard_medium.${extension}`}
          alt={`imagem do personagem ${name}`}
        />
        <h2 className="character-name">{name}</h2>
        <p className="character-desc">{description}</p>
      </div>
    );
  }
}
