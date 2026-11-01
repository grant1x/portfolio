"use client";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaPython,
	FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
	icon: "",
	title: "Experience",
	description:
		"Developed complex user interfaces with typeScript, React, shadcn-ui and ensured a user-friendly experience. Implemented and tested application functionality to ensure successful operations across all platforms. Regularly debugged code and maintained quality standards.",
	items: [
		{
			company: "Virvent",
			position: "Software Engineer",
			duration: "2023",
		},
		{
			company: "Intermen",
			position: "Frontend Developer",
			duration: "2024",
		},
		{
			company: "Greensol",
			position: "Frontend Engineer / QA Engineer",
			duration: "2025-2026",
		},
	],
};
// education data
const education = {
	icon: "",
	title: "Education",
	items: [
		{
			institution: "Nnamdi Azikwe University",
			location: "Anambra, Nigeria",
			degree: "Bachelor of Science",
			duration: "2023 - 2026",
		},
	],
};

//skills data
const skills = {
	title: "Skills",
	description:
		"Develop, test, and maintain high-quality user interfaces using modern front-end technologies. Translate UI/UX design wireframes into code, producing visually appealing and user-friendly interfaces. Ensure the technical feasibility of UI/UX designs and optimize applications for maximum speed and scalability..",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "css 3",
		},
		{
			icon: <FaJs />,
			name: "javascript",
		},
		{
			icon: <FaReact />,
			name: "react.js",
		},
		{
			icon: <FaPython />,
			name: "python",
		},
		{
			icon: <FaNodeJs />,
			name: "nodejs",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js",
		},
	],
};
const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[calc(100svh-7rem)] xl:min-h-[calc(100svh-8.5rem)] flex items-center justify-center"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
									{experience.items.map((item, index) => {
										return (
											<li
												key={index}
												className="bg-[#232329] min-h-[150px] xl:h-[184px] py-6 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
											>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl text-center lg:text-left">
													{item.position}
												</h3>
												<div className="flex items-center gap-3">
													{/* dot */}
													<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
													<p className="text-white/60">{item.company}</p>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>

						{/* education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px] w-[700px] ">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] text-center lg:text-left ">
														{item.degree}
													</h3>
													{/* <p>{item.location}</p> */}
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* skills */}
						<TabsContent value="skills" className="w-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 ">
										{skills.description}
									</p>
								</div>

								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
