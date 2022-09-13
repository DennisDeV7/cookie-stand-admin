import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StandForm from '../components/StandForm';
import ReportTable from '../components/ReportTable';

import { useAuth } from '../contexts/auth.js';
import useResource from '../hooks/useResource';

export default function Home() {
	const { user, login, logout } = useAuth();
	const { resources, loading, createResource, deleteResource } = useResource();

	return (
		<div>
			<Head>
				<title>Cookie Stand Admin</title>

			</Head>
			<main>
				{user ? (
					<CookieStandAdmin onCreate={createResource} stands={resources} loading={loading} onDelete={deleteResource} logout={logout} />
				) : (
					<LoginForm login={login} />
				)}
			</main>
		</div>
	)
}

function LoginForm() {
	const { login } = useAuth();

	async function handleSubmit(event) {
		event.preventDefault()
		login(event.target.username.value, event.target.password.value)
	}

	return (
		<div className="w-8/12 m-3 mx-auto border-2 border-solid p-7 rounded-xl bg-emerald-300 border-emerald-500">
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label className="block m-2 mt-0 font-bold text-center">USER NAME</label>
					<input className="block w-full p-2 m-2 mx-auto" name="username" type="text" placeholder="User Name" required />

					<label className="block m-2 mt-5 font-bold text-center">PASSWORD</label>
					<input className="block w-full p-2 m-2 mx-auto" name="password" type="text" placeholder="password" required></input>

					<button className="block w-full p-4 mx-auto mt-12 rounded bg-emerald-500" onClick={login}>SIGN IN</button>
				</fieldset>
			</form>

		</div>
	)
}

function CookieStandAdmin({ onCreate, stands, loading, onDelete }) {

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
			hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
		};
		setReport([...tableReport, reports]);
		onCreate(reports);
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
				<ReportTable location={tableReport}/>
			</main>
			<Footer copyright="2022" />
		</div>
	)
}