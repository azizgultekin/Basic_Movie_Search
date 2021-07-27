import React from 'react';

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault(); //sayfa yenilenmiyor 
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input  
                        
                            onChange={this.props.searchMovieProp} 
                            type="text" 
                            className="form-control" 
                            placeholder="Search a movie" 
                            //value={this.state.searchQuery}  controlled component
                        />
                    </div>
                </div>
            </form>
        );
    };
}

export default SearchBar;