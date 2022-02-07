import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

class CatShow extends Component {
  render() {

    const {cat} = this.props
    return(
       <>
          <h2> This is CatShow.js file section </h2>
          {cat && (
              <>
                <p>{cat.name}</p>
                <p>{cat.age}</p>
                <p>{cat.enjoys}</p>
                <img src={cat.image} alt="cute cat img" width="300px"></img>
                <br/>
                <NavLink to={`/catedit/${this.props.cat.id}`}>
                  <Button>Edit Cat Profile</Button>
                </NavLink>
              </>)}
        </>
    )
  }
}

export default CatShow