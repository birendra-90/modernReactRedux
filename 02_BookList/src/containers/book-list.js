import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className='list-group-item'
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }
}

let mapStateToProps = (state) => { //returns a piece of state as this components props
  return {books: state.books};
}

let mapDispatchToProps = (dispatch) => { //anything returned from this is props on the container
  return bindActionCreators({selectBook: selectBook}, dispatch); //dispatch sends the actions to the reducers
  //this container will now have this.props.selectBook that will call the selectBook action creator
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
