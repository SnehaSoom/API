import React from 'react';
import Header from './components/Header';
import './App.css';
import { colors } from '@material-ui/core';
class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        <Header />
        <div className='container2'>
          <h1 style={{ color: "red" }}> LATEST STORIES </h1>  {
            items.map((item) => (
              <div className="container1 px-5">
                <div className="row-md-4 justify-content-md-center border">
                  <p className='fs-1 title'>Story: { item.id } {item.title.toUpperCase()} </p>
                  <p className='fs-6 px-5'>{item.body}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
