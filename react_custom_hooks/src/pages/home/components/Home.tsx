import { Card, Space } from 'antd';
import { cardLists } from '../../../shared/data/hooks';
import { HooksListInterface } from '../../../typings/interface';
import '../styles/home.css';

const { Meta } = Card;

const Home = () => {
	return (
		<div className='hooks-container flex-center'>
			<div className='image-container'>
				<img src='https://wallpapercave.com/wp/wp4923981.jpg' alt='App Logo' />
			</div>
			<h1 className='app-title'>React Custom Hooks</h1>
			<Space size={[40, 40]} wrap>
				{cardLists.map(
					(l: HooksListInterface): JSX.Element => (
						<Card
							style={{
								backgroundImage: `url(${l.imageUrl})`,
							}}
							key={l.name}
							className='hooks-card'
							bordered={false}
							hoverable
						>
							<Meta
								title={l.name}
								description={
									<>
										<span>{l.description}</span>
										<a className='hooks-link' href={`/hooks/${l.id}`}>
											See More
										</a>
									</>
								}
							/>
						</Card>
					)
				)}
			</Space>
		</div>
	);
};

export default Home;
