"use client";

import React, { useState, useEffect, useMemo } from "react";
import DeckGL from "@deck.gl/react";
import { PathLayer, IconLayer, GeoJsonLayer } from "@deck.gl/layers";

export default function IndiaCoverageMap() {
  const viewState = {
    longitude: 80,
    latitude: 23,
    zoom: 3.3,
    pitch: 36,
    bearing: 0,
  };

  const yamunanagar: [number, number] = [77.3, 30.1];

  const destinations: Record<string, [number, number]> = {
    srilanka: [80.7, 7.9],
    bangladesh: [90.4, 23.8],
    bombay: [70, 23.5],
    karnataka: [75, 15],
    bhutan: [90.5, 27.5],
    nepal: [85.3, 27.0],
    kashmir: [76, 35],
    bihar: [85, 21.0],
  };

  const routeColors: Record<string, [number, number, number]> = {
    srilanka: [255, 0, 0],
    bangladesh: [0, 128, 0],
    bombay: [0, 0, 255],
    karnataka: [255, 165, 0],
    bhutan: [0, 128, 128],
    nepal: [255, 0, 255],
    kashmir: [43, 199, 255],
    bihar: [200, 255, 255],
  };

  const curveOffsets: Record<string, number> = {
    srilanka: 7,
    bangladesh: 6,
    bombay: 5,
    karnataka: 3,
    bhutan: 7,
    nepal: 5,
    kashmir: 2.5,
    bihar: 3,
  };

  const createCurvedPath = (
    start: [number, number],
    end: [number, number],
    height: number,
    segments = 25
  ): [number, number][] => {
    const path: [number, number][] = [];
    const [x0, y0] = start;
    const [x1, y1] = end;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const cx = x0 * (1 - t) + x1 * t;
      const cy = y0 * (1 - t) + y1 * t + height * Math.sin(Math.PI * t);
      path.push([cx, cy]);
    }
    return path;
  };

  const curvedPaths = useMemo(() => {
    const result: Record<string, [number, number][]> = {};
    Object.keys(destinations).forEach((key) => {
      result[key] = createCurvedPath(
        yamunanagar,
        destinations[key],
        curveOffsets[key]
      );
    });
    return result;
  }, [destinations, yamunanagar, curveOffsets]);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setProgress((prev) => {
        if (prev >= 1) return 1;
        return prev + 0.008;
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const layers = useMemo(() => {
    const pathLayers = Object.keys(curvedPaths).map((key) => {
      const path = curvedPaths[key];
      const animatedIndex = Math.floor(progress * (path.length - 1));
      const animatedPath = path.slice(0, animatedIndex + 1);

      return new PathLayer({
        id: `path-${key}`,
        data: [{ path: animatedPath, color: routeColors[key], width: 4 }],
        getPath: (d) => d.path,
        getColor: (d) => d.color,
        getWidth: (d) => d.width,
        widthMinPixels: 3,
        rounded: true,
      });
    });

    const destinationMarkers = Object.keys(destinations).map(
      (key) =>
        new IconLayer({
          id: `marker-${key}`,
          data: [{ coordinates: destinations[key] }],
          getPosition: (d) => d.coordinates,
          getIcon: () => ({
            url: "/marker.png",
            width: 128,
            height: 128,
            anchorY: 128,
          }),
          getSize: () => 24,
          sizeScale: 1,
        })
    );

    const startMarker = new IconLayer({
      id: "yamunanagar",
      data: [{ coordinates: yamunanagar }],
      getPosition: (d) => d.coordinates,
      getIcon: () => ({
        url: "/building.png",
        width: 128,
        height: 128,
        anchorY: 128,
      }),
      getSize: () => 24,
      sizeScale: 1,
    });

    const indiaBoundary = new GeoJsonLayer({
      id: "india-boundary",
      data: "/india.geojson",
      stroked: true,
      filled: true,
      lineWidthMinPixels: 2,
      getLineColor: [50, 50, 50, 200],
      getFillColor: [240, 248, 255, 220],
    });

    return [indiaBoundary, ...pathLayers, ...destinationMarkers, startMarker];
  }, [curvedPaths, progress, destinations, routeColors, yamunanagar]);

  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
        background:"transparent",
      }}
      className="overflow-visible"
    >
      <DeckGL
        initialViewState={viewState}
        controller={false} // ✅ disables all zoom/pan interactions
        layers={layers}
      />
    </div>
  );
}
