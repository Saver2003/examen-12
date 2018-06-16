import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, PageHeader} from "react-bootstrap";
import {Link} from "react-router-dom";
import PhotoList from "../../components/PhotoList/PhotoList";
import {fetchPhoto} from "../../store/actions/photo";

class Photo extends Component {

  componentDidMount() {
    this.props.fetchPhoto();
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          Photo
          {this.props.user ?
          <Link to="/new">
            <Button bsStyle="primary" className="pull-right">
              Add photo
            </Button>
          </Link> : null
          }
        </PageHeader>

        {this.props.photo.map(photo => (
          <PhotoList
            key={photo._id}
            id={photo._id}
            title={photo.title}
            user={photo.user}
            photo={photo.photo}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    photo: state.photo.photo
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: () => dispatch(fetchPhoto())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);