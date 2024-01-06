import Link from 'next/link';
import logoImg from '../../assets/logo.png';
import classes from './MainHeader.module.css';
import Image from 'next/image';

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
						<Link href="/meals">Browse Meals</Link>
					</li>
					<li>
						<Link href="/community">Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
