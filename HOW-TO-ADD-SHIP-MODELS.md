# How to Add Ship Models to Your Project

The demo currently uses sample 3D models. Here's how to add real ship models:

## Quick Start: Download Ship Models

### Option 1: Sketchfab (Recommended)

1. **Visit Sketchfab**
   - Go to https://sketchfab.com
   - Search for "ship", "boat", or "vessel"
   - Use filters:
     - ✅ Downloadable
     - ✅ Free
     - File format: GLB or GLTF

2. **Download Process**
   ```
   - Click on a model you like
   - Click "Download 3D Model" button
   - Select "Autoconverted format (glTF)"
   - Download the .zip file
   - Extract to find the .glb or .gltf file
   ```

3. **Add to Your Project**
   ```bash
   # Create models directory
   mkdir public/models
   
   # Move your downloaded ship.glb file there
   # Now you can use it with: url="/models/ship.glb"
   ```

### Option 2: Poly Pizza (Low-Poly Models)

1. Visit https://poly.pizza
2. Search for "ship" or "boat"
3. Click a model → Download → GLB format
4. Place in `public/models/`

### Option 3: Quaternius (Game-Ready)

1. Visit https://quaternius.com
2. Browse the "Ultimate Ships" pack (if available)
3. Download and extract
4. Convert to GLB if needed (see conversion section below)

### Option 4: Free3D

1. Visit https://free3d.com
2. Search "ship glb" or "boat gltf"
3. Download free models
4. Check license requirements

## Using Your Ship Models

### Method 1: Local Files (Recommended)

```tsx
import ModelViewer from '@/components/ModelViewer';

<ModelViewer
  url="/models/your-ship.glb"
  width={800}
  height={600}
  autoRotate={true}
/>
```

### Method 2: Remote URLs

```tsx
<ModelViewer
  url="https://your-cdn.com/ship.glb"
  width={800}
  height={600}
/>
```

## File Formats Supported

- ✅ `.glb` (Binary glTF - RECOMMENDED)
- ✅ `.gltf` (JSON glTF)
- ✅ `.fbx` (Autodesk FBX)
- ✅ `.obj` (Wavefront OBJ)

## Converting Models to GLB

If you have a model in another format (FBX, OBJ, etc.):

### Online Converter (Easiest)
1. Visit https://products.aspose.app/3d/conversion
2. Upload your file
3. Select "GLB" as output
4. Download converted file

### Using Blender (Most Control)
```bash
# Install Blender: https://www.blender.org/download/

1. Open Blender
2. File → Import → [Your Format]
3. Select your model
4. File → Export → glTF 2.0 (.glb/.gltf)
5. Choose Binary (.glb) format
6. Export
```

### Command Line (glTF-Pipeline)
```bash
npm install -g gltf-pipeline

# Convert FBX to GLB
gltf-pipeline -i model.gltf -o model.glb

# Optimize and compress
gltf-pipeline -i model.glb -o model-optimized.glb -d
```

## Optimizing Models for Web

Large models can slow down your site. Optimize them:

### Size Guidelines
- ⚠️ Aim for < 5MB per model
- ⚠️ Keep textures under 2048x2048px
- ⚠️ Target < 50k polygons for smooth performance

### Optimization Tools

**1. gltf-pipeline (CLI)**
```bash
npm install -g gltf-pipeline

gltf-pipeline -i input.glb -o output.glb -d
# -d = Draco compression (smaller file size)
```

**2. Online Tools**
- https://gltf.report/ - Analyze and optimize
- https://products.aspose.app/3d/optimizer - Online optimizer

**3. Blender**
```
1. Open your model in Blender
2. Select all meshes
3. Mesh → Clean Up → Decimate
4. Reduce polygon count
5. Export as GLB
```

## Example: Complete Workflow

### Step-by-Step: Adding a Pirate Ship

1. **Download from Sketchfab**
   ```
   https://sketchfab.com/search?q=pirate+ship&type=models
   - Find a free, downloadable model
   - Download as glTF
   ```

2. **Extract and Optimize**
   ```bash
   # Extract the downloaded zip
   unzip model.zip
   
   # Optimize with gltf-pipeline
   gltf-pipeline -i scene.gltf -o pirate-ship.glb -d
   ```

3. **Add to Project**
   ```bash
   # Move to public folder
   mkdir -p public/models
   mv pirate-ship.glb public/models/
   ```

4. **Use in Code**
   ```tsx
   <ModelViewer
     url="/models/pirate-ship.glb"
     width={800}
     height={600}
     autoRotate={true}
     environmentPreset="sunset"
   />
   ```

## Updating the Gallery Page

Edit `app/ships/page.tsx`:

```tsx
const shipModels = [
  {
    id: 'pirate-ship',
    name: 'Pirate Ship',
    url: '/models/pirate-ship.glb',
    description: 'Classic pirate ship with detailed rigging',
    environment: 'sunset' as const,
  },
  {
    id: 'cargo-ship',
    name: 'Cargo Ship',
    url: '/models/cargo-ship.glb',
    description: 'Modern container ship',
    environment: 'city' as const,
  },
  // Add more ships...
];
```

## Troubleshooting

### Model Doesn't Load
- ✅ Check file path is correct
- ✅ Verify file is in `public/` folder
- ✅ Check browser console for errors
- ✅ Try opening the URL directly in browser

### Model is Too Big/Small
- Use `autoFrame={true}` prop
- Adjust `defaultZoom` prop
- Scale model in Blender before export

### Performance Issues
- Reduce polygon count
- Compress textures
- Use Draco compression
- Test on mobile devices

### CORS Errors (Remote URLs)
- Host files on your server
- Or use a CDN with CORS enabled
- Or use files in `public/` folder

## License & Attribution

⚠️ **Always check model licenses!**

- Some require attribution
- Some are for non-commercial use only
- Read terms before using

Common licenses:
- **CC0**: Free for any use
- **CC-BY**: Requires attribution
- **CC-BY-NC**: Non-commercial only

## Recommended Ship Models to Search For

Good search terms on Sketchfab/Poly Pizza:
- "pirate ship"
- "sailing ship"
- "cargo ship"
- "fishing boat"
- "yacht"
- "speedboat"
- "battleship"
- "cruise ship"
- "tugboat"
- "container ship"

## Additional Resources

- **glTF Viewer**: https://gltf-viewer.donmccurdy.com/ - Preview before using
- **Three.js Editor**: https://threejs.org/editor/ - Edit and test models
- **Blender**: https://www.blender.org/ - Professional 3D editing
- **glTF Sample Models**: https://github.com/KhronosGroup/glTF-Sample-Models

## Need Help?

Check the main documentation: `SHIP-VIEWER-GUIDE.md`

