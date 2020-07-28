import * as React from 'react';
import { RouteComponentProps, Route, Link } from 'react-router-dom';


export interface IProductsRouteParamProps extends RouteComponentProps {}

export interface IProductsRouteParamState {}
export interface IProduct {
  id:number;
  name:string;
  description:string;

}

export default class ProductsRouteParam extends React.Component<IProductsRouteParamProps, IProductsRouteParamState> {
private products:IProduct[] =[
  {id:1,name:'test1',description:'test1 desc'},
  {id:2,name:'test2',description:'test2 desc'},
  {id:3,name:'test3',description:'test3 desc'},
  {id:4,name:'test4',description:'test4 desc'},
]

  public render(): React.ReactElement<IProductsRouteParamProps> {
    const {match} = this.props;
    return (
      <div>
      <div style={{ display: 'block',  justifyContent: "space-between" }}>
       <div style={{
         float:'left',
         padding: '10px',
         width: '30%',
         background: '#f0f0f0',
         marginLeft:'auto' }}>
 
         <h3> Products</h3>
         <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> 
         {this.products.map(x=> {return (<li key={x.id}>
          <Link to={`${match.url}/${x.id}`}>
          {x.name}
        </Link>
         </li>);})}
          </ul>
       </div>
     </div>
     
     <Route path={`${match.url}/:productId`} render={ (props) => {
       //route params are strings !!!!
       const data =this.products.filter(f=>f.id === +props.match.params['productId'])
     return (<Product {...data[0]} />);
    
    } 
    }/>
     <Route exact path={match.url} 
       render={() => (
         <div style={{ textAlign:'center'}}>Please select a product.</div>
     )}/>
 
     </div>
 
    );
  }
}

export interface IProductProps extends IProduct {}

export interface IProductState {}



export  class Product extends React.Component<IProductProps, IProductState> {
  public render(): React.ReactElement<IProductProps> {
return (<div>
  <h2>{this.props.name}</h2>
  <p>{this.props.description}</p>
</div>);
  }
}
