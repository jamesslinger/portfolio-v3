"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { projectInfo } from "../components/projectInfo";
import { motion } from "framer-motion";
import { Github } from 'lucide-react';


export default function Projects() {
	return (
		<motion.div className="mx-auto py-20 from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<motion.div className="container flex items-center justify-center mx-auto">
				<motion.div className="grid w-full mx-auto mt-8 grid-cols-1 gap-4 mx-auto sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					{projectInfo.map((p) => (
						<Card key={p.id}>
							<Link
								href={p.href}
								target="_blank"
								className="p-4 pt-6 pb-20 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-12 lg:py-16 md:p-10"
							>
								<span
									className="absolute w-px h-4/5 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex w-72 h-56 sm:w-64 sm:h-52 md:w-80 md:h-64 lg:w-72 lg:h-56 xl:w-96 xl:h-72 text-sm duration-1000 border-2 rounded-xl text-zinc-200 bg-zinc-200 group-hover:text-white group-hover:bg-zinc-400 border-zinc-500 group-hover:border-zinc-200 overflow-hidden justify-center">
									<span className="object-cover object-top overflow-hidden hover:scale-110 transition duration-500">
										{p.img}
									</span>
								</span>

								<div className="z-10 flex flex-col items-center">
									<span className="text-center text-lg sm:text-lg duration-150 text-zinc-200 group-hover:text-white font-display">
										{p.title}
									</span>
									<span className="mt-4 text-base text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 drop-shadow">
										{p.desc}
									</span>
								</div>
							</Link>
							<Link
								href={p.ghlink}
								target="_blank"
								className="z-20 absolute bottom-3 right-3 items-center justify-center"
							>
								<span className="relative flex w-11 h-11 border rounded-full border-zinc-200 items-center justify-center hover:bg-zinc-400 transition duration-500">
									<Github size={20} color="#e4e4e7" />
								</span>
							</Link>
						</Card>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}