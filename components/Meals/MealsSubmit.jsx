'use client';
import { useFormStatus } from 'react-dom';

const MealsSubmit = () => {
	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending}>
			{pending ? 'Sharing your meal...' : 'Share meal'}
		</button>
	);
};

export default MealsSubmit;
