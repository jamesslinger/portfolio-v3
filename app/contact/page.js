"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { motion } from "framer-motion";


const socials = [
	{
		id: 0,	
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/jamesslinger/",
		label: "LinkedIn",
		handle: "James Slinger",
	},
	{
		id: 1,
		icon: <Mail size={20} />,
		href: "mailto:jamesxslinger@gmail.com",
		label: "Email",
		handle: "jamesxslinger@gmail.com",
	},
	{
		id: 2,
		icon: <Github size={20} />,
		href: "https://github.com/jamesslinger",
		label: "Github",
		handle: "jamesslinger",
	},
];

export default function Contact() {
	return (
		<motion.div className="from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<motion.div className="container flex items-center justify-center min-h-screen mx-auto">
				<motion.div className="grid w-full grid-cols-1 gap-5 mx-auto sm:mt-0 lg:grid-cols-3 lg:gap-8">
					{socials.map((s) => (
						<Card key={s.id}>
							<Link
								href={s.href}
								target="_blank"
								className="py-8 px-12 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 lg:py-24 lg:pb-48 md:p-10"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-200 bg-zinc-500">
									{s.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="text-center text-base sm:text-base duration-150 text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-base text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
