'use client';

export default function NavigationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center text-foreground">
          🚢 Ship Viewer Navigation
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Choose where you'd like to go
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="/"
            className="bg-card border-2 border-border hover:border-primary rounded-xl p-8 shadow-lg transition-all hover:scale-105"
          >
            <div className="text-4xl mb-4">🏠</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Home</h2>
            <p className="text-muted-foreground mb-4">
              Type 21 Landing Craft
            </p>
            <p className="text-sm text-muted-foreground">
              Main page featuring the military landing craft vessel
            </p>
          </a>

          <a
            href="/ships"
            className="bg-card border-2 border-border hover:border-primary rounded-xl p-8 shadow-lg transition-all hover:scale-105"
          >
            <div className="text-4xl mb-4">⚓</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Ship Gallery</h2>
            <p className="text-muted-foreground mb-4">
              View All Ships
            </p>
            <p className="text-sm text-muted-foreground">
              Interactive gallery with both ship models. Switch between them easily!
            </p>
          </a>

          <a
            href="/myship"
            className="bg-card border-2 border-border hover:border-primary rounded-xl p-8 shadow-lg transition-all hover:scale-105"
          >
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Frigate Viewer</h2>
            <p className="text-muted-foreground mb-4">
              Kotor-Class Frigate
            </p>
            <p className="text-sm text-muted-foreground">
              Dedicated page for the naval warship with large viewing area
            </p>
          </a>

          <a
            href="/navigation"
            className="bg-card border-2 border-primary/50 rounded-xl p-8 shadow-lg"
          >
            <div className="text-4xl mb-4">🧭</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">This Page</h2>
            <p className="text-muted-foreground mb-4">
              Navigation Hub
            </p>
            <p className="text-sm text-muted-foreground">
              You are here! Bookmark this page for easy access.
            </p>
          </a>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">📦 Your Ship Models</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="text-2xl">🚢</div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Type 21 Landing Craft</h3>
                <code className="text-xs text-muted-foreground">/models/type_21_landing_craft.glb</code>
              </div>
              <div className="text-sm text-muted-foreground">865 KB</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="text-2xl">⚓</div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Kotor-Class Frigate</h3>
                <code className="text-xs text-muted-foreground">/models/kotor-class_frigate.glb</code>
              </div>
              <div className="text-sm text-muted-foreground">1.7 MB</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary/10 border border-primary/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">✨ Features Available</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Drag to rotate models
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Scroll to zoom in/out
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Auto-rotation mode
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Screenshot capability
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Touch/mobile support
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Multiple environments
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Realistic lighting
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Smooth animations
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

