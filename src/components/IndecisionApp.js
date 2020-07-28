import React from 'react';

import AddOptions from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';

class IndecisionApp extends React.Component {
    state = {
      options: []
    }
    handleDeleteOptions = () => {
      this.setState(() => ({options: []}));
    }
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
  
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1){
        return 'This option already exists';
      }
      this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    componentDidMount() {
      try {
        console.log (" += 1")
        const json = localStorage.getItem('options');
        const options = JSON.parse(json) || [];
        this.setState(() => ({options}));
      } catch (e) {
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json)
      }
    }
    componentWillUnmount() {
      console.log("will unmount")
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
            handleDeleteOption={this.handleDeleteOption}
            />
          <AddOptions
            handleAddOption={this.handleAddOption}
           />
        </div>
      )
    }
  }
export default IndecisionApp;