import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{name: 'Петр Д.', salary: 800, increase: false, id: 1},
				{name: 'Валерий М.', salary: 1100, increase: false, id: 2},
				{name: 'Черно С.', salary: 1600, increase: true, id: 3},
				{name: 'Игорь Л.', salary: 2600, increase: false, id: 4},
				{name: 'Варвара Г.', salary: 100000000, increase: true, id: 5},
			]
		}
		this.maxId = 5
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		this.maxId = this.maxId + 1
		this.setState(({data}) => {
			return {
				data: data.concat({name: name, salary: salary, increase: false, id: this.maxId})
			}
		})
	}

	render() {
		
		return (
			<div className="app">
				<AppInfo/>
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}/>
				<EmployeesAddForm
					onAdd= {this.addItem}/>
			</div>
		)
	}
}

export default App;