import './app-info.css';

const AppInfo = ({dataLength}) => {

	return (
		<div className="app-info">
			<h1>Учет сотрудников компании</h1>
			<h2>Общее число сотрудников: {dataLength}</h2>
			<h2>Премию получат: </h2>
		</div>
	)
}

export default AppInfo;