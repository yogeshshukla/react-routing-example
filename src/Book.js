import React from  "react";
class Book extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>Book Component of {this.props.match.params.bookId}</div>
        )
    }
}
export default Book;