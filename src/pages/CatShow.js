import React, { Component } from 'react';



class CatShow extends Component {
  render() {
    const {cat} = this.props
    return(
       <>
          <h2> This is CatShow.js file section </h2>
          <p>{cat.name}</p>
          <p>{cat.age}</p>
          <p>{cat.enjoys}</p>
       </>
       
    )
  }
}

export default CatShow