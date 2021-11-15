import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = () => {
	return (
		<ul className="app-list list-group">
			<EmployeesListItem name="Петр Д." salary={800}/>
			<EmployeesListItem name="Валерий М." salary={1100}/>
			<EmployeesListItem name="Черно С." salary={1600}/>
		</ul>
	)
}

export default EmployeesList;