'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockShipments } from '@/lib/mockData';
import AIAssistant from '@/components/AIAssistant';
import ShipmentDetailsModal from '@/components/ShipmentDetailsModal';
import { Shipment } from '@/types/shipping';

export default function MarketplacePage() {
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('roi');
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const filteredShipments = mockShipments.filter(shipment => {
    if (filter === 'all') return true;
    if (filter === 'low-risk') return shipment.risk === 'low';
    if (filter === 'high-roi') return shipment.roi >= 14;
    if (filter === 'available') return shipment.status === 'available';
    return shipment.type === filter;
  });

  const sortedShipments = [...filteredShipments].sort((a, b) => {
    if (sortBy === 'roi') return b.roi - a.roi;
    if (sortBy === 'price') return a.shares.pricePerShare - b.shares.pricePerShare;
    if (sortBy === 'departure') return new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime();
    return 0;
  });

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
              <Link href="/marketplace" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">
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
          <h2 className="text-3xl font-bold text-foreground mb-2">🛒 Marketplace</h2>
          <p className="text-muted-foreground">Discover and invest in global shipping opportunities</p>
        </div>

        {/* Filters and Sorting */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Filter by:</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filter === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  All ({mockShipments.length})
                </button>
                <button
                  onClick={() => setFilter('low-risk')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filter === 'low-risk'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  Low Risk
                </button>
                <button
                  onClick={() => setFilter('high-roi')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filter === 'high-roi'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  High ROI (14%+)
                </button>
                <button
                  onClick={() => setFilter('container')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filter === 'container'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  Container
                </button>
                <button
                  onClick={() => setFilter('bulk')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filter === 'bulk'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  Bulk
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="roi">Highest ROI</option>
                <option value="price">Lowest Price</option>
                <option value="departure">Earliest Departure</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shipments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedShipments.map((shipment) => (
            <div key={shipment.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:border-primary transition-all">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    shipment.risk === 'low' ? 'bg-green-500/20 text-green-500' :
                    shipment.risk === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {shipment.risk.toUpperCase()} RISK
                  </span>
                  <span className="px-3 py-1 bg-primary/30 rounded-full text-xs font-semibold">
                    {shipment.type.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-lg">{shipment.name}</h3>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">📍 Route:</span>
                    <span className="font-semibold text-foreground text-right">{shipment.origin} → {shipment.destination}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">🚢 Vessel:</span>
                    <span className="font-semibold">{shipment.vessel.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">📦 Weight:</span>
                    <span className="font-semibold">{shipment.weight.toLocaleString()} tons</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Expected ROI</p>
                      <p className="text-2xl font-bold text-green-500">+{shipment.roi}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Price/Share</p>
                      <p className="text-2xl font-bold text-foreground">${shipment.shares.pricePerShare}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Available Shares</span>
                      <span className="font-semibold">{shipment.shares.available}/{shipment.shares.total}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(shipment.shares.available / shipment.shares.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <span>🛡️</span>
                      <span className="text-muted-foreground">Insured</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📅</span>
                      <span className="text-muted-foreground">{new Date(shipment.departureDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedShipment(shipment);
                        setShowDetails(true);
                      }}
                      className="flex-1 py-3 bg-muted text-foreground text-center rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                    >
                      Details
                    </button>
                    <Link
                      href={`/purchase/${shipment.id}`}
                      className="flex-1 py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Invest Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedShipments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-muted-foreground mb-2">No shipments found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>

      <AIAssistant />

      {/* Shipment Details Modal */}
      <ShipmentDetailsModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        shipment={selectedShipment}
      />
    </main>
  );
}

