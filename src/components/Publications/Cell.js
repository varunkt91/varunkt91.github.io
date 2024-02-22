import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

const PublicationCell = ({ publication }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={publication.DOI}>{publication.title}</a></h3>
        <time className="published">{publication.year}</time>
      </header>
      <div className="authors">
        <p>Authors: {publication.authors.join(',')}</p>
      </div>
      <p>Journal: {publication.journal}</p>
      <a href={publication.DOI} className="link">DOI: {publication.DOI}</a>
    </article>
  </div>
);

PublicationCell.propTypes = {
  publication: PropTypes.shape({
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    DOI: PropTypes.string.isRequired,
  }).isRequired,
};

export default PublicationCell;
