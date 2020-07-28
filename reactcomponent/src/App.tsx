import React from 'react';

import './App.css';
import Left1 from './subcomp/Left1';
import Right1 from './subcomp/Right1';


export interface IAppProps {}

export interface IAppState {
  value1:number;
  value2:number;

}

export default class App extends React.Component<IAppProps, IAppState> {

constructor(props:IAppProps) {
  super(props);
  this.state={
    value1:2,
    value2:1,
  }
  this.incrementValue= this.incrementValue.bind(this);
}
  public render(): React.ReactElement<IAppProps> {
      return (
        <div className="App">
          <header className="App-header">
          <Left1 increment={this.incrementValue} ></Left1>
          <Right1 value1={this.state.value1} value2={this.state.value2} />
          </header>
         
        </div>
      );
  }

  private incrementValue() {
    console.log('got click ');
    this.setState({value1:this.state.value1+1});
  }
}

