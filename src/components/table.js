import React from 'react';


export default class Table extends React.Component {
    constructor(props){
      super(props)
      console.log(process.env.REACT_APP_KEY)
    }
    render() {
        return (
            <div>
              Table Component
            </div>
        )
    }
}