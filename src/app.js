class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = '!!!Put your life in the hands of a computer';
    // const options = ['Thing one', "Thing two", "Thing three"];
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          />
        <AddOptions />
      </div>
    )
  }
}
class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return(
      <div>
        <ol>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}></Option>)
        }
      </ol>
      <button onClick={this.props.handleDeleteOptions}>Remove All!</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}

class AddOptions extends React.Component {
  handAddOption (e){
    e.preventDefault();
  
    const option = e.target.elements.option.value.trim();
  
    if (option) {
      alert(option)
      e.target.elements.option.value = '';
    }
    else {
      alert("No inout was captured")
    }
  };
  render() {
    return(
      <div >
        <form onSubmit={this.handAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))