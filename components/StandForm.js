export default function StandForm(props) {
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
					<button className='px-4 py-2 bg-emerald-500' type="submit">Create</button>
				</div>
			</form>
		</div>
	);
}