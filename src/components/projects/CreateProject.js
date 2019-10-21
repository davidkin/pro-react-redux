import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div className="container">

                    <h5 className="grey-text text-darken-3">Create New Project</h5>

                    <form onSubmit={ this.handleSubmit } className="white">
                        <div className="grey-text text-darken-3">

                            <div className="input-field">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" onChange={ this.handleChange } />
                            </div>

                            <div className="input-field">
                                <label htmlFor="content">Content</label>
                                <textarea 
                                    className="materialize-textarea" 
                                    id="content" 
                                    onChange={ this.handleChange }
                                ></textarea>
                            </div>

                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">Create</button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default CreateProject;