import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [data, setData] = useState([])
	const [isLoading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
			})
			.then((data) => setData([...data]))
		setLoading(false)
	}, [])

	return (
		<div className='App'>
			<header className='App-header'>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<ul className='App-link'>
						{data.map((el) => (
							<li className='App-logo-spin' key={el.id}>
								<h1>Photos</h1>
								<h2>{el.id}</h2>
								{el.title}
								<img
									className='App-logo'
									src={el.thumbnailUrl}
								/>
							</li>
						))}
					</ul>
				)}
			</header>
		</div>
	)
}

export default App
