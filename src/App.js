import React, { Component } from 'react';
import './App.css';
import ImageBox from './ImageBox';
import Counter from './Counter';

class App extends Component {
  state = {
    src: 'https://pp.userapi.com/c841424/v841424217/204e8/s5wN8CYmN3g.jpg',
    images: [],
    count: 0,
  }

  increaseCounter = () => {
    const { count, images, src } = this.state;
    images.push( src );
    this.setState({
      count: count + 1,
      images: images
    })
  }

  decreaseCounter = () => {
    const { count, images } = this.state;
    if (count > 0) {
      images.pop();
      this.setState({
        count: count - 1,
        images: images
      })
    }
  }

  render() {
    const {
      images,
      count,
    } = this.state;
    return (
      <div className="App">
        <ImageBox 
          images={images}
        />     
        <Counter 
          count={count}
          increaseCounter={this.increaseCounter}
          decreaseCounter={this.decreaseCounter}
        />
      </div>
    );
  }
}

export default App;
