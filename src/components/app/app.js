import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App () {

	const data = [
		{name: 'Петр Д.', salary: 800, increase: false},
		{name: 'Валерий М.', salary: 1100, increase: false},
		{name: 'Черно С.', salary: 1600, increase: true},
		{name: 'Игорь Л.', salary: 2600, increase: false},
		{name: 'Варвара Г.', salary: 100000000, increase: true},
		{name: 'Елена Г.', salary: 90000, increase: true},

	]

	return (
		<div className="app">
			<AppInfo/>
			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	)
}

export default App;