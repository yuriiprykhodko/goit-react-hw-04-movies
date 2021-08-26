import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Api from "../../Servises/movies-api";
import "./HomePage.css";

const HomePage = () => {
  const location = useLocation();
  const [list, setList] = useState([]);

  useEffect(() => {
    Api.fatchTrending().then((list) => {
      setList(list);
    });
  }, []);

  return (
    <div className="homeContainer">
      <h1>Trending today</h1>
      <ul>
        {list.map(({ title, id, name }) => (
          <li key={id}>
            {/* <Link to={`movies/${id}`}>{title ?? name}</Link> */}
            <Link to={{ pathname: `movies/${id}`, state: { from: location } }}>
              {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;