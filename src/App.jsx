import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SongList from './Components/SongList'
import { Container } from '@mui/material';

function App() {
	return (
		<Container fixed>
			<SongList />
		</Container>
	)
}

export default App
