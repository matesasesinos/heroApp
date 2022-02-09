import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => {
    return getHeroById(heroeId);
  }, [heroeId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = heroImages(id);

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Alter ego:</strong> {alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {publisher}
          </li>
          <li className="list-group-item">
            <strong>Aparación:</strong> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Volver
        </button>
      </div>
    </div>
  );
};
