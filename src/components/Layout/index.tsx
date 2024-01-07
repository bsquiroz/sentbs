import React from 'react'

import { Toaster } from '@/components/ui/toaster'

import { Navbar } from '../globals/Navbar'

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export const Layout = ({ children }: Props) => {
	return (
		<section className='bg-background text-primary'>
			<section className='max-w-xl m-auto'>
				<main className='min-h-screen p-5 flex flex-col gap-5'>
					<Navbar />
					{children}
					<Toaster />
				</main>
			</section>
		</section>
	)
}
