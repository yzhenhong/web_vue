<template>
  <div class="map-wrap">
    <div class="overlay" @click="replay">
      <button id="replay">Replay</button>
    </div>
    <div id="mapBox"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { initMap, setMapSource, addLayerFunc } from "@/utils/mapBox";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";
export default defineComponent({
  name: "example-mapbox",
  setup() {
    let map: any = reactive({});
    let draw: any = reactive({});
    const locationStartStop = reactive([
      [-246.2616, 22.633],
      [-118.2281, 33.8409],
    ]);
    const route: any = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [locationStartStop[0], locationStartStop[1]],
          },
        },
      ],
    };
    const point: any = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: locationStartStop[0],
          },
        },
      ],
    };
    let lineDistance = turf.lineDistance(route.features[0]);
    let arc = [];
    const steps = 400;
    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
      let segment = turf.along(route.features[0], i);
      arc.push(segment.geometry.coordinates);
    }
    route.features[0].geometry.coordinates = arc;
    let counter = 0;
    onMounted(() => {
      map = initMap("mapBox");
      map.on("load", function () {
        createAirline();
      });
      setMapboxDraw();
    });
    const setMapboxDraw = () => {
      draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          line_string: true,
          // point: true,
          trash: true,
        },
      });
      map.addControl(draw, "top-left");
      map.on("draw.create", updateArea);
      map.on("draw.delete", updateArea);
      map.on("draw.update", updateArea);
    };
    const updateArea = (e: any) => {
      const data: any = draw.getAll();
      if (data.features.length > 0) {
        const area = turf.area(data);
        // restrict to area to 2 decimal points
        const rounded_area = Math.round(area * 100) / 100;
        console.log(rounded_area, "square meters");
      } else {
        if (e.type !== "draw.delete")
          console.log("Use the draw tools to draw a polygon!");
      }
    };
    const createAirline = () => {
      setMapSource(map, "route", route);
      setMapSource(map, "point", point);
      addLayerFunc(map, {
        id: "route",
        source: "route",
        type: "line",
        paint: {
          "line-width": 2,
          "line-color": "#007cbf",
        },
      });
      addLayerFunc(map, {
        id: "point",
        source: "point",
        type: "symbol",
        layout: {
          "icon-image": "airport-15",
          "icon-rotate": ["get", "bearing"],
          "icon-rotation-alignment": "map",
          "icon-allow-overlap": true,
          "icon-ignore-placement": true,
        },
      });
      animate();
    };
    const animate = () => {
      point.features[0].geometry.coordinates =
        route.features[0].geometry.coordinates[counter];

      point.features[0].properties.bearing = turf.bearing(
        turf.point(
          route.features[0].geometry.coordinates[
            counter >= steps ? counter - 1 : counter
          ]
        ),
        turf.point(
          route.features[0].geometry.coordinates[
            counter >= steps ? counter : counter + 1
          ]
        )
      );

      map.getSource("point").setData(point);

      if (counter < steps) {
        requestAnimationFrame(animate);
      }

      counter = counter + 1;
    };
    const replay = () => {
      point.features[0].geometry.coordinates = locationStartStop[0];
      map.getSource("point").setData(point);
      counter = 0;
      animate();
    };
    return {
      replay,
    };
  },
});
</script>

<style lang="less" scoped>
.map-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .overlay button {
    font: 600 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
    background-color: #3386c0;
    color: #fff;
    display: inline-block;
    margin: 0;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: #4ea0da;
    }
  }
  #mapBox {
    width: 100%;
    height: 100%;
    // max-height: 100%;
    border: 1px solid #ccc;
  }
}
</style>
