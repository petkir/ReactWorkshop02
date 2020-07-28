import * as React from 'react';
import {  RouteComponentProps } from 'react-router-dom';


export interface ICategoryProps extends RouteComponentProps {}

export interface ICategoryState {}

export default class Category extends React.Component<ICategoryProps, ICategoryState> {
  public render(): React.ReactElement<ICategoryProps> {
    return (
      <div>
        Category
      </div>
    );

  }
}
