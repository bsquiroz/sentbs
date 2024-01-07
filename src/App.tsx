import { Layout } from './components/Layout'
import { RouterApp } from './router/RouterApp'
import { ThemeProvider } from './store/theme-provider'

export const App = () => {
	return (
		<ThemeProvider>
			<Layout>
				<RouterApp />
			</Layout>
		</ThemeProvider>
	)
}
