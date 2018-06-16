import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";

import {addPhoto} from "../../store/actions/photo";
import PhotoForm from "../../components/PhotoForm/PhotoForm";

class NewPhoto extends Component {

  createPhoto = photoData => {
    this.props.addNewPhoto(photoData)
    console.log(photoData)
  };

  render() {
    return (
      <Fragment>
        <PageHeader>New Photo</PageHeader>
        <PhotoForm onSubmit={this.createPhoto}/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.user
});

const mapDispatchToProps = dispatch => ({
  addNewPhoto: photoData => dispatch(addPhoto(photoData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPhoto);