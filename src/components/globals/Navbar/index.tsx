import { LeftIcon } from '@/components/icons/left-icon'
import { cn } from '@/lib/utils'
import { useLocation } from 'wouter'

import { ToggleTheme } from '../ToggleTheme'

export const Navbar = () => {
	const [location] = useLocation()

	return (
		<header>
			<button onClick={() => window.history.back()}>
				<LeftIcon
					className={cn('cursor-pointer invisible hidden fill-primary', {
						'visible block': location !== '/'
					})}
				/>
			</button>

			<ToggleTheme />
			<h1 className='text-2xl font-bold text-center'>SENTBS</h1>
		</header>
	)
}
