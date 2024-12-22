import { useEffect, useState } from 'react'
import songJSON from '../assets/songs.json'
import { Box, Stack, TextField } from '@mui/material';

function SongList() {
	const [list, setList] = useState(songJSON.sort((a,b) => {
		const artistA = a.Artist.toUpperCase().replaceAll(/"|'|[|]/g, '');
		const artistB = b.Artist.toUpperCase().replaceAll(/"|'|[|]/g, '');

		if (artistA < artistB) {
			return -1;
		}

		if (artistA > artistB) {
			return 1;
		}

		return 0;
	}));
	const [searchValue, setSearchValue] = useState('');

	return (
		<Box
			component="section"
			sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
		>
			<TextField
				id="standard-basic"
				label="Enter artist or song title"
				value={searchValue}
				placeholder='Search...'
				onChange={(e) => {
					setSearchValue(e.target.value);
					
				}}
				variant='standard'
			/>
			<div className='songs-wrapper'>
				<Stack spacing={2}>
					{list.map((song, i) => {
						if ((song.Artist.toLowerCase().includes(searchValue.toLowerCase()) || song.Name.toLowerCase().includes(searchValue.toLowerCase())) || !searchValue)
							return (
									<div className='song' key={`${i}-${song.songlength}-${song.Charter}`}>
										<h3>{song.Artist}</h3>
										<p>{song.Name}</p>
									</div>
								)
							})
					}
				</Stack>
			</div>
		</Box>
		
	)
}

export default SongList