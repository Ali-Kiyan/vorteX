import React, { useState } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export const Gm = (props) => {

const [viewport, setViewport] = useState({
  latitude:  -27.897575560605485,
  longitude: 153.29237339772322,
  zoom: 20
});

const data = {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Polygon',
  'coordinates': [
  [
    [
      [
      153.29237339772322,
      -27.897575560605485
      ],
      [
      153.29240999654635,
      -27.897600934719307
      ],
      [
      153.29243164508424,
      -27.897612892477547
      ],
      [
      153.29242807749804,
      -27.89762571619733
      ],
      [
      153.2924182348173,
      -27.897642434997323
      ],
      [
      153.29240518208437,
      -27.89764887031301
      ],
      [
      153.29238402481764,
      -27.897632940370542
      ],
      [
      153.29236010912982,
      -27.897619001393466
      ],
      [
      153.29233897564296,
      -27.8976119164061
      ],
      [
      153.29237339772322,
      -27.897575560605485
      ]
      ]
  ]
  ]
  }
  },
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Point',
  'coordinates': [-121.415061, 40.506229]
  }
  },
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Point',
  'coordinates': [-121.505184, 40.488084]
  }
  },
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Point',
  'coordinates': [-121.354465, 40.488737]
  }
  }
  ]
  }


return(
<MapGL
  style={{ width: '100%', height: '100%' }}
  mapStyle='mapbox://styles/mapbox/light-v9'
  accessToken={process.env.REACT_APP_MAP_API_KEY}
  onViewportChange={setViewport}
  {...viewport}
>
  <Source id='route' type='geojson' data={data} />
  <Layer
    id='route'
    type='line'
    source='route'
    layout={{
      'line-join': 'round',
      'line-cap': 'round'
    }}
    paint={{
      'line-color': '#888',
      'line-width': 8
    }}
  />
</MapGL>
)
}
