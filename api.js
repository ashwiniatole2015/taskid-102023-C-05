

    import React, { Component } from 'react';
 
 
class Api extends Component {
 
    constructor(props) {
        super(props)   
        this.state = {
            data: []
        }
         
       
    fetch('https://jsonplaceholder.typicode.com/coments')
    .then(response => response.json())
    .then(data => {
        this.setState({
            data: data
        })
    })
    .catch(error => console.log(error))
}
renderListing() {
    let dataList = []
    this.state.data.map(record => {
        return dataList.push(`<tr key={data.id}>{data.name}</li>`)
    })

    return dataList;
}

render() {
    return (
        `<tr>
            {this.renderListing()}
        </tr>`



        <div>
      <Table >
        <thead>
        <tr>
         
        </tr>
        </thead>
        <tbody>
        {items && items.map(item => {
          return (
            <tr>
              <th scope="row">{item.postId}</th>
              <th scope="row">{item.id}</th>
              <th scope="row">{item.name}</th>
              <th scope="row">{item.email}</th>
              <th scope="row">{item.body}</th>

              <td>{item.items.map(item => <tr>{item.postId}</tr>)}</td>
              <td>{item.items.map(item => <tr>{item.id}</tr>)}</td>
              <td>{item.items.map(item => <tr>{item.name}</tr>)}</td>
              <td>{item.items.map(item => <tr>{item.email}</tr>)}</td>
              <td>{item.items.map(item => <tr>{item.body}</tr>)}</td>


            </tr>
          );
        })}
        </tbody>
      </Table>
    </div>
    );
}

}






  
