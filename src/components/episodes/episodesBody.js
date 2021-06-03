import React from 'react'
import { Wrapper, Container } from './episodesBody_style'
import Episode from './episode'


const EpisodesBody = ({data}) =>{
console.log(data);
	const episodes = data.data.allStrapiEpisode;
	return(
		<Wrapper>
			<Container>
				{episodes.edges.map(edge=>
						<Episode data={edge} key={edge.node.id}/>
					)}
			</Container>
		</Wrapper>
		)
}

export default EpisodesBody