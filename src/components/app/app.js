import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App () {

	const data = [
		{name: 'Петр Д.', salary: 800, increase: false, id: 1},
		{name: 'Валерий М.', salary: 1100, increase: false, id: 2},
		{name: 'Черно С.', salary: 1600, increase: true, id: 3},
		{name: 'Игорь Л.', salary: 2600, increase: false, id: 4},
		{name: 'Варвара Г.', salary: 100000000, increase: true, id: 5},
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