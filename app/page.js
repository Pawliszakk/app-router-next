import Link from 'next/link';
import Header from '../components/header';

export default function Home() {
	console.log('rendering...');
	return (
		<main>
			<Header />
			<p>🔥 Let&apos;s get started! 🔥</p>

			<Link href="/about">About us</Link>
		</main>
	);
}
