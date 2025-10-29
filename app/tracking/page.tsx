'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockOrders } from '@/lib/mockData';
import AIAssistant from '@/components/AIAssistant';
import OrderDetailsModal from '@/components/OrderDetailsModal';
import { Order } from '@/types/shipping';

export default function TrackingPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setShowDetails(true);
  };

  const handleExportReport = (order: Order) => {
    const reportData = `
SHIPMENT ORDER REPORT
=====================
Order ID: ${order.id}
Shipment: ${order.shipmentName}
Status: ${order.status.toUpperCase()}
Shares: ${order.shares}
Total Invested: $${order.totalInvested.toLocaleString()}
Current Value: $${order.currentValue.toLocaleString()}
Profit: $${order.profit.toLocaleString()}
Report Generated: ${new Date().toLocaleString()}
    `.trim();

    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `order-${order.id}-report.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
              <Link href="/tracking" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">
                Tracking
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">📍 Order Tracking</h2>
          <p className="text-muted-foreground">Real-time tracking for all your active shipments</p>
        </div>

        {/* Active Orders */}
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
              {/* Order Header */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{order.shipmentName}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'active' ? 'bg-green-500/20 text-green-500' :
                        order.status === 'completed' ? 'bg-blue-500/20 text-blue-500' :
                        'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {order.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Current Value</p>
                    <p className="text-2xl font-bold text-foreground">${order.currentValue.toLocaleString()}</p>
                    <p className={`text-sm font-semibold ${order.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {order.profit >= 0 ? '+' : ''}{order.profit.toLocaleString()} ({((order.profit / order.totalInvested) * 100).toFixed(2)}%)
                    </p>
                  </div>
                </div>
              </div>

              {/* Investment Details */}
              <div className="p-6 border-b border-border">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Shares Owned</p>
                    <p className="text-xl font-bold text-foreground">{order.shares}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                    <p className="text-xl font-bold text-foreground">${order.totalInvested.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Purchase Date</p>
                    <p className="text-xl font-bold text-foreground">{new Date(order.purchaseDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>🗺️</span>
                  Tracking Updates
                </h4>
                <div className="space-y-4">
                  {order.trackingUpdates.map((update, index) => (
                    <div key={update.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${
                          index === order.trackingUpdates.length - 1 ? 'bg-primary' : 'bg-muted'
                        }`} />
                        {index < order.trackingUpdates.length - 1 && (
                          <div className="w-0.5 h-full bg-muted mt-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-semibold text-foreground">{update.location}</h5>
                          <span className="text-xs text-muted-foreground">
                            {new Date(update.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{update.message}</p>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          update.status === 'Departed' ? 'bg-blue-500/20 text-blue-500' :
                          update.status === 'In Transit' ? 'bg-yellow-500/20 text-yellow-500' :
                          'bg-green-500/20 text-green-500'
                        }`}>
                          {update.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-muted/30 flex gap-3">
                <button 
                  onClick={() => handleViewDetails(order)}
                  className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleExportReport(order)}
                  className="flex-1 py-2 bg-card border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  Export Report
                </button>
              </div>
            </div>
          ))}
        </div>

        {mockOrders.length === 0 && (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
            <p className="text-2xl text-muted-foreground mb-2">📦 No active orders</p>
            <p className="text-sm text-muted-foreground mb-6">Start investing in shipments to track them here</p>
            <Link
              href="/marketplace"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Browse Marketplace
            </Link>
          </div>
        )}
      </div>

      <AIAssistant />

      {/* Order Details Modal */}
      <OrderDetailsModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        order={selectedOrder}
      />
    </main>
  );
}

