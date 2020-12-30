import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="container">
            <div className='row'>
                <section className="col s6 offset-s3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className='input-field'>
                            <input placeholder="Search for Books" type="text" onChange={props.handleChange}></input>
                        </div>

                        <div className="col s6 push-s3">
                            <select color="black" className="browser-default dropdown select-css" defaultValue="Sort" onChange={props.handleSort}>
                                <option disabled value="Sort">Sort by: </option>
                                <option value="Ascending">A-Z</option>
                                <option value="Descending">Z-A</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>
                        
                    </form>
                </section>
            </div>
        </div >

    )
}

export default SearchBar;