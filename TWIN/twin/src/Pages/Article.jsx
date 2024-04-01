import '../styles/article.scss';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

function Article() {
	const [article, setArticle] = useState([]);
	useEffect(() => {
		fetch('https://midaiganes.irw.ee/api/list?limit=500')
			.then((res) => res.json())
			.then((data) => setArticle(data) || []);
	}, []);
	return (
		<div>
			<Navbar />
			<div className='main-container'>
				<div className='container'>
					<div className='wrapper'>
						<div className='header-wrapper'>
							<h1 className='header'>
								DOLORE IPSUM ADIPISICING VELIT EU UT NISI
							</h1>
						</div>
						<div className='p-wrapper'>
							<p>
								Deserunt amet excepteur irure ex occaecat ut officia nostrud
								tempor labore velit aliqua minim laborum. Est labore nostrud et
								occaecat sunt duis Lorem laborum. Minim magna do laboris magna
								consequat dolor nostrud Lorem officia. Enim nostrud sit minim
								sunt commodo ad. Veniam eu elit commodo sit consectetur. Est ad
								esse exercitation fugiat non ipsum aute ut culpa ullamco
								consectetur nostrud qui. Ex dolore ea velit laborum anim tempor
								cillum eu.
							</p>
						</div>
						<div className='img-wrapper'>
							<img
								className='img-cover'
								src='../src/assets/images/article.jpg'
								alt=''
								title='Excepteur tempor mollit adipisicing non magna.'
							/>
							<img
								className='img-hover'
								src='../src/assets/images/article.jpg'
								alt=''
								title='Excepteur tempor mollit adipisicing non magna.'
							/>
							<div className='img-title'>
								Excepteur tempor mollit adipisicing non magna.
							</div>
						</div>
						<div className='content'>
							<p>
								Sit labore non velit consectetur. Ea labore aliqua nulla aliqua
								ullamco consectetur do eu minim veniam nulla aliqua. Magna esse
								cillum pariatur ipsum ad officia anim voluptate duis veniam amet
								fugiat elit ex.
							</p>
							<p>
								Quis amet proident laborum consequat quis velit. Elit fugiat ad
								eu pariatur ex nostrud enim eiusmod eu pariatur aute esse. Velit
								officia quis consequat irure mollit ea deserunt cillum aliqua
								magna reprehenderit in aliqua. Est qui laboris proident aliqua
								minim ipsum nulla et tempor in nostrud sunt ex. Cillum aute aute
								voluptate reprehenderit fugiat.
							</p>
							<p>
								Cupidatat elit cillum occaecat ea ipsum. Aliquip nostrud
								pariatur est aliquip cupidatat veniam quis. Elit amet proident
								dolore labore incididunt consectetur. Consequat eu cillum aute
								ea ex adipisicing labore. Veniam veniam do consequat incididunt
								aute aliquip.
							</p>
							<p>
								Occaecat sit commodo quis in fugiat amet occaecat quis dolore ea
								commodo velit officia adipisicing. Velit officia minim
								consectetur eiusmod laboris cillum minim. Cupidatat pariatur non
								tempor pariatur.
							</p>
							<p>
								Velit fugiat elit irure occaecat ea mollit irure laboris officia
								nostrud. Officia esse veniam laboris sit consectetur. Ex do
								cupidatat dolor ut cupidatat duis elit velit adipisicing nulla
								velit. Ad cupidatat pariatur do amet nulla dolor ipsum sit ad
								occaecat in minim fugiat. Ea cupidatat sint ex adipisicing
								cupidatat eiusmod ad sint aliquip nisi elit. Anim tempor est
								nisi anim commodo labore in ex sit ad. Nulla veniam commodo
								aliquip nostrud aliquip duis cupidatat sint dolor ea ut veniam
								fugiat.
							</p>
							<p>
								Excepteur cillum est tempor labore cillum proident deserunt ea
								est. Velit reprehenderit magna voluptate est exercitation
								officia aliquip consequat amet occaecat veniam amet ut et.
								Mollit minim labore exercitation nulla nisi sunt ullamco ea
								consequat qui nisi consectetur ex nostrud.
							</p>
							<p>
								Deserunt aliqua nisi irure proident labore amet adipisicing
								nulla anim proident laboris. Lorem ex qui nostrud sunt nostrud
								esse et ad non. Reprehenderit Lorem consequat quis mollit
								ullamco consequat eiusmod commodo id duis reprehenderit officia.
								In eiusmod elit dolor adipisicing tempor nulla eiusmod do.
								Nostrud id ea duis anim velit aute magna irure laboris anim. Ad
								non consequat incididunt nostrud reprehenderit ullamco elit
								cillum.
							</p>
							<p>
								Consectetur veniam quis est veniam quis irure consequat nostrud
								officia Lorem do consectetur minim. Reprehenderit excepteur ut
								eu esse aute nostrud laboris. Laborum fugiat et dolore
								adipisicing occaecat anim velit ad voluptate duis sint.
							</p>
							<p>
								Et cillum in fugiat laborum exercitation sit commodo dolor do
								culpa anim dolor et dolor. Magna eiusmod laboris id dolore
								aliqua ut incididunt Lorem ipsum amet dolor. Sint occaecat sit
								magna qui nisi reprehenderit esse irure consequat nisi aliqua
								cupidatat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Article;
