import * as React from 'react';

import LeftLeft1 from './LeftLeft1';

export interface ILeft1Props {
    increment:()=>void
}

export interface ILeft1State {}

export default class Left1 extends React.Component<ILeft1Props, ILeft1State> {
  public render(): React.ReactElement<ILeft1Props> {
    return (
      <div>
        I'm the left Bullet
        <LeftLeft1 increment={this.props.increment} ></LeftLeft1>
      </div>
    );
  }
}
