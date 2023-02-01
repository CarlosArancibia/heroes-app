import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  const imgUrl = `./heroes/${id}.jpg`;
  return (
    <div className="col animate__animated animate__fadeIn">
      <figure className="card">
        <div className="row no-gutters">
          <picture className="col-4">
            <img src={imgUrl} className="card-img" alt={superhero} />
          </picture>
          <figcaption className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {characters !== alter_ego && <p className="text-mutted">{characters}</p>}
              <p className="card-text">
                <small className="text-mutted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Ver más ...</Link>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
