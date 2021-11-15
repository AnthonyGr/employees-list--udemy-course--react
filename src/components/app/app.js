import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App () {

	const data = [
		{name: 'Петр Д.', salary:800 },
		{name: 'Валерий М.', salary:1100 },
		{name: 'Черно С.', salary:1600 },
		{name: 'Игорь Л.', salary:2600 }

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