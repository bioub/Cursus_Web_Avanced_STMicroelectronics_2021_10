// class Counter {
//   state = {
//     count: 0,
//   };

//   handleClick() {
//     console.log(this);
//   }

//   render() {
//     setTimeout(this.handleClick, 1000);
//   }
// }

// const counter = new Counter();
// counter.render();



class Counter {
  state = {
    count: 0,
  };

  handleClick() {
    console.log(this);
  }

  render() {
    setTimeout(this.handleClick, 1000);
  }
}

const counter = new Counter();
counter.render();
