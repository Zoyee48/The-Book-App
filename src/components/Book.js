import React from 'react';
import { Link } from "react-router-dom"

const Book = (props) => {
    return (
        <div className="col s12 m3">
            <div className="card medium">

                <div className="card-image" style={{ alignSelf: 'center' }}>
                    {props.book.volumeInfo.imageLinks === undefined ? (<img src={"https://picsum.photos/200/300"} style={{ width: 150, height: 400 }} alt="test" />) :
                        (<img src={props.book.volumeInfo.imageLinks.thumbnail} style={{ width: 150, height: 200 }} alt={"Book Title"} />)}
                </div>

                <div>
                    <span className="card-title" style={{ fontFamily: "Arial", margin: 5, color: "black", fontSize: 15 }}>{props.book.volumeInfo.title}</span>
                </div>

                <div className="card-content">
                    <p>{props.book.volumeInfo.authors}</p>
                    <p>{props.book.volumeInfo.publishedDate}</p>
                </div>

                <div className="card-action">
                    <Link to={{
                        pathname: "/book/" + props.title,
                        title: props.title,
                        author: props.author,
                        published: props.published,
                        image: props.image,
                        description: props.description,
                        props: props.props
                    }}>See Details</Link>
                </div>
                
            </div>
        </div>
    )
}
export default Book;