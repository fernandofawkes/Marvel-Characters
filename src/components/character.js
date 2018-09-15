import React from "react";
import { extractNameParts } from "../helpers";

export default class Character extends React.Component {
  render() {
    const { name, description, thumbnail } = this.props.char;
    const { path, extension } = thumbnail;

    /**[TODO] separar */
    const { real, known } = extractNameParts(name);
    return (
      <div className="character">
        <img
          className="character-image"
          src={`${path}/standard_medium.${extension}`}
          alt={`imagem do personagem ${name}`}
        />
        <hgroup>
          <h2 className="character-name">{known}</h2>
          {real ? <h3 className="character-real-name">{real}</h3> : null}
        </hgroup>
        {description ? (
          <div className="character-details">
            <div className="spacer" />
            <p className="character-desc">{description}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
