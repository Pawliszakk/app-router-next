import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '../../../lib/meals';

const MealDeatailPage = async ({ params }) => {
	const meal = await getMeal(params.slug);
	console.log(meal);
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} fill />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${'Email'}`}>{meal.creator_email}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: '...',
					}}
				></p>
			</main>
		</>
	);
};

export default MealDeatailPage;
