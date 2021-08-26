import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Api from "../../Servises/movies-api.js";
import "./Cast.css"

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    Api.fatchMovieCredits(movieId).then(setCast);
  }, [movieId]);
  return (
    cast && (
      <>
        <ul>
          {cast.map(({ name, character, id, profile_path }) => (
            <li key={id}>
              <img
                className="image"
                src={Api.imagePath + profile_path}
                alt=""
              />
              <p>{name}</p>
              <p>Caracter: {character}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
export default Cast;