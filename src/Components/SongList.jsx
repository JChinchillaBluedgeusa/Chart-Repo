import { useEffect, useState } from 'react'
import songJSON from '../assets/songs.json'

function SongList() {
	const [list, setList] = useState(songJSON.sort((a,b) => {
		const artistA = a.Artist.toUpperCase();
		const artistB = b.Artist.toUpperCase();

		if (artistA < artistB) {
			return -1;
		}

		if (artistA > artistB) {
			return 1;
		}

		return 0;
	}));

	const songs = list.map((song) => {
		return (
			<>
				<h3>{song.Artist}</h3>
				<p>{song.Name}</p>
			</>
		)
	})

	return (
		<>
			{songs}
		</>
	)
}

export default SongList