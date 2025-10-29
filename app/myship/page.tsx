'use client';

import ModelViewer from '@/components/ModelViewer';

export default function MyShipPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl font-bold mb-4 text-center text-foreground">
          Kotor-Class Frigate
        </h1>
        
        <p className="text-center text-muted-foreground mb-8">
          Naval frigate warship with advanced capabilities
        </p>

        <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-2xl">
          <ModelViewer
            url="/models/kotor-class_frigate.glb"
            width={typeof window !== 'undefined' ? Math.min(1000, window.innerWidth - 100) : 1000}
            height={700}
            autoRotate={true}
            autoRotateSpeed={0.3}
            enableManualRotation={true}
            enableManualZoom={true}
            enableMouseParallax={true}
            enableHoverRotation={false}
            environmentPreset="sunset"
            ambientIntensity={0.6}
            keyLightIntensity={2}
            fillLightIntensity={1}
            rimLightIntensity={1.2}
            defaultRotationX={0}
            defaultRotationY={45}
            defaultZoom={5}
            minZoomDistance={2.5}
            maxZoomDistance={12}
            fadeIn={true}
            autoFrame={true}
            showScreenshotButton={true}
            onModelLoaded={() => console.log('Ship loaded!')}
          />
        </div>

        <div className="mt-8 bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Ship Models:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Type 21 Landing Craft</h3>
              <p className="text-sm text-muted-foreground mb-2">Military amphibious vessel</p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                /models/type_21_landing_craft.glb
              </code>
              <a href="/" className="text-primary hover:underline text-sm mt-2 inline-block">
                View on Home Page →
              </a>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/50">
              <h3 className="font-semibold text-foreground mb-2">Kotor-Class Frigate ⭐</h3>
              <p className="text-sm text-muted-foreground mb-2">Naval warship (Currently showing)</p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                /models/kotor-class_frigate.glb
              </code>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-foreground">📍 View All Ships</h3>
            <p className="text-sm text-muted-foreground mb-2">Browse both ships in the gallery</p>
            <a href="/ships" className="text-primary hover:underline text-sm">
              Go to Gallery →
            </a>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-foreground">🏠 Landing Craft</h3>
            <p className="text-sm text-muted-foreground mb-2">View the Type 21 model</p>
            <a href="/" className="text-primary hover:underline text-sm">
              Go to Home →
            </a>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-foreground">➕ Add More</h3>
            <p className="text-sm text-muted-foreground">Place .glb files in public/models/</p>
          </div>
        </div>
      </div>
    </main>
  );
}

