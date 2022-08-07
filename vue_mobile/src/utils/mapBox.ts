import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

mapboxgl.accessToken = process.env.VUE_APP_MAP;

// Sets bounds as max
export const MAX_BOUNDS = [
  [113.66, 22.377], // Southwest coordinates，西南坐标
  [114.72, 22.878], // Northeast coordinates，东北坐标
];

const ZOOM = 10;

// starting position
export const CENTER = [114.057939, 22.543527];

// style URL 深色
export const STYLE_DARK = "mapbox://styles/mapbox/streets-v11";

// 初始化地图
export function initMap(domID: string) {
  const map = new mapboxgl.Map({
    container: domID,
    style: STYLE_DARK,
    center: CENTER,
    zoom: ZOOM,
  });

  // 切换语言
  map.addControl(
    new MapboxLanguage({
      defaultLanguage: "zh-Hans",
    })
  );

  // 比例尺
  map.addControl(
    new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: "metric",
    }),
    "bottom-left"
  );

  // 缩放控件
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

  // 切换全屏控件
  map.addControl(new mapboxgl.FullscreenControl(), "top-right");

  // 地图点击事件
  // map.on("click", (e: any) => {
  //   console.log("click", [
  //     Number(e.lngLat.lng.toFixed(4)),
  //     Number(e.lngLat.lat.toFixed(4)),
  //   ]);
  // });

  return map;
}
