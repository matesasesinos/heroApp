import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="text-center">
      <h1>No se encontro la ruta</h1>
      <Link to="/marvel">Inicio</Link>
    </div>
  );
};
