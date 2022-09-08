import Head from 'next/head';
import { useState } from 'react';


export default function Home() {

	const [location, setLocation] = useState("Location")
	const [maxCustomers, setMaxCustomers] = useState(0)
	const [minCustomers, setMinCustomers] = useState(0)
	const [avgCookies, setAvgCookies] = useState(0)

	let report = {
		location: location,
		minCustomers: parseInt(minCustomers),
		maxCustomers: parseInt(maxCustomers),
		avgCookies: parseInt(avgCookies),
	}

	let tableReport = JSON.stringify(report)

	function cookieStandHandler(event) {
		event.preventDefault();
		setLocation(event.target.location.value)
		setMaxCustomers(event.target.maxCustomers.value)
		setMinCustomers(event.target.minCustomers.value)
		setAvgCookies(event.target.avgCookies.value)
		event.target.reset();
	}

	return (
		<div>
			<Head>
				<title>Cookie Stand Admin</title>
			</Head>
			<Header />
			<main>
				<StandForm onSubmit={cookieStandHandler} />
				<ReportTable location={tableReport} />
			</main>
			<Footer copyright="2022" />
		</div>
	)
}

function Header() {
	return (
		<header className='bg-emerald-400 text-4xl p-4'>
			<h1>Cookie Stand Admin</h1>
		</header>
	)
}

function Footer(props) {
	return (
		<footer className='bg-emerald-400 p-4'>
			<p>&copy;{props.copyright}</p>
		</footer>
	)
}

function StandForm(props) {
	return (
		<div className='flex justify-center space-x-1'>
			<form onSubmit={props.onSubmit} className='w-fit bg-emerald-200 rounded-lg m-4 p-4 space-x-1 space-y-3'>
				<h1 className='text-4xl relative text-center'>Create Cookie Stand</h1>
				<div className='flex inline-block space-x-2'>
					<p>Location</p>
					<input className='w-full'name="location" type="text" placeholder="location here" required />
				</div>
				<div className='flex inline-block space-x-3'>
					<div>
						<p>Minimum Customers per Hour</p>
						<input name="minCustomers" 
						placeholder="number here"type="text" />
					</div>
					<div>
						<p>Maximum Customers per Hour</p>
						<input name="maxCustomers" placeholder="number here"type="text" />
					</div>
					<div>
						<p>Average Cookies per Sale</p>
						<input name="avgCookies" placeholder='number here' type="text" />
					</div>
					<button className='px-4 py-2 bg-emerald-500'>Create</button>
				</div>
			</form>
		</div>
	);
}

function ReportTable(props) {
	return (
		<div className='space-y-8 m-5'>
			<p className='flex justify-center'>Report Table Coming Soon...</p>
			<p className='flex justify-center'>{props.location}</p>
		</div>
	)
}