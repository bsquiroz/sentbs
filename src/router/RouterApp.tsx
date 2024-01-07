import { Home } from '@/pages/Home'
import { PageMonth } from '@/pages/PageMonth'
import { PageYear } from '@/pages/PageYear'
import { Route } from 'wouter'

export const RouterApp = () => {
	return (
		<>
			<Route path='/' component={Home} />
			<Route path='/:year' component={PageYear} />
			<Route path='/:year/:month' component={PageMonth} />
		</>
	)
}
