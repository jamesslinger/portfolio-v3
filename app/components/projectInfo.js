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
		desc: 'Find flight destination ideas to match your budget and easily book live deals via affiliate integration',
		stack: 'Stack: React.js, JavaScript, Material UI, EmailJS.com API, Kiwi.com API'
    },
	{
        id: 1,
		title: 'To-Do List App',
		img: <Image width={'100%'} height={'100%'} src={todoImg} alt="project image" />,
		href: 'https://todo.jamesslinger.com/',
		ghlink: 'https://github.com/jamesslinger/To-Do-List',
		desc: 'My \'to-do\' list app with easy to create, delete or move notes and current full date',
		stack: 'Stack: JavaScript, jQuery, Node.js, Express.js, EJS, MongoDB Atlas, Mongoose'
	},
	{
        id: 2,
		title: 'YouTube Audio Downloader App',
		img: <Image width={'100%'} height={'100%'} src={ytdlImg} alt="project image" />,
		href: 'https://ytd.jamesslinger.com',
		ghlink: 'https://github.com/jamesslinger/YTDLAudio',
		desc: 'Download only the audio from any YouTube video in MP3 format with different file size options listed',
		stack: 'Stack: Python, Flask, Jinja, jQuery, Bootstrap 5, Pytube, Bytes.IO, Google API'
    },
	{
        id: 3,
		title: 'Favourite Things App',
		img: <Image width={'100%'} height={'100%'} src={favImg} alt="project image" />,
		href: 'https://favs.jamesslinger.com/',
		ghlink: 'https://github.com/jamesslinger/Favourite-Things-App',
		desc: 'A \'CRUD\' app that displays flip cards of my favourite movies and songs in a countdown list. The cards include box art, synopsis, links to the relevant movie database or YouTube track page, and my rating/review',
		stack: 'Stack: Python, Flask, Jinja, Bootstrap 5, PostgreSQL, SQLAlchemy, WTForms, Google API, TheMovieDB.org API'
    },
	{
        id: 4,
		title: 'Speed Test Tweeter',
		img: <Image width={'100%'} height={'100%'} src={lxImg} alt="project image" />,
		href: 'https://twitter.com/Bird_App_User_',
		ghlink: 'https://github.com/jamesslinger/SpeedtestTweet',
		desc: 'Created as a project to hone my skills with Python and Linux. My application runs a broadband speed test three times daily and writes the results to CSV. It then posts on a Twitter bot account and if the speed isn\'t as promised by my ISP a different tweet is posted',
		stack: 'Stack: Python, Selenium, Twitter API, Speedtest.net API, Raspberry Pi 4, Linux/Cron scheduler'
    },
	{
        id: 5,
		title: 'Amazon Price Checker',
		img: <Image width={'100%'} height={'100%'} src={azImg} alt="project image" />,
		href: 'https://github.com/jamesslinger/Amazon-Price-Checker',
		ghlink: 'https://github.com/jamesslinger/Amazon-Price-Checker',
		desc: 'This project allowed me to practice Web Scraping skills. It checks daily the price of a product on Amazon and if it\'s below a certain price I receive an email alerting me which also contains the page link for fast purchase',
		stack: 'Stack: Python, Beautiful Soup 4, SMTPLIB, Google API'
    },
	{
        id: 6,
		title: 'Will It Rain Today?',
		img: <Image width={'100%'} height={'100%'} src={pyImg} alt="project image" />,
		href: 'https://github.com/jamesslinger/Will-It-Rain',
		ghlink: 'https://github.com/jamesslinger/Will-It-Rain',
		desc: 'One of the first projects I completed that utilizes two different APIs and sends SMS messages. It checks the latest weather forcast in my area and if it\'s going to rain, It sends me an SMS message',
		stack: 'Stack: Python, OpenWeatherMap API, Twilio API'
    },
	{
        id: 7,
		title: 'Portfolio v2',
		img: <Image width={'100%'} height={'100%'} src={pfv2Img} alt="project image" />,
		href: 'https://pv2.jamesslinger.com',
		ghlink: 'https://github.com/jamesslinger/portfolio-v2',
		desc: 'My previous personal portfolio site',
		stack: 'Stack: Python, Flask, Bootstrap 5'
    }
]