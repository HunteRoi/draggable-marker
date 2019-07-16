import React from 'react';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MABPOX_TOKEN,
});  

export default class CustomMap extends React.Component {
	render = () => {
		const {mapCenter, participants} = this.props;
		return (
		<Map // eslint-disable-next-line
			style='mapbox://styles/mapbox/streets-v9'
			containerStyle={{ height: '100vh', width: '100vw' }}
			zoom={[13]}
			center={mapCenter}
		>
			<Layer
				type="circle"
				id="participant-marker"
				paint={{
					'circle-stroke-width': 4,
					'circle-radius': 10,
					'circle-blur': 0.15,
					'circle-color': '#3770C6',
					'circle-stroke-color': 'white'
				}}
			>
				{participants.map(participant => (
				<Feature
					key={participant.guid}
					coordinates={participant.location}
					draggable
					onDragEnd={evt => this.props.onDragEnd(evt, participant.guid)}
				/>
				))}
			</Layer>
		</Map>
		);
	}
}
