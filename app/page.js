import React from "react";


export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="z-10 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-bold text-3xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap bg-clip-text">
				JAMES SLINGER
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="z-10 my-12 text-center animate-fade-in">
				<h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 px-12 pb-3">
					Hi, I'm James, a Developer from Leeds, UK
				</h2>
				<h2 className="text-xs md:text-sm text-zinc-400 px-20 sm:px-16">
					JavaScript | Next.js | React | Node.js | Tailwind CSS | Python | Flask | + more
				</h2>
			</div>
		</div>
	);
}
