import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component{
	constructor(props){
		super(props)
		this.state = {
			term: ''
		}
	}

	onValueChange = (e) => {
		const term =  e.target.value
		this.setState({term})
		this.props.onUpdateSearch(term)
	}

	render () {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Найти сотрудников"
				value={this.state.term}
				onChange={this.onValueChange}/>
		)
	}

}

export default SearchPanel;