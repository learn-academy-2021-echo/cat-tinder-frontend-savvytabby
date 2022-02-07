import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import '../App.css'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

class CatEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      updateCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { updateCat } = this.state;
    updateCat[e.target.name] = e.target.value
    // setting state to the updated form content
    this.setState({updateCat: updateCat})
  }

  handleSubmit = () => {
    // a function call being passed from App.js
    this.props.updateCat(this.state.newCat, this.props.cat.id)
    this.setState({submitted: true})
  }
  render() {
    return(
       <>
          <h2> Edit your cute cat information </h2>
          <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  // value={this.state.updateCat.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="number"
                  name="age"
                  onChange={this.handleChange}
                  // value={this.state.updateCat.age}
                />
              </FormGroup>
              <FormGroup>
                <Label for="enjoys">Enjoys</Label>
                <Input
                  type="text"
                  name="enjoys"
                  onChange={this.handleChange}
                  // value={this.state.updateCat.enjoys}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image URL</Label>
                <Input
                  type="text"
                  name="image"
                  onChange={this.handleChange}
                  // value={this.state.updateCat.image}
                />
              </FormGroup>
              <Button name="submit"onClick={this.handleSubmit}>
                Edit Cat Profile
              </Button>
          </Form>
          {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
       </>
       
    )
  }
}

export default CatEdit