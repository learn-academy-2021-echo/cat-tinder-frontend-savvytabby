import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCat: {
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
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    // setting state to the updated form content
    this.setState({newCat: newCat})
  } 

  handleSubmit = () => {
    this.props.createCat(this.state.newCat)
    this.setState({submitted: true})
  }

  render() {
    return(
       <>
          <h2> This is CatNew.js file section </h2>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.newCat.name}
              />
            </FormGroup>
            <Button name="submit" onClick={this.handleSubmit}>
            Create a New Profile
          </Button>
          </Form>
          {this.state.submitted && <Redirect to="/catindex" />}
       </>
       
    )
  }
}

export default CatNew