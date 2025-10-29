'use client';

import { useState } from 'react';
import ModelViewer from '@/components/ModelViewer';

const shipModels = [
  {
    id: 'landing-craft',
    name: 'Type 21 Landing Craft',
    url: '/models/type_21_landing_craft.glb',
    description: 'Military landing craft vessel for amphibious operations',
    environment: 'sunset' as const,
  },
  {
    id: 'frigate',
    name: 'Kotor-Class Frigate',
    url: '/models/kotor-class_frigate.glb',
    description: 'Naval frigate warship with advanced capabilities',
    environment: 'city' as const,
  },
];

export default function ShipsPage() {
  const [selectedShip, setSelectedShip] = useState(shipModels[0]);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Ship Model Gallery</h1>
        <p className="text-muted-foreground mb-8">
          Browse and interact with your ship models. Drag to rotate, scroll to zoom, and take screenshots!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Model Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-card-foreground">
                  {selectedShip.name}
                </h2>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={(e) => setAutoRotate(e.target.checked)}
                    className="rounded"
                  />
                  Auto Rotate
                </label>
              </div>
              
              <p className="text-muted-foreground mb-6">{selectedShip.description}</p>
              
              <div className="bg-muted/20 rounded-lg p-4 flex justify-center items-center">
                <ModelViewer
                  url={selectedShip.url}
                  width={Math.min(700, typeof window !== 'undefined' ? window.innerWidth - 100 : 700)}
                  height={500}
                  autoRotate={autoRotate}
                  autoRotateSpeed={0.5}
                  enableManualRotation={true}
                  enableManualZoom={true}
                  enableMouseParallax={true}
                  enableHoverRotation={false}
                  environmentPreset={selectedShip.environment}
                  ambientIntensity={0.5}
                  keyLightIntensity={1.5}
                  fillLightIntensity={0.8}
                  rimLightIntensity={1}
                  defaultRotationX={0}
                  defaultRotationY={45}
                  defaultZoom={4}
                  minZoomDistance={2}
                  maxZoomDistance={10}
                  fadeIn={true}
                  autoFrame={true}
                  showScreenshotButton={true}
                />
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2 text-foreground">Model URL:</h3>
                <code className="text-xs break-all text-muted-foreground">
                  {selectedShip.url}
                </code>
              </div>
            </div>
          </div>

          {/* Ship Selection */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Your Ships</h3>
              <div className="space-y-3">
                {shipModels.map((ship) => (
                  <button
                    key={ship.id}
                    onClick={() => setSelectedShip(ship)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedShip.id === ship.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    <div className="font-semibold">{ship.name}</div>
                    <div className="text-sm opacity-80 mt-1">{ship.description}</div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3 text-foreground">Add More Ships</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Add more ships by placing .glb files in public/models/ and updating shipModels:
                </p>
                <div className="bg-muted p-3 rounded text-xs">
                  <pre className="overflow-x-auto">
{`{
  id: 'my-ship',
  name: 'Battleship',
  url: '/models/battleship.glb',
  description: 'Heavy battleship',
  environment: 'sunset'
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-card border border-border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Controls</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground min-w-[80px]">Desktop:</span>
                  <span>Drag to rotate, scroll to zoom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground min-w-[80px]">Mobile:</span>
                  <span>Swipe to rotate, pinch to zoom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground min-w-[80px]">Screenshot:</span>
                  <span>Click button to save PNG</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">Where to Find Ship Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Sketchfab</h4>
              <p className="text-muted-foreground">Professional 3D models, many free with attribution</p>
              <a href="https://sketchfab.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block">
                Visit Sketchfab →
              </a>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Poly Pizza</h4>
              <p className="text-muted-foreground">Free low-poly models, perfect for web</p>
              <a href="https://poly.pizza" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block">
                Visit Poly Pizza →
              </a>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2 text-foreground">Quaternius</h4>
              <p className="text-muted-foreground">Game-ready assets, completely free</p>
              <a href="https://quaternius.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block">
                Visit Quaternius →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

