import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '../../components/Meals/MealsGrid';
import { getMeals } from '../../lib/meals';
import { Suspense } from 'react';

export const metadata = {
	title: 'All meals',
	description: 'Delicious meals, shared by a food-loving community.',
};

const Meals = async () => {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created{'  '}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose your favourite recipe and cook it for yourself. It is easy and
					fun!
				</p>

				<p className={classes.cta}>
					<Link href="/meals/share">Share your favourite recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense
					fallback={<p className={classes.loading}>Fetching your meals...</p>}
				>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
