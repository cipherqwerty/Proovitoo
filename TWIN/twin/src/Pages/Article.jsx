import '../styles/article.scss';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

function Article() {
	const [article, setArticle] = useState({});

	useEffect(() => {
		fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
			.then((res) => {
				if (!res.ok) {
					throw new Error('Failed to fetch data');
				}
				return res.json();
			})
			.then((data) => {
				setArticle(data);
			});
	}, []);

	return (
		<div>
			<Navbar />
			<div className='main-container'>
				<div className='container'>
					{Object.keys(article).length !== 0 && (
						<>
							<div key={article.id} className='title-wrapper'>
								<h1>{article.title}</h1>
							</div>
							<div
								className='text-p-wrapper'
								dangerouslySetInnerHTML={{ __html: article.intro }}
							></div>
							<div className='img-wrapper'>
								<img
									className='img-back'
									src={article.image.large}
									alt={article.image.alt}
									title={article.image.title}
								/>
								<img
									className='img-front'
									src={article.image.medium}
									alt={article.image.alt}
									title={article.image.title}
								/>
								<div className='img-title'>
									<div>{article.image.title}</div>
								</div>
							</div>
							<div
								className='p-wrapper'
								dangerouslySetInnerHTML={{ __html: article.body }}
							></div>
							<div className='btn-wrapper'>
								{article.tags.map((tag, index) => (
									<button key={index}>{tag}</button>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default Article;
