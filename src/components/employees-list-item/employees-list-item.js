import { Component } from 'react'
import './employees-list-item.css'

class EmployeesListItem  extends Component {
	constructor(props) {
		super(props)
		this.state = {
			increase: false,
			like: false
		}
	}

	onIncrease = () => {
		this.setState(({increase}) => ({
			increase: !increase
		}))
	}

	onRaise = () => {
		this.setState(({like}) => ({
			like: !like
		}))
	}

	render() {
		const {name, salary, onDelete} = this.props
		const {increase, like} = this.state

		let classNamesLi ="list-group-item d-flex justify-content-between"
		if (increase) {
			classNamesLi += " increase"
		}
		if (like) {
			classNamesLi += " like"
		}

		return (
			<li className={classNamesLi}>
				<span className="list-group-item-label" onClick={this.onRaise}>{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
				<div className="d-flex justify-content-center align-items-center">
					<button className="btn-cookie btn-sm" onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>
					<button className="btn-trash btn-sm"
					onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;