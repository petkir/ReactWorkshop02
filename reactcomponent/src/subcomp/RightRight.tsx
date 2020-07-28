import * as React from 'react';

export interface IRightRightProps {
    value:number;
}

export interface IRightRightState {}

export default class RightRight extends React.Component<IRightRightProps, IRightRightState> {
  public render(): React.ReactElement<IRightRightProps> {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}
