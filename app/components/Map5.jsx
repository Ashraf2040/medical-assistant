'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
	const mapRef = React.useRef(null);

	useEffect(() => {
		const initializeMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY ,
				version: 'quartely',
			});

			const { Map } = await loader.importLibrary('maps');

            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude)
                console.log("Longitude is :", position.coords.longitude)})

			const locationInMap = {
				lat: 21.4241,
				lng: 39.8173,
			};

			// MARKER
			const { Marker } = (await loader.importLibrary(
				'marker'
			)) ;

			const options = {
				center: locationInMap,
				zoom: 15,
				mapId: 'NEXT_MAPS_TUTS',
			};

			const map = new Map(mapRef.current , options);

			// add the marker in the map
			const marker = new Marker({
				map: map,
				position: locationInMap,
			});
		};

		initializeMap();
	}, []);

	return <div className="h-[600px]" ref={mapRef} />;
}
