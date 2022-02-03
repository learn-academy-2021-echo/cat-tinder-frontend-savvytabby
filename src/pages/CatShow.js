import React, { Component } from 'react';

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
                <img src={cat.image} alt="cute cat img" width="400px"></img>
              </>)}
        </>
    )
  }
}

export default CatShow