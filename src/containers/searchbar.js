import React, {Component} from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: '', placeholder: 'some text'};

		this.onInputChange = this.onInputChange.bind(this);
	}
	onInputChange(event){
		this.setState({term: event.target.value});
	}
    render() {
        return (
            <form className="input-group"> 
	            <input 
	            	placeholder={this.state.placeholder}
	            	value={this.state.term} 
	            	onChange={this.onInputChange}
	            	className="form-control"
	            	/>
	            <span className="input-group-btn">
	            	<button type="submit" className="btn btn-primary">OK</button>
	            </span>
            </form>
        )
    }
}