import React from 'react';
import PropTypes from 'prop-types';

const RatingStars = ({ rating, maxRating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = maxRating - fullStars - halfStars;

  const renderStar = (type, key) => {
    switch (type) {
      case 'full':
        return <span key={key}>★</span>;
      case 'half':
        return <span key={key}>½</span>;
      case 'empty':
        return <span key={key}>☆</span>;
      default:
        return null;
    }
  };

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(renderStar('full', i));
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(renderStar('half', i + fullStars));
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(renderStar('empty', i + fullStars + halfStars));
  }

  return <div>{stars}</div>;
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
};

export default RatingStars;
