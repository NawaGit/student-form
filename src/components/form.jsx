/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import countries from "../assets/data/countries";

const Form = () => {

	return (
		<>
			<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<svg
					className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
						fillOpacity=".3"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
					/>
					<defs>
						<linearGradient
							id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							{/* <stop stopColor="#9089FC" /> */}
							<stop stopColor="#0D518D" />
							{/* <stop offset={1} stopColor="#FF80B5" /> */}
							<stop offset={1} stopColor="#F96104" />
						</linearGradient>
					</defs>
				</svg>
			</div>

			<div className="hidden sm:block" aria-hidden="true">
				<div className=" py-20">
					{/* <div className="border-t border-gray-200" /> */}
				</div>
			</div>

			<div className="mt-10 sm:mt-0 px-12 sm:px-28">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Personal Information
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Use a permanent address where you can receive mail.
							</p>
						</div>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<form action="#" method="POST">
							<div className="overflow-hidden shadow sm:rounded-md">
								<div className="bg-white px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium text-gray-700"
											>
												First name
											</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autoComplete="given-name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700"
											>
												Last name
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-4">
											<label
												htmlFor="email-address"
												className="block text-sm font-medium text-gray-700"
											>
												Email address
											</label>
											<input
												type="text"
												name="email-address"
												id="email-address"
												autoComplete="email"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label
												htmlFor="mobile-number"
												className="block text-sm font-medium text-gray-700"
											>
												Mobile Number
											</label>
											<input
												type="tel"
												name="mobile-number"
												id="mobile-number"
												autoComplete="phone"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label
												htmlFor="age"
												className="block text-sm font-medium text-gray-700"
											>
												Age
											</label>
											<input
												type="number"
												name="age"
												min={0}
												id="age"
												autoComplete="age"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="country"
												className="block text-sm font-medium text-gray-700"
											>
												Country
											</label>
											<select
												id="country"
												name="country"
												autoComplete="country-name"
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
											>
												{/* <option>United States</option>
												<option>Canada</option>
												<option>Mexico</option> */}
												{countries.map((item, key) => (
													<option key={key}>{item.name}</option>
												))}
											</select>
										</div>

										<div className="col-span-6">
											<label
												htmlFor="street-address"
												className="block text-sm font-medium text-gray-700"
											>
												Street address
											</label>
											<input
												type="text"
												name="street-address"
												id="street-address"
												autoComplete="street-address"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-6 lg:col-span-2">
											<label
												htmlFor="city"
												className="block text-sm font-medium text-gray-700"
											>
												City
											</label>
											<input
												type="text"
												name="city"
												id="city"
												autoComplete="address-level2"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="region"
												className="block text-sm font-medium text-gray-700"
											>
												State / Province
											</label>
											<input
												type="text"
												name="region"
												id="region"
												autoComplete="address-level1"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="postal-code"
												className="block text-sm font-medium text-gray-700"
											>
												ZIP / Postal code
											</label>
											<input
												type="text"
												name="postal-code"
												id="postal-code"
												autoComplete="postal-code"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
