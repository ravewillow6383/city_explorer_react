import React, { Component, Fragment } from 'react'

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query : ''
        }
    }

    handleChange = e => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.state.query)
    }
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.query} onChange={this.handleChange}></input>
                    <button>search</button>
                </form>
            </Fragment>
        );
    }
}

export default SearchForm
