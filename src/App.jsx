import { useState } from 'react'
import { GeistProvider, CssBaseline, Page } from '@geist-ui/core'

import SongList from './Components/SongList'

function App() {


	return (
		<GeistProvider>
			<CssBaseline />
			<Page>
				<SongList />
			</Page>
		</GeistProvider>
	)
}

export default App
