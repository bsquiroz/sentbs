import { Button } from '@/components/ui/button'
import { months } from '@/constants/months'
import { Link, useLocation } from 'wouter'

export const PageYear = () => {
	const getMonthCurrent = new Date().getMonth()

	const [location] = useLocation()

	const year = Number(location.split('/')[1])

	return (
		<div>
			<header>
				<h2 className='text-2xl'>{year}</h2>
			</header>

			<section className='grid grid-cols-2 gap-2'>
				{months.map(({ name }, index) => (
					<Link href={`/${year}/${name}`} key={name}>
						<Button disabled={getMonthCurrent < index}>{name}</Button>
					</Link>
				))}
			</section>
		</div>
	)
}
