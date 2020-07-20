class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = '!!!Put your life in the hands of a computer';
    const options = ['Thing one', "Thing two", "Thing three"]
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
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
  handlePick() {
    alert('Hi')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    // alert('You just clicked the button!')
    console.log(this.props.options);
  }
  render() {
    return(
      <div>
        <ol>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}></Option>)
        }
      </ol>
      <button onClick={this.handleRemoveAll}>Remove All!</button>
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