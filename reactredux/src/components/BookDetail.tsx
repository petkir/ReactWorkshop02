import * as React from 'react';
import { BookState } from '../states/BookState';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
    bookState: BookState
}

class BookDetail extends React.Component<IProps, {}> {
  
  constructor(props : IProps){
    super(props);
  }

  render():JSX.Element {
    return(
        <div>
          <h2>book detail</h2>
          id : { this.props.bookState.id }
          <br/>
          title : { this.props.bookState.title }
        </div> 
    );
  }
}

export default BookDetail;
