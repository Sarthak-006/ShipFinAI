'use client';

import Link from 'next/link';
import { mockPortfolio, mockShipments } from '@/lib/mockData';
import AIAssistant from '@/components/AIAssistant';
import PerformanceChart from '@/components/PerformanceChart';

export default function PortfolioPage() {
  const portfolio = mockPortfolio;
  const profitPercentage = ((portfolio.totalProfit / portfolio.totalInvested) * 100).toFixed(2);

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
              <Link href="/portfolio" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">
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
          <h2 className="text-3xl font-bold text-foreground mb-2">💼 Your Portfolio</h2>
          <p className="text-muted-foreground">Manage your shipping investments and track performance</p>
        </div>

        {/* Portfolio Overview */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Portfolio Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Invested</p>
              <p className="text-3xl font-bold text-foreground">${portfolio.totalInvested.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Current Value</p>
              <p className="text-3xl font-bold text-foreground">${portfolio.currentValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Profit</p>
              <p className="text-3xl font-bold text-green-500">+${portfolio.totalProfit.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Return Rate</p>
              <p className="text-3xl font-bold text-green-500">+{profitPercentage}%</p>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-4">📈 Performance Overview (Last 30 Days)</h3>
          <PerformanceChart totalInvested={portfolio.totalInvested} currentValue={portfolio.currentValue} />
        </div>

        {/* Active Investments */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">🚢 Active Investments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.orders.map((order) => {
              const shipment = mockShipments.find(s => s.id === order.shipmentId);
              return (
                <div key={order.id} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{order.shipmentName}</h4>
                      <p className="text-sm text-muted-foreground">Order {order.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-muted'
                    }`}>
                      {order.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Shares Owned:</span>
                      <span className="font-semibold">{order.shares}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Invested:</span>
                      <span className="font-semibold">${order.totalInvested.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current Value:</span>
                      <span className="font-semibold">${order.currentValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Profit/Loss:</span>
                      <span className={`font-semibold ${order.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {order.profit >= 0 ? '+' : ''}{order.profit.toLocaleString()} ({((order.profit / order.totalInvested) * 100).toFixed(2)}%)
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/tracking`}
                      className="flex-1 py-2 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Track Shipment
                    </Link>
                    <button
                      onClick={() => {
                        const report = `Investment Report - ${order.shipmentName}\nShares: ${order.shares}\nInvested: $${order.totalInvested.toLocaleString()}\nCurrent Value: $${order.currentValue.toLocaleString()}\nProfit: $${order.profit.toLocaleString()}`;
                        const blob = new Blob([report], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${order.id}-report.txt`;
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="px-4 py-2 bg-muted text-foreground text-center rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                    >
                      📥
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📊</span>
              <h4 className="font-semibold text-foreground">Total Shares</h4>
            </div>
            <p className="text-3xl font-bold text-foreground">{portfolio.totalShares}</p>
            <p className="text-sm text-muted-foreground mt-2">Across {portfolio.activeShipments} shipments</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎯</span>
              <h4 className="font-semibold text-foreground">Avg. ROI</h4>
            </div>
            <p className="text-3xl font-bold text-green-500">+{profitPercentage}%</p>
            <p className="text-sm text-muted-foreground mt-2">Performance rate</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🚢</span>
              <h4 className="font-semibold text-foreground">Active Shipments</h4>
            </div>
            <p className="text-3xl font-bold text-foreground">{portfolio.activeShipments}</p>
            <p className="text-sm text-muted-foreground mt-2">Currently in transit</p>
          </div>
        </div>
      </div>

      <AIAssistant />
    </main>
  );
}

