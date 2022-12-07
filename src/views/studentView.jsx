import Header from "../components/header";
import StudentGalleryView from "../components/studentGalleryView";
import { useState, useEffect } from "react";
import axios from "axios";
import StudentsTableView from "../components/studentTableView";

const baseURL = "http://localhost:3000/students/all";

const StudentView = () => {

	const [students, setStudents] = useState([]);

	useEffect(() => {
		axios
			.get(baseURL)
			.then((res) => {
			    setStudents(res.data);
				console.log(res);
                return setStudents(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
            console.log(students);
	}, []);

	return (
		<>
			<Header />

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

            <h1 className=" text-center font-sans font-bold text-3xl sm:text-7xl py-24">List of Students</h1>

			<StudentsTableView students={students} />

			<div className="hidden sm:block" aria-hidden="true">
				<div className=" py-20">
					<div className="border-t border-gray-200" />
				</div>
			</div>

			<StudentGalleryView students={students} />
		</>
	);
};
export default StudentView;
