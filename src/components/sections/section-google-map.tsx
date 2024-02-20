"use client";

import React, { useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { Skeleton } from "@/components/ui/skeleton";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.881832,
  lng: -87.623177,
};

const markers = [
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 41.881832, lng: -87.623177 },
  },
];

const GOOGLE_MAPS_KEY = "your-api-key";

function SectionGoogleMap() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_KEY,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
    map.setZoom(14);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const onToggleOpen = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      map?.setZoom(14);
    }, 1000);
  }, [map]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoom: 14,
        minZoom: 7,
        maxZoom: 20,
      }}
    >
      {markers.map(({ id, name, position }) => (
        <MarkerF key={id} position={position} onClick={onToggleOpen}>
          {isOpen && (
            <InfoWindowF onCloseClick={onToggleOpen}>
              <div>{name}</div>
            </InfoWindowF>
          )}
        </MarkerF>
      ))}
    </GoogleMap>
  ) : (
    <Skeleton className="h-[400px] w-full" />
  );
}

export default React.memo(SectionGoogleMap);
