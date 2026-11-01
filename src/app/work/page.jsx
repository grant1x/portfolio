"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "frontend",
		title: "Qwerk",
		description:
			"A project that uses the Quasar framework to create a music clone mobile app, single page app, or browser extension.",
		stack: [{ name: "React" }, { name: "Css 3" }, { name: "Typescript" }],

		// todo: change the image link
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSdr4naPZqWX3WNzMD0rmkv2nxuXEdPHOeosvx0nQFQ&s",
		live: "https://spotifyclee.vercel.app",
		github: "https://github.com/grantt-3",
	},
	{
		num: "02",
		category: "fullstack",
		title: "Pxe",
		description:
			"When you are staying far from your home or when you go on a trip with friends it is very important to track your expenses so that you can manage things according to your budget and not overspent..",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
		// image broken, change the link
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfR7B-pI6hpiYjFSD_162wyvy9WCFFUFXa3De6lP5w-BdeNtj7mwjuWH3&s=10",
		live: "",
		github: "https://github.com/grantt-3",
	},
	{
		num: "03",
		category: "frontend",
		title: "BarScan",
		description:
			"Barcodes and QR codes have revolutionized the way we shop. Customers can now use their smartphones to scan a product and obtain information such as the price or where they can purchase it.",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
		// todo: broken image, change link
		image:
			"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuOhc5VM4y5eKva0aQTeJd8LSucQcot0Z15aGW9pD4PlT375_0",
		live: "",
		github: "https://github.com/grantt-3",
	},
	{
		num: "04",
		category: "frontend",
		title: "Noteboard",
		description:
			"Noteboard - Your Digital Thought Canvas. Visit http://noteboardd.vercel.app to start organizing your digital life today.",
		stack: [
			{ name: "Nextjs" },
			{ name: "tailwindcss" },
			{ name: "typescript" },
			{ name: "firebase" },
		],
		image:
			"https://clickup.com/blog/wp-content/uploads/2024/05/Note-Taking-Apps-Featured-Image.png",
		live: "https://noteboardd.vercel.app",
		github: "https://github.com/grantt-3",
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;
		// update project state based on current slide index
		setProject(projects[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px] ">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
						<div className="flex flex-col gap-[30px]">
							{/* outline num */}
							<div className="text-8xl leading-none font-semibold text-transparent text-outline">
								{project.num}
							</div>
							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
								{project.title}
							</h2>
							{/* project description */}
							<p className="text-white/60">{project.description} </p>
							{/* stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{/**remove the last comma */}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							{/**border */}
							<div className="border border-white/20"></div>
							{/**buttons */}
							<div className="flex items-center gap-4">
								{/**live project button */}
								{project.live && (
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Open live project"
									>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] flex justify-center items-center group">
													<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Live project</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</a>
								)}
								{/**github project button */}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Open GitHub repository"
								>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</a>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
											{/** overlay */}
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											{/** image */}
											<div className="relative h-full w-full">
												<Image
													src={project.image}
													fill
													className="object-cover"
													alt=""
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/** slider buttons */}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transistion-all "
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
