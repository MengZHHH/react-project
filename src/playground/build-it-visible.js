class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: true
    };
    this.changeVisibility = this.changeVisibility.bind(this);
  }
  changeVisibility() {
    this.setState((prevState) => {
      return {
        visibile: !prevState.visibile
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.changeVisibility}>{this.state.visibile ? 'Hide the details' : 'Show the details'}</button>
        {this.state.visibile && (<p>This is something you can see!!</p>)}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
