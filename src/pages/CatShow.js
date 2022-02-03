import React, { Component } from 'react';



class CatShow extends Component {
  render() {

    const {cat} = this.props
    return(
       <>
          <h2> This is CatShow.js file section </h2>
          <p>{this.props.cats && cat.name}</p>
          <p>{this.props.cats && cat.age}</p>
          <p>{this.props.cats && cat.enjoys}</p>
       </>
       
    )
  }
}

export default CatShow