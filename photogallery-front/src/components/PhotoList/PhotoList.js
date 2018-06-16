import React from 'react';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import config from '../../config';
import notFound from '../../assets/images/not-found.png';

const PhotoList = props => {
  let image = notFound;

  if (props.image) {
    image = config.apiUrl + '/uploads/' + props.photo;
  }

          console.log(props.user);
  return (
    <Panel>
      <Panel.Body>
        <Image
          style={{width: '100px', marginRight: '10px'}}
          src={image}
          thumbnail
        />
        <Link to={'/photo/' + props.id}>
          {props.title}
        </Link>
        <strong style={{marginLeft: '10px'}}>
          {props.user}
        </strong>
      </Panel.Body>
    </Panel>
  );
};

PhotoList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string,
  user: PropTypes.string
};

export default PhotoList;