'use client';

import Link from 'next/link';
import ModelViewer from '@/components/ModelViewer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🚢</div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            ShipFinAI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Smart Shipping Investments Powered by AI
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Trade shipment shares, track orders in real-time, and let AI guide your investment decisions in the global shipping market.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Launch Dashboard →
            </Link>
            <Link
              href="/marketplace"
              className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl font-bold text-lg hover:border-primary transition-all shadow-lg"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Why Choose ShipShare AI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-foreground mb-2">AI-Powered</h3>
            <p className="text-muted-foreground text-sm">
              Get personalized recommendations and investment insights powered by advanced AI algorithms
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Real-Time Tracking</h3>
            <p className="text-muted-foreground text-sm">
              Track your shipments in real-time with live location updates and status notifications
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Share Trading</h3>
            <p className="text-muted-foreground text-sm">
              Buy and trade shares in global shipments with transparent pricing and low fees
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Fully Insured</h3>
            <p className="text-muted-foreground text-sm">
              All shipments are fully insured, protecting your investments from unexpected risks
            </p>
          </div>
        </div>
      </section>

      {/* 3D Ship Models Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          View Our Fleet in 3D
        </h2>
        <div className="bg-card border border-border rounded-xl p-8 shadow-xl">
          <div className="flex justify-center mb-6">
            <ModelViewer
              url="/models/type_21_landing_craft.glb"
              width={Math.min(800, typeof window !== 'undefined' ? window.innerWidth - 100 : 800)}
              height={500}
              autoRotate={true}
              autoRotateSpeed={0.3}
              enableManualRotation={true}
              enableManualZoom={true}
              environmentPreset="sunset"
              ambientIntensity={0.5}
              keyLightIntensity={1.5}
              fadeIn={true}
              autoFrame={true}
              defaultZoom={6}
              minZoomDistance={3}
              maxZoomDistance={12}
              showScreenshotButton={false}
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Type 21 Landing Craft</h3>
            <p className="text-muted-foreground mb-4">Military amphibious landing vessel</p>
            <Link
              href="/ships"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View All Ship Models →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">$2.5M+</p>
              <p className="text-muted-foreground">Total Investment Volume</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">156</p>
              <p className="text-muted-foreground">Active Shipments</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-500 mb-2">+14.2%</p>
              <p className="text-muted-foreground">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card border-2 border-primary/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Investing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join ShipFinAI today and start building your shipping portfolio with AI guidance
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Get Started Now →
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
            Marketplace
          </Link>
          <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/tracking" className="text-muted-foreground hover:text-primary transition-colors">
            Track Orders
          </Link>
        </div>
      </section>
    </main>
  );
}
