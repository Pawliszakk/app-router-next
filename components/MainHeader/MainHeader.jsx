import logoImg from '../../assets/logo.png';
import classes from './MainHeader.module.css';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<Link href="/" className={classes.logo}>
				<Image
					src={logoImg.src}
					alt="A plate with food on it"
					width={300}
					height={300}
					priority
				/>
				NextLevel Food
			</Link>

			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink href="/meals">Meals</NavLink>
					</li>
					<li>
						<NavLink href="/community">Community</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
