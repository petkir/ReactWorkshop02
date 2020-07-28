import * as React from 'react';
import RightRight from './RightRight';
import RightLeft from './RightLeft';

export interface IComponentProps {
    value1:number;
    value2:number;
}

export interface IComponentState {}

export default class Component extends React.Component<IComponentProps, IComponentState> {
  public render(): React.ReactElement<IComponentProps> {
    return (
      <div>
        <RightRight value={this.props.value1} />
        <RightLeft value={this.props.value2} />
      </div>
    );
  }
}
