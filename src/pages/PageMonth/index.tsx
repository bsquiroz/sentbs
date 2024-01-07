import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { appStore } from '@/store/app-store'
import { useLocation } from 'wouter'

export const PageMonth = () => {
	const [location] = useLocation()
	const { showDialog, setShowDialog } = appStore((state) => state)

	const Month = location.split('/')[2]
	const { toast } = useToast()

	const editing = false

	const handleSent = () => {
		toast({
			title: editing ? 'Gasto editado ♻' : 'Gasto agregado ✅',
			description: editing ? 'Gasto editado con exito' : 'Gasto agregado con el mayor de los exitos'
		})
		setShowDialog(false)
	}

	return (
		<section>
			<header className='flex justify-between'>
				<h2>Mes {Month}</h2>
				<p>$ 0.000</p>
			</header>

			<Dialog open={showDialog}>
				<DialogTrigger asChild>
					<Button onClick={() => setShowDialog(true)}>{editing ? 'Editar gasto' : 'Agregar gasto'}</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>{editing ? 'Editando gasto' : 'Agregando gasto'}</DialogTitle>
						<DialogDescription>
							{editing
								? 'Tienes la posibilidad de editar el gasto, ya sea agregando otro nombre o quiza un valor diferente'
								: 'Aqui debes de agregar el nombre del gasto y la cantidad que gastaste'}
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-right'>
								Nombre
							</Label>
							<Input
								id='name'
								className='col-span-3'
								placeholder='Comidad, Salida fin de semana, Etc...'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='value' className='text-right'>
								Cantidad
							</Label>
							<Input id='value' className='col-span-3' placeholder='100.000' type='number' />
						</div>
					</div>
					<DialogFooter>
						<Button
							type='submit'
							onClick={handleSent}
							className={cn('bg-green-500 hover:bg-green-400', {
								'bg-yellow-500 hover:bg-yellow-400': editing
							})}
						>
							{editing ? 'Editar gasto' : 'Agregar gasto'}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</section>
	)
}
