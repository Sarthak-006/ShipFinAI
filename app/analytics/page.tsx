'use client';

import Link from 'next/link';
import { mockPortfolio, mockShipments, mockAIInsights } from '@/lib/mockData';
import AIAssistant from '@/components/AIAssistant';

export default function AnalyticsPage() {
  const portfolio = mockPortfolio;
  const insights = mockAIInsights;

  const containerShipments = mockShipments.filter(s => s.type === 'container').length;
  const bulkShipments = mockShipments.filter(s => s.type === 'bulk').length;
  const liquidShipments = mockShipments.filter(s => s.type === 'liquid').length;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🚢</div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">ShipFinAI</h1>
                <p className="text-sm text-muted-foreground">Smart Shipping Investments</p>
              </div>
            </div>
            <nav className="flex gap-4">
              <Link href="/dashboard" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Dashboard
              </Link>
              <Link href="/marketplace" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Marketplace
              </Link>
              <Link href="/portfolio" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Portfolio
              </Link>
              <Link href="/tracking" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Tracking
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">📊 Analytics & Insights</h2>
          <p className="text-muted-foreground">Deep dive into market trends and performance metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-muted-foreground">Avg. ROI</h3>
              <span className="text-2xl">📈</span>
            </div>
            <p className="text-3xl font-bold text-green-500">+14.2%</p>
            <p className="text-xs text-muted-foreground mt-2">Across all shipments</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-muted-foreground">Market Volume</h3>
              <span className="text-2xl">💰</span>
            </div>
            <p className="text-3xl font-bold text-foreground">$2.5M</p>
            <p className="text-xs text-muted-foreground mt-2">Total investment volume</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-muted-foreground">Success Rate</h3>
              <span className="text-2xl">✓</span>
            </div>
            <p className="text-3xl font-bold text-green-500">98.5%</p>
            <p className="text-xs text-muted-foreground mt-2">On-time delivery</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-muted-foreground">Active Routes</h3>
              <span className="text-2xl">🗺️</span>
            </div>
            <p className="text-3xl font-bold text-foreground">24</p>
            <p className="text-xs text-muted-foreground mt-2">Global shipping routes</p>
          </div>
        </div>

        {/* Market Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Shipment Type Distribution</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Container</span>
                  <span className="font-semibold">{containerShipments} shipments</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${(containerShipments / mockShipments.length) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Bulk</span>
                  <span className="font-semibold">{bulkShipments} shipments</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${(bulkShipments / mockShipments.length) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Liquid</span>
                  <span className="font-semibold">{liquidShipments} shipments</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full"
                    style={{ width: `${(liquidShipments / mockShipments.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Risk Distribution</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Low Risk</span>
                  <span className="font-semibold">{mockShipments.filter(s => s.risk === 'low').length} shipments</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${(mockShipments.filter(s => s.risk === 'low').length / mockShipments.length) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Medium Risk</span>
                  <span className="font-semibold">{mockShipments.filter(s => s.risk === 'medium').length} shipments</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full"
                    style={{ width: `${(mockShipments.filter(s => s.risk === 'medium').length / mockShipments.length) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">High Risk</span>
                  <span className="font-semibold">{mockShipments.filter(s => s.risk === 'high').length} shipments</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full"
                    style={{ width: `${(mockShipments.filter(s => s.risk === 'high').length / mockShipments.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Routes */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Top Performing Routes</h3>
          <div className="space-y-4">
            {mockShipments
              .sort((a, b) => b.roi - a.roi)
              .slice(0, 5)
              .map((shipment, index) => (
                <div key={shipment.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-muted-foreground">#{index + 1}</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{shipment.name}</h4>
                      <p className="text-sm text-muted-foreground">{shipment.origin} → {shipment.destination}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-500">+{shipment.roi}%</p>
                    <p className="text-xs text-muted-foreground">ROI</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* AI Insights Summary */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🤖</span>
            <h3 className="text-xl font-semibold text-foreground">AI Market Analysis</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.slice(0, 2).map((insight, index) => (
              <div key={index} className="bg-card/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AIAssistant />
    </main>
  );
}

