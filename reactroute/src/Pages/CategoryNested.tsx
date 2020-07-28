import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';


export interface ICategoryNestedProps extends RouteComponentProps {}

export interface ICategoryNestedState {}

export default class CategoryNested extends React.Component<ICategoryNestedProps, ICategoryNestedState> {
  public render(): React.ReactElement<ICategoryNestedProps> {
        const {match} = this.props ;
    return (
        
  <div>   
      <ul>
            <li><Link to={`${match.url}/catagory1`}>Category1</Link></li>
            <li><Link to={`${match.url}/category2`}>Categoy2</Link></li>
            <li><Link to={`${match.url}/category3`}>Category3</Link></li>
       
          </ul>
          <Route path={`${match.path}/:name`} 
          render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}
          />
          </div>
    );
  }
}
