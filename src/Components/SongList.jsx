import { useEffect, useState } from 'react'
import songJSON from '../assets/songs.json'
import { Box, TextField } from '@mui/material';

function SongList() {
	const [list, setList] = useState(songJSON.sort((a,b) => {
		const artistA = a.Artist.toUpperCase().replaceAll(/"|'/g, '');
		const artistB = b.Artist.toUpperCase().replaceAll(/"|'/g, '');

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
			sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
		>
			<TextField
				id="standard-basic"
				label="Search..."
				value={searchValue}
				placeholder='Search...'
				onChange={(e) => {
					console.log('e', e.target.value)
					setSearchValue(e.target.value);
					
				}}
				variant='standard'
			/>
			<div className='songs-wrapper'>
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
			</div>
		</Box>
		
	)
}

export default SongList