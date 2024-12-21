import { useEffect, useState } from 'react'
import songJSON from '../assets/songs.json'
import { Table } from '@geist-ui/core';

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
			{ artist: song.Artist, title: song.Name, }
		)
	})

	return (
		<Table data={songs}>
			<Table.Column prop="artist" label="artist" />
			<Table.Column prop="title" label="title" />
		</Table>
	)
}

export default SongList