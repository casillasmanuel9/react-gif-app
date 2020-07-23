import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { data: imagenes, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className={'animate__animated animate__fadeIn'}> {category} </h3>

      {loading && <p className={'animate__animated animate__flash'}> Loading.. </p>}

      <div className={"card-grid"}>
        {imagenes.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}