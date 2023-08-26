import Image from 'next/image';
import favImg from '/public/images/fav_img1.jpg';
import ffImg from '/public/images/ff_img1.jpg';
import todoImg from '/public/images/todo_img1.jpg';
import ytdlImg from '/public/images/ytdl_img1.jpg';
import pyImg from '/public/images/python-logo.png';
import azImg from '/public/images/amazon_logo.png';
import lxImg from '/public/images/linux_logo.png';
import pfv2Img from '/public/images/pfv2_img1.jpg';


export const projectInfo = [
    {
        id: 0,
		title: 'Flight Flavour App',
		img: <Image width={'100%'} height={'100%'} src={ffImg} alt="project image" />,
		href: 'https://flightflavour.com/',
		ghlink: 'https://github.com/jamesslinger/flight_flavour',
		desc: 'Built with React, JavaScript, and utilising components from Material UI. Find cheap flight deals and book them quickly via an API/affiliate link.'
    },
	{
        id: 1,
		title: 'To-Do List App',
		img: <Image width={'100%'} height={'100%'} src={todoImg} alt="project image" />,
		href: 'https://to-do-list-j8mu.onrender.com/',
		ghlink: 'https://github.com/jamesslinger/To-Do-List',
		desc: 'My take on a simple \'to-do\' list app built using JavaScript, jQuery, Node.js, Express.js and EJS. Data stored using MongoDB & Mongoose.'
	},
	{
        id: 2,
		title: 'YouTube Audio Downloader App',
		img: <Image width={'100%'} height={'100%'} src={ytdlImg} alt="project image" />,
		href: 'https://ytdlaudio.onrender.com/',
		ghlink: 'https://github.com/jamesslinger/YTDLAudio',
		desc: 'This app allows you to download the audio steam from any YouTube video in MP3 format. It\'s built using Python, Flask, Jinja, Bootstrap 5, jQuery, Pytube and the Bytes.IO modules.'
    },
	{
        id: 3,
		title: 'Favourite Things App',
		img: <Image width={'100%'} height={'100%'} src={favImg} alt="project image" />,
		href: 'https://favourite-things-app.onrender.com/',
		ghlink: 'https://github.com/jamesslinger/Favourite-Things-App',
		desc: 'A \'CRUD\' app that displays a flip card list of my favourite movies and songs. Items can be created, updated and deleted on demand. It\'s built with Python, Flask, Jinja, Bootstrap 5, PostgreSQL/SQLAlchemy, and WTForms. Data is pulled from the Google/YouTube API and TMDB API.'
    },
	{
        id: 4,
		title: 'Speed Test Tweeter',
		img: <Image width={'100%'} height={'100%'} src={lxImg} alt="project image" />,
		href: 'https://twitter.com/Bird_App_User_',
		ghlink: 'https://github.com/jamesslinger/SpeedtestTweet',
		desc: 'Created as a project to hone my skills with Python and Linux. Utilising a Raspberry Pi I\'ve setup a Python application to automatically run a speed test API three times daily using built-in Linux task scheduler Cron. It then writes the test results to a CSV file and tweets them to my bot account using the Twitter API. If the speed isn\'t as promised by my ISP a different tweet is posted.',
    },
	{
        id: 5,
		title: 'Amazon Price Checker',
		img: <Image width={'100%'} height={'100%'} src={azImg} alt="project image" />,
		href: 'https://github.com/jamesslinger/Amazon-Price-Checker',
		ghlink: 'https://github.com/jamesslinger/Amazon-Price-Checker',
		desc: 'This project allowed me to practice Web Scraping with Beautiful Soup 4 and email with SMTPLIB. It checks daily the price of a product on Amazon and if it\'s below a certain price I receive an email alerting me which also contains the page link for fast purchase.'
    },
	{
        id: 6,
		title: 'Will It Rain Today?',
		img: <Image width={'100%'} height={'100%'} src={pyImg} alt="project image" />,
		href: 'https://github.com/jamesslinger/Amazon-Price-Checker',
		ghlink: 'https://github.com/jamesslinger/Will-It-Rain',
		desc: 'One of the first projects I completed that utilizes two different APIs and sends SMS messages. Using Python this app checks the OpenWeatherMap API for the latest weather forcast in my area and if it\'s going to rain, It sends me an SMS message using the Twilio API.'
    },
	{
        id: 7,
		title: 'Portfolio v2',
		img: <Image width={'100%'} height={'100%'} src={pfv2Img} alt="project image" />,
		href: 'https://github.com/jamesslinger/portfolio-v2',
		ghlink: 'https://github.com/jamesslinger/portfolio-v2',
		desc: 'My old personal portfolio site, built using Python and the web framework Flask with Bootstrap 5.'
    }
]