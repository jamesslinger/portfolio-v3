import "../global.css";
import { Orbitron, Montserrat } from 'next/font/google'
import { NavBar } from "./components/Nav";
import Particles from "./components/particles";
import { Analytics } from '@vercel/analytics/react';


const orbitron = Orbitron({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
})

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap'
  })

export const metadata = {
	title: 'James Slinger Portfolio',
	description: 'Full-Stack Developer',
  }

export default function RootLayout({ children }) {
	return (
	  <html lang='en' className={`${orbitron.variable} ${montserrat.variable}`}>
		<body>
			<NavBar />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={125}
			/>
			{ children }
			<Analytics />
		</body>
	  </html>
	)
  }
