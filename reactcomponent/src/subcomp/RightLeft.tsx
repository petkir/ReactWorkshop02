import * as React from 'react';

export interface IRightLeftProps {
    value:number;
}

export interface IRightLeftState {}

export default class RightLeft extends React.Component<IRightLeftProps, IRightLeftState> {
  public render(): React.ReactElement<IRightLeftProps> {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}
