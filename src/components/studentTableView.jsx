const StudentsTableView = ({ students }) => {
	return (
		<>
			<div className="px-48 sm:px-16">
				<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="py-3 px-6">
									Name
								</th>
								<th scope="col" className="py-3 px-6">
									Email
								</th>
								<th scope="col" className="py-3 px-6">
									Mobile Number
								</th>
								<th scope="col" className="py-3 px-6">
									Age
								</th>
								<th scope="col" className="py-3 px-6">
									College
								</th>
								<th scope="col" className="py-3 px-6">
									Department
								</th>
								<th scope="col" className="py-3 px-6">
									Address
								</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student) => (
								<tr key={students.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
									<th
										scope="row"
										className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{student.firstName} {student.lastName}
									</th>
									<td className="py-4 px-6">{student.email}</td>
									<td className="py-4 px-6"> {student.phone} </td>
									<td className="py-4 px-6"> {student.age} </td>
									<td className="py-4 px-6"> {student.college} </td>
									<td className="py-4 px-6"> {student.department} </td>
									<td className="py-4 px-6">
										{student.address}, {student.city}, {student.state}
										, {student.country}, {student.zipCode}
									</td>
								</tr>
							))}

							{/* <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Apple MacBook Pro 17"
								</th>
								<td className="py-4 px-6">Sliver</td>
								<td className="py-4 px-6">Laptop</td>
								<td className="py-4 px-6">$2999</td>
							</tr>
							<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Microsoft Surface Pro
								</th>
								<td className="py-4 px-6">White</td>
								<td className="py-4 px-6">Laptop PC</td>
								<td className="py-4 px-6">$1999</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Magic Mouse 2
								</th>
								<td className="py-4 px-6">Black</td>
								<td className="py-4 px-6">Accessories</td>
								<td className="py-4 px-6">$99</td>
							</tr>
							<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Google Pixel Phone
								</th>
								<td className="py-4 px-6">Gray</td>
								<td className="py-4 px-6">Phone</td>
								<td className="py-4 px-6">$799</td>
							</tr>
							<tr>
								<th
									scope="row"
									className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Apple Watch 5
								</th>
								<td className="py-4 px-6">Red</td>
								<td className="py-4 px-6">Wearables</td>
								<td className="py-4 px-6">$999</td>
							</tr> */}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default StudentsTableView;
