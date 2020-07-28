import * as React from 'react';


export interface IProductsProps {}

export interface IProductsState {}

export default class Products extends React.Component<IProductsProps, IProductsState> {
  public render(): React.ReactElement<IProductsProps> {
    return (
      <div>
        Product page
      </div>
    );
  }
}
