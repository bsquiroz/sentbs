import { Button } from '@/components/ui/button'
import { years } from '@/constants/years'
import { Link } from 'wouter'

export const Home = () => {
	const getYearCurrent = new Date().getFullYear()

	return (
		<section>
			<ul className='grid gap-2'>
				{years.map(({ year }) => (
					<Link href={`/${year}`} key={year}>
						<Button disabled={getYearCurrent < Number(year)}>
							<a>{year}</a>
						</Button>
					</Link>
				))}
			</ul>
		</section>
	)
}
