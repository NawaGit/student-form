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
import { useState, useEffect } from "react";
import axios from "axios";


const baseURL = "http://localhost:3000/students/new";

const Form = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		age: "",
		college: "",
		department: "",
		country: "",
		address: "",
		city: "",
		state: "",
		zipCode: "",
	};
	const [values, setValues] = useState(initialValues);
	const [finalValues, setFinalValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validate = (values) => {
		const errors = {};
		if (!values.firstName) {
			errors.firstName = "First Name is required";
		} else if (values.firstName.length > 20) {
			errors.firstName = "First Name must be less than 20 characters";
		}
		if (!values.lastName) {
			errors.lastName = "Last Name is required";
		} else if (values.lastName.length > 20) {
			errors.lastName = "Last Name must be less than 20 characters";
		}
		if (!values.phone) {
			errors.phone = "Phone is required";
		}
		if (!values.age) {
			errors.age = "Age is required";
		}
		if (!values.college) {
			errors.college = "College is required";
		}
		if (!values.department) {
			errors.department = "Department is required";
		}
		if (!values.country) {
			errors.country = "Country is required";
		}
		if (!values.address) {
			errors.address = "Address is required";
		}
		if (!values.city) {
			errors.city = "City is required";
		}
		if (!values.state) {
			errors.state = "State is required";
		}
		if (!values.zipCode) {
			errors.zipCode = "Zip Code is required";
		}
		return errors;
	};

	const emailValidate = (values) => {
		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const errors = {};
		if (!values.email) {
			errors.email = "Email is required";
		} else if (values.email.length > 30) {
			errors.email = "Email must be less than 30 characters";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "Email is invalid";
		}
		return errors;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});

		if (values.email) {
			setErrors(
				emailValidate({
					...values,
					[name]: value,
				})
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log("Submitted Successfully");
			setFinalValues(values);
			setValues(initialValues);
			setIsSubmitting(false);
			axios.post(baseURL, finalValues).then((response) => {
				console.log(response);
			});
		}
	}, [handleSubmit]);

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
						<form action="#" method="POST" onSubmit={handleSubmit}>
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
												name="firstName"
												id="first-name"
												autoComplete="given-name"
												value={values.firstName}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">
												{errors.firstName}
											</p>
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
												name="lastName"
												id="last-name"
												autoComplete="family-name"
												value={values.lastName}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">
												{errors.lastName ? errors.lastName : ""}
											</p>
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
												name="email"
												id="email-address"
												autoComplete="email"
												value={values.email}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">{errors.email}</p>
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
												name="phone"
												id="mobile-number"
												autoComplete="phone"
												value={values.phone}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">{errors.phone}</p>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="postal-code"
												className="block text-sm font-medium text-gray-700"
											>
												Age
											</label>
											<input
												type="number"
												name="age"
												id="age"
												min="0"
												autoComplete="age"
												value={values.age}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">{errors.age}</p>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label
												htmlFor="college"
												className="block text-sm font-medium text-gray-700"
											>
												College
											</label>
											<input
												type="text"
												name="college"
												id="college"
												autoComplete="college"
												value={values.college}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">
												{errors.college}
											</p>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label
												htmlFor="department"
												className="block text-sm font-medium text-gray-700"
											>
												Department
											</label>
											<input
												type="text"
												name="department"
												id="department"
												autoComplete="department"
												value={values.department}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">
												{errors.department}
											</p>
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
												value={values.country}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
											>
												{/* <option>United States</option>
												<option>Canada</option>
												<option>Mexico</option> */}
												{countries.map((item, key) => (
													<option key={key}>{item.name}</option>
												))}
											</select>
											<p className="text-red-400">
												{errors.country}
											</p>
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
												name="address"
												id="street-address"
												autoComplete="street-address"
												value={values.address}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">
												{errors.address}
											</p>
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
												value={values.city}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">{errors.city}</p>
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
												name="state"
												id="region"
												autoComplete="address-level1"
												value={values.state}
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">{errors.state}</p>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="postal-code"
												className="block text-sm font-medium text-gray-700"
											>
												ZIP / Postal code
											</label>
											<input
												type="number"
												name="zipCode"
												id="postal-code"
												autoComplete="postal-code"
												value={values.zipCode}
												min="100000"
												max="999999"
												onChange={handleChange}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
											/>
											<p className="text-red-400">
												{errors.zipCode}
											</p>
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
