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
          <h2> Add your cute cat here </h2>
          <Form>
              <FormGroup>
                <Label for="name">
                  Cat Name
                </Label>
                <Input
                  name="name"
                  placeholder="Please input your cat's name here."
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="age">
                  Cat Age
                </Label>
                <Input
                  name="age"
                  placeholder="Please select your cat's age here."
                  type="number"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="enjoys">
                  Cat's Enjoyable Things
                </Label>
                <Input
                  name="enjoys"
                  placeholder="Please input your cat's enjoyable things here."
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="image">
                  Cat Profile Picture
                </Label>
                <Input
                  name="image"
                  placeholder="Please input a url link of your cat's picture."
                  type="url"
                  onChange={this.handleChange}
                />
              </FormGroup>

          <Button onClick={this.handleSubmit} name='submit'> Add Your Cat</Button>
        </Form>
        {this.state.submitted && <Redirect to='/catindex'/>}
       </>
       
    )
  }
}

export default CatNew