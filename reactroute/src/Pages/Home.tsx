import * as React from 'react';


export interface IHomeProps {}

export interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  public render(): React.ReactElement<IHomeProps> {
    return (
      <div>
          Welcome Home
      </div>
    );
  }
}
