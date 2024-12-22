import { useEffect, useState } from 'react'
import songJSON from '../assets/songs.json'

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

	const songs = list.map((song, i) => {
		return (
			<div className='song' key={`${i}-${song.songlength}-${song.Charter}`}>
				<h3>{song.Artist}</h3>
				<p>{song.Name}</p>
			</div>
		)
	})

	return (
		<div className='songs-wrapper'>
			{songs}
		</div>
	)
}

export default SongList