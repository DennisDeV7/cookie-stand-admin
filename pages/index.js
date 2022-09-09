import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StandForm from '../components/StandForm';
import ReportTable from '../components/ReportTable';



export default function Home() {

	const [tableReport, setReport] = useState([]);
	
	function cookieStandHandler(event) {
		event.preventDefault();
		const location = event.target.location.value
		const maxCustomers = event.target.maxCustomers.value
		const minCustomers = event.target.minCustomers.value
		const avgCookies = event.target.avgCookies.value
		
		const reports = {
			location: location,
			minCustomers: parseInt(minCustomers),
			maxCustomers: parseInt(maxCustomers),
			avgCookies: parseInt(avgCookies),
			hourlySales: [48,42,30,24,42,24,36,42,42,48,36,42,24,36]
		};
		setReport([...tableReport, reports]);
		console.log(tableReport)
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