import React from 'react';
import PropTypes from 'prop-types';
import './Map.css';

const Map = ({ width, height, canvasRef }) => (
  <canvas ref={canvasRef} className="Map" width={width} height={height}>
  </canvas>
);

Map.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  canvasRef: PropTypes.object.isRequired
};

export default Map;
