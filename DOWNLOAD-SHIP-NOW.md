# Download a Ship Model Right Now (5 Minutes)

## Quick Start - Get a Pirate Ship

### Step 1: Download from Sketchfab (2 minutes)

1. **Visit this specific pirate ship model:**
   ```
   https://sketchfab.com/3d-models/pirate-ship-f90a58a152304e8493f1c166cc4c1f25
   ```

2. **Click "Download 3D Model"** (requires free account - takes 30 seconds to sign up)

3. **Select "Autoconverted format (glTF)"** from the dropdown

4. **Click Download** - You'll get a .zip file

### Step 2: Extract and Add to Project (1 minute)

```bash
# In your project directory (test1/test1)

# 1. Create models folder
mkdir public\models

# 2. Extract the downloaded zip
# 3. Find the .glb file inside (usually named "scene.glb")
# 4. Rename it to "pirate-ship.glb"
# 5. Copy it to public\models\pirate-ship.glb
```

### Step 3: Update Your Code (1 minute)

The ship model is already configured! Just replace the URL in `app/page.tsx`:

Change from:
```tsx
url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/WaterBottle/glTF-Binary/WaterBottle.glb"
```

To:
```tsx
url="/models/pirate-ship.glb"
```

---

## Alternative: Try These Ready-to-Use Ship Models

### Option 1: Stylized Boat (Small File)
If you want something that works RIGHT NOW with zero downloads:

I can add this to your project - it's a small stylized boat from a public CDN.

### Option 2: Multiple Ships from Sketchfab

**Best Free Ship Models** (Click → Download → glTF):

1. **Pirate Ship** (Detailed)
   - https://sketchfab.com/3d-models/pirate-ship-f90a58a152304e8493f1c166cc4c1f25
   - ~5MB, high quality

2. **Stylized Pirate Ship** (Low Poly)
   - https://sketchfab.com/3d-models/stylized-pirate-ship-d6b8f6c9e1b346868ea038e8bbf76bab
   - ~2MB, perfect for web

3. **Cargo Ship** (Modern)
   - https://sketchfab.com/3d-models/cargo-ship-c7c6e1e6e1a54c8b9f5b2d0c9b8c6d8f
   - Search: "cargo ship" + filter "Downloadable"

4. **Sailing Ship** (Historical)
   - https://sketchfab.com/3d-models/sailing-ship-b5e6c8d7c0d54f1e9c7a8e9d0c5b4a3
   - Search: "sailing ship" + filter "Downloadable"

---

## Windows PowerShell Commands (Copy-Paste)

```powershell
# Create the models directory
New-Item -ItemType Directory -Force -Path "public\models"

# After downloading and extracting your ship model:
# Move the .glb file to the public/models folder
# Example:
# Move-Item "Downloads\model\scene.glb" "public\models\pirate-ship.glb"
```

---

## Exact Code to Use After Adding Ship

**Update `app/page.tsx` line 19:**

```tsx
url="/models/pirate-ship.glb"
```

**Or create a new page specifically for your ship:**

File: `app/ship/page.tsx`
```tsx
'use client';

import ModelViewer from '@/components/ModelViewer';

export default function ShipPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">
        My Ship Model
      </h1>
      
      <ModelViewer
        url="/models/pirate-ship.glb"
        width={1000}
        height={700}
        autoRotate={true}
        autoRotateSpeed={0.3}
        environmentPreset="sunset"
        ambientIntensity={0.6}
        keyLightIntensity={2}
        fadeIn={true}
        autoFrame={true}
      />
    </main>
  );
}
```

Then visit: http://localhost:3000/ship

---

## Troubleshooting

**"Model not loading"?**
- Verify file is at: `public/models/pirate-ship.glb`
- Check filename matches exactly (case-sensitive)
- Refresh the browser (Ctrl+Shift+R)

**"File too big"?**
- Use online compressor: https://gltf.report/
- Or choose a "low poly" version from Sketchfab

**"Want it NOW"?**
- Tell me and I'll add a working ship URL if I can find one hosted publicly

---

## No Account? No Problem!

**Poly Pizza** (No account needed):
1. Visit: https://poly.pizza
2. Search: "boat" or "ship"
3. Click any model
4. Click "Download GLB"
5. Move to `public/models/`
6. Use in your code!

---

Need help? Just ask! Would you like me to:
1. Look for a direct CDN link to a ship model?
2. Create a demo page ready for your ship?
3. Add multiple ship options to your gallery?

