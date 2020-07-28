import * as React from 'react';


export interface ILeftLeft1Props {
    increment:()=>void
}

export interface ILeftLeft1State {}

export default class LeftLeft1 extends React.Component<ILeftLeft1Props, ILeftLeft1State> {
  public render(): React.ReactElement<ILeftLeft1Props> {
    return (
      <div>
        <button onClick={()=> {
            console.log('btn clicked')
            this.props.increment()
            }} >Click Me</button>
      </div>
    );
  }
}
