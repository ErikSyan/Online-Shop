import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [ 
                {
                    key : "all",
                    name: "Բոլորը"
                },
                {
                    key : "Atorner",
                    name: "Աթոռներ"
                },
                {
                    key : "Bazmocner",
                    name: "Բազմոցներ"
                },
                {
                    key : "Luyser",
                    name: "Լամպեր"
                }
            ]
        }
    }



  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.choosCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories