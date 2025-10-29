'use client';

import Link from 'next/link';
import { mockPortfolio, mockAIInsights, mockAIRecommendations, mockShipments } from '@/lib/mockData';
import AIAssistant from '@/components/AIAssistant';

export default function DashboardPage() {
  const portfolio = mockPortfolio;
  const insights = mockAIInsights;
  const recommendations = mockAIRecommendations.slice(0, 3);

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
              <Link href="/dashboard" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back! 👋</h2>
          <p className="text-muted-foreground">Here's what's happening with your shipping investments today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-muted-foreground">Total Invested</h3>
              <span className="text-2xl">💰</span>
            </div>
            <p className="text-3xl font-bold text-foreground">${(portfolio.totalInvested / 1000).toFixed(0)}K</p>
            <p className="text-sm text-muted-foreground mt-2">Across {portfolio.activeShipments} shipments</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-muted-foreground">Current Value</h3>
              <span className="text-2xl">📈</span>
            </div>
            <p className="text-3xl font-bold text-foreground">${(portfolio.currentValue / 1000).toFixed(0)}K</p>
            <p className="text-sm text-green-500 mt-2">+{profitPercentage}% growth</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-muted-foreground">Total Profit</h3>
              <span className="text-2xl">💵</span>
            </div>
            <p className="text-3xl font-bold text-green-500">+${(portfolio.totalProfit / 1000).toFixed(1)}K</p>
            <p className="text-sm text-muted-foreground mt-2">Realized gains</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-muted-foreground">Active Shares</h3>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{portfolio.totalShares}</p>
            <p className="text-sm text-muted-foreground mt-2">In {portfolio.activeShipments} shipments</p>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">🤖 AI Insights</h2>
            <span className="text-sm text-muted-foreground">Powered by AI</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border-2 ${
                  insight.type === 'opportunity'
                    ? 'bg-green-500/10 border-green-500/30'
                    : insight.type === 'warning'
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : insight.type === 'tip'
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : 'bg-purple-500/10 border-purple-500/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">
                    {insight.type === 'opportunity' && '🎯'}
                    {insight.type === 'warning' && '⚠️'}
                    {insight.type === 'tip' && '💡'}
                    {insight.type === 'update' && '📢'}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{insight.message}</p>
                    {insight.action && (
                      <Link
                        href={insight.actionLink || '#'}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        {insight.action} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">🎯 Top Recommendations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {recommendations.map((rec) => {
              const shipment = mockShipments.find(s => s.id === rec.shipmentId)!;
              return (
                <div key={rec.shipmentId} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      rec.confidence >= 90 ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {rec.confidence}% Match
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      rec.riskLevel === 'low' ? 'bg-green-500/20 text-green-500' :
                      rec.riskLevel === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {rec.riskLevel.toUpperCase()} RISK
                    </span>
                  </div>

                  <h3 className="font-bold text-foreground mb-2">{shipment.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expected ROI:</span>
                      <span className="font-semibold text-green-500">+{rec.expectedROI}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Suggested Investment:</span>
                      <span className="font-semibold">{rec.suggestedShares} shares</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{rec.reason}</p>

                  <Link
                    href={`/marketplace/${rec.shipmentId}`}
                    className="block w-full py-2 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/marketplace"
            className="bg-card border border-border rounded-xl p-6 shadow-lg hover:border-primary transition-all group"
          >
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Browse Marketplace
            </h3>
            <p className="text-sm text-muted-foreground">
              Explore {mockShipments.length} available shipments and start investing
            </p>
          </Link>

          <Link
            href="/tracking"
            className="bg-card border border-border rounded-xl p-6 shadow-lg hover:border-primary transition-all group"
          >
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Track Orders
            </h3>
            <p className="text-sm text-muted-foreground">
              Real-time tracking for your {portfolio.activeShipments} active shipments
            </p>
          </Link>

          <Link
            href="/portfolio"
            className="bg-card border border-border rounded-xl p-6 shadow-lg hover:border-primary transition-all group"
          >
            <div className="text-4xl mb-3">💼</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              View Portfolio
            </h3>
            <p className="text-sm text-muted-foreground">
              Manage your investments and track performance
            </p>
          </Link>
        </div>
      </div>

      {/* AI Assistant */}
      <AIAssistant />
    </main>
  );
}

