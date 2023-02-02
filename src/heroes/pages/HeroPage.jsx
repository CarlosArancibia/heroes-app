import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onBackPage = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <section className="row mt-5 animate__animated animate__fadeInLeft">
        <section className="col-4">
          <img src={`/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" />
        </section>
        <section className="col-8">
          <h1>{hero.superhero}</h1>
          <ul className="list-group my-4">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publiser: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {hero.first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{hero.characters}</p>
          <button className="btn btn-outline-primary" onClick={onBackPage}>
            Back
          </button>
        </section>
      </section>
    </>
  );
};
