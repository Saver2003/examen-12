import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "react-bootstrap";
import FormElement from "../UI/Form/FormElement";

class PhotoForm extends Component {
  state = {
    title: '',
    photo: ''
  };

  submitForm = event => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });

    this.props.onSubmit(formData);
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  };

  render() {
    return (
      <Form horizontal onSubmit={this.submitForm}>
        <FormElement
          propertyName="title"
          title="Photo title"
          type="text"
          value={this.state.title}
          changeHandler={this.inputChangeHandler}
          required
        />

        <FormElement
          propertyName="photo"
          title="Photo image"
          type="file"
          changeHandler={this.fileChangeHandler}
        />

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit">Save</Button>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

export default PhotoForm;