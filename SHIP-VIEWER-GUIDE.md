# 3D Ship Model Viewer Guide

This project includes a fully-featured 3D model viewer component built with React Three Fiber.

## Features

✨ **Interactive Controls**
- Drag to rotate the ship
- Scroll/pinch to zoom
- Mouse parallax effect
- Hover rotation effect
- Auto-rotation mode

🎨 **Customizable Appearance**
- Multiple environment presets (sunset, forest, city, etc.)
- Adjustable lighting (ambient, key, fill, rim lights)
- Contact shadows for realism
- Fade-in animation support

📸 **Screenshot Capability**
- Built-in screenshot button
- High-quality PNG export

📱 **Touch Support**
- Full mobile/tablet support
- Pinch to zoom
- Touch-friendly controls

## Usage

```tsx
import ModelViewer from '@/components/ModelViewer';

export default function MyPage() {
  return (
    <ModelViewer
      url="YOUR_SHIP_MODEL_URL.glb"
      width={800}
      height={600}
      autoRotate={true}
      environmentPreset="sunset"
    />
  );
}
```

## Ship Model URLs

Here are some publicly available ship models you can use:

### Free Ship Models (GLB/GLTF)

1. **Pirate Ship**
   ```
   https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/pirate-ship/model.gltf
   ```

2. **Speed Boat**
   ```
   https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/speedboat/model.gltf
   ```

3. **Stylized Boat** (from Poly Pizza)
   ```
   https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@alpha/public/models/boat.glb
   ```

4. **Cargo Ship** (from Sketchfab - requires attribution)
   - Visit [Sketchfab](https://sketchfab.com) and search for "ship"
   - Download GLB models and host them in your `/public` folder
   - Use as: `/models/your-ship.glb`

### Where to Find More Ship Models

1. **Sketchfab** - https://sketchfab.com
   - Search: "ship", "boat", "vessel"
   - Filter by: Free, Downloadable, GLB format
   - Many require attribution (check license)

2. **Poly Pizza** - https://poly.pizza
   - Free low-poly 3D models
   - Search: "ship", "boat"
   - Direct GLB download

3. **Quaternius** - https://quaternius.com
   - Free game-ready models
   - Ultimate Ships pack available

4. **Kenney** - https://kenney.nl/assets
   - Free game assets
   - Includes various ship models

5. **GitHub Repositories**
   - Search: "free gltf models" or "free glb ship"
   - Many repos host raw files you can link directly

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | string | required | URL to your .glb, .gltf, .fbx, or .obj model |
| `width` | number | 400 | Width of the viewer in pixels |
| `height` | number | 400 | Height of the viewer in pixels |
| `autoRotate` | boolean | false | Enable auto-rotation |
| `autoRotateSpeed` | number | 0.35 | Speed of auto-rotation |
| `enableManualRotation` | boolean | true | Allow drag to rotate |
| `enableManualZoom` | boolean | true | Allow scroll/pinch to zoom |
| `enableMouseParallax` | boolean | true | Mouse parallax effect |
| `enableHoverRotation` | boolean | true | Subtle rotation on hover |
| `environmentPreset` | string | 'forest' | Environment lighting preset |
| `ambientIntensity` | number | 0.3 | Ambient light intensity |
| `keyLightIntensity` | number | 1 | Main light intensity |
| `fillLightIntensity` | number | 0.5 | Fill light intensity |
| `rimLightIntensity` | number | 0.8 | Rim light intensity |
| `defaultRotationX` | number | -50 | Initial X rotation (degrees) |
| `defaultRotationY` | number | 20 | Initial Y rotation (degrees) |
| `defaultZoom` | number | 0.5 | Initial camera distance |
| `minZoomDistance` | number | 0.5 | Minimum zoom distance |
| `maxZoomDistance` | number | 10 | Maximum zoom distance |
| `fadeIn` | boolean | false | Fade in animation on load |
| `autoFrame` | boolean | false | Auto-fit camera to model |
| `showScreenshotButton` | boolean | true | Show screenshot button |
| `onModelLoaded` | function | undefined | Callback when model loads |

## Environment Presets

Available presets: `apartment`, `city`, `dawn`, `forest`, `lobby`, `night`, `park`, `studio`, `sunset`, `warehouse`, `none`

## Examples

### Basic Ship Viewer
```tsx
<ModelViewer
  url="/models/ship.glb"
  width={600}
  height={400}
/>
```

### Auto-Rotating with Custom Lighting
```tsx
<ModelViewer
  url="/models/pirate-ship.glb"
  width={800}
  height={600}
  autoRotate={true}
  autoRotateSpeed={0.5}
  environmentPreset="sunset"
  ambientIntensity={0.5}
  keyLightIntensity={2}
/>
```

### With Fade-In and Custom Zoom
```tsx
<ModelViewer
  url="/models/cargo-ship.glb"
  width={1000}
  height={700}
  fadeIn={true}
  autoFrame={true}
  defaultZoom={3}
  minZoomDistance={2}
  maxZoomDistance={8}
  environmentPreset="city"
/>
```

### Mobile-Optimized
```tsx
<ModelViewer
  url="/models/boat.glb"
  width={window.innerWidth}
  height={400}
  enableHoverRotation={false}
  enableMouseParallax={false}
  showScreenshotButton={false}
/>
```

## Hosting Your Own Models

1. Place your `.glb` or `.gltf` files in the `/public/models/` directory
2. Reference them with `/models/your-model.glb`
3. Optimize models before use (< 10MB recommended)

## Model Optimization Tips

- Keep polygon count reasonable (< 100k triangles)
- Use compressed textures
- Combine meshes where possible
- Use tools like [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) for optimization
- Test on mobile devices for performance

## Troubleshooting

**Model not loading?**
- Check browser console for errors
- Verify URL is accessible
- Ensure CORS headers allow access
- Check file format (.glb, .gltf, .fbx, .obj supported)

**Performance issues?**
- Reduce polygon count
- Disable `enableMouseParallax` and `enableHoverRotation`
- Use smaller textures
- Set `fadeIn={false}`

**Model appears too small/large?**
- Use `autoFrame={true}` to auto-fit
- Adjust `defaultZoom`, `minZoomDistance`, `maxZoomDistance`
- Scale model in Blender before export

## License

This component is built with:
- React Three Fiber (MIT)
- Three.js (MIT)
- React Three Drei (MIT)

Models may have their own licenses - always check and provide attribution when required.

