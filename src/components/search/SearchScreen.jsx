import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFilter = useMemo(() => getHerosByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Buscar</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Formulario de búsqueda</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="searchText"
              className="form-control"
              placeholder="Buscar"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-primary mt-2 btn-block">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados de la búsqueda</h4>
          <hr />
          {q === '' ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            heroesFilter.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados para: <strong>{q}</strong>
              </div>
            )
          )}
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
