import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SongList from './Components/SongList'
import { Container, CssBaseline, StyledEngineProvider } from '@mui/material';

function App() {
	return (
		<StyledEngineProvider>
			<CssBaseline />
			<Container maxWidth="md">
				<SongList />
			</Container>
		</StyledEngineProvider>
		
	)
}

export default App
