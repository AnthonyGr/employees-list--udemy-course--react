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
				{name: 'Alex Petter', salary: 800, increase: false, rise: true, id: 1},
				{name: 'Mick Jagger', salary: 1100, increase: false, rise: true, id: 2},
				{name: 'Sergio Blacket', salary: 1600, increase: true, rise: false, id: 3},
			],
			term: '',
			filter: 'all'
		}
		this.maxId = 3
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
				data: data.concat({name: name, salary: salary, increase: false, rise: false, id: this.maxId})
			}
		})
	}
//Еще как вариант
// 	addItem = (name, salary) => {
// 		const newItem = {
// 			 name, 
// 			 salary,
// 			 increase: false,
// 			 id: this.maxId++
// 		}
// 		this.setState(({data}) => {
// 			 const newArr = [...data, newItem];
// 			 return {
// 				  data: newArr
// 			 }
// 		});
//   }

	onToggleProp = (id, prop) => {
		// Как вариант
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id)

		// 	const old = data[index]
		// 	const newItem = {...old, increase: !old.increase}
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

		// 	return {
		// 		data: newArr
		// 	}
		// })
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item
			})
		}))
	}

	searchEmployee = (items, term) => {
		if (term.length === 0) {
			return items
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term})
	}

	//Действия, которые совершает user - указывать через on
	onFilterSelect = (filter) => {
		this.setState({filter})
	}

	filterPost = (items, filter) => {
			switch (filter) {
				case 'rise':
					return items.filter(item => item.rise)
				case 'moreThen1000':
					return items.filter(item => item.salary > 1000)
				case 'increase':
						return items.filter(item => item.increase)
				default:
					return items
			}		
		}
	
	render() {
		const {data, term, filter} = this.state
		const employees = this.state.data.length
		const increased = this.state.data.filter(item => item.increase).length
		const visibleData = this.filterPost(this.searchEmployee(data, term), filter)
		return (
			<div className="app">
				<AppInfo
					employees={employees}
					increased={increased}/>
				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}/>
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm
					onAdd= {this.addItem}/>
			</div>
		)
	}
}

export default App;