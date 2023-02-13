import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const MapChart = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#36adcf"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[-75.1652, 39.9526]}>
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
  );
};

export default MapChart;
