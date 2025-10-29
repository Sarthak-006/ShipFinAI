# 3D Ship Model Zoom Settings - ShipFinAI

## Updated Zoom Configuration

The ship models now have better default visibility with adjusted zoom settings.

## Settings by Page

### Landing Page (`/`)
**Type 21 Landing Craft**
- `defaultZoom`: 4 (was 2)
- `minZoomDistance`: 2 (was 1)
- `maxZoomDistance`: 10 (was 5)
- `autoFrame`: true (auto-fits the model)

### Ship Gallery (`/ships`)
**All Ships**
- `defaultZoom`: 4 (was 2)
- `minZoomDistance`: 2 (was 1)
- `maxZoomDistance`: 10 (was 5)
- `autoFrame`: true (auto-fits the model)

### Frigate Viewer (`/myship`)
**Kotor-Class Frigate**
- `defaultZoom`: 5 (was 2.5)
- `minZoomDistance`: 2.5 (was 1.5)
- `maxZoomDistance`: 12 (was 6)
- `autoFrame`: true (auto-fits the model)

## What Changed

### Before:
- Ships appeared too close/zoomed in
- Required manual zooming out
- Limited zoom range

### After:
- Ships now visible at comfortable distance
- Better initial view
- More zoom range for flexibility
- Auto-framing ensures model fits properly

## Zoom Settings Explained

- **defaultZoom**: Starting camera distance (higher = further away)
- **minZoomDistance**: Closest you can zoom in
- **maxZoomDistance**: Furthest you can zoom out
- **autoFrame**: Automatically adjusts to fit the entire model in view

## Custom Adjustments

To adjust zoom further, modify these props in the ModelViewer component:

```tsx
<ModelViewer
  url="/models/ship.glb"
  defaultZoom={4}        // Start further back
  minZoomDistance={2}    // Closest zoom
  maxZoomDistance={10}   // Furthest zoom
  autoFrame={true}       // Auto-fit model
/>
```

## Recommendations

- **Small models**: defaultZoom 3-4
- **Large models**: defaultZoom 5-6
- **Always enable**: autoFrame={true} for best results
- **Zoom range**: Keep at least 2x difference between min and max

