import './globals.css';
import MainHeader from '../components/MainHeader/MainHeader';
import MainHeaderBackground from '../components/MainHeader/MainHeaderBackground';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community from all around the world.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<MainHeaderBackground/>
				<MainHeader />
				{children}
			</body>
		</html>
	);
}
