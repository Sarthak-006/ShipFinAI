'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { mockShipments, mockAIRecommendations } from '@/lib/mockData';
import AIAssistant from '@/components/AIAssistant';
import PurchaseConfirmation from '@/components/PurchaseConfirmation';

export default function PurchasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const shipment = mockShipments.find(s => s.id === id);
  const aiRec = mockAIRecommendations.find(r => r.shipmentId === id);

  const [shares, setShares] = useState(aiRec?.suggestedShares || 10);
  const [step, setStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!shipment) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Shipment not found</p>
    </div>;
  }

  const totalInvestment = shares * shipment.shares.pricePerShare;
  const estimatedReturn = totalInvestment * (shipment.roi / 100);
  const estimatedValue = totalInvestment + estimatedReturn;

  const handleSharesChange = (value: number) => {
    const newShares = Math.max(1, Math.min(value, shipment.shares.available));
    setShares(newShares);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/marketplace" className="text-2xl hover:opacity-70 transition-opacity">←</Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Purchase Shares</h1>
                <p className="text-sm text-muted-foreground">AI-Assisted Investment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                <span className={`text-sm ${step >= s ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s === 1 ? 'Review' : s === 2 ? 'Configure' : 'Confirm'}
                </span>
                {s < 3 && <span className="text-muted-foreground mx-2">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipment Details */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">{shipment.name}</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Origin</p>
                  <p className="font-semibold">{shipment.origin}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Destination</p>
                  <p className="font-semibold">{shipment.destination}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Departure</p>
                  <p className="font-semibold">{new Date(shipment.departureDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Arrival</p>
                  <p className="font-semibold">{new Date(shipment.arrivalDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  shipment.risk === 'low' ? 'bg-green-500/20 text-green-500' :
                  shipment.risk === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-red-500/20 text-red-500'
                }`}>
                  {shipment.risk.toUpperCase()} RISK
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                  {shipment.type.toUpperCase()}
                </span>
                {shipment.insuranceCovered && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs font-semibold">
                    🛡️ INSURED
                  </span>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground mb-2">Route</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {shipment.route.map((location, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-muted rounded-lg text-sm">{location}</span>
                      {index < shipment.route.length - 1 && <span className="text-muted-foreground">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            {aiRec && (
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">🤖</span>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">AI Recommendation</h3>
                    <p className="text-sm text-muted-foreground">Based on market analysis and your portfolio</p>
                  </div>
                </div>
                
                <div className="bg-card/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Confidence Level</span>
                    <span className="font-bold text-primary">{aiRec.confidence}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${aiRec.confidence}%` }}
                    />
                  </div>
                </div>

                <p className="text-sm text-foreground mb-3">💡 {aiRec.reason}</p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-card/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Suggested Shares</p>
                    <p className="text-xl font-bold text-foreground">{aiRec.suggestedShares}</p>
                  </div>
                  <div className="bg-card/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Expected ROI</p>
                    <p className="text-xl font-bold text-green-500">+{aiRec.expectedROI}%</p>
                  </div>
                </div>

                <button
                  onClick={() => setShares(aiRec.suggestedShares)}
                  className="w-full mt-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Use AI Suggestion
                </button>
              </div>
            )}

            {/* Share Configuration */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4">Configure Your Investment</h3>

              <div className="mb-6">
                <label className="block text-sm text-muted-foreground mb-2">
                  Number of Shares
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleSharesChange(shares - 10)}
                    className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg font-bold transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={shares}
                    onChange={(e) => handleSharesChange(parseInt(e.target.value) || 1)}
                    className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary"
                    min="1"
                    max={shipment.shares.available}
                  />
                  <button
                    onClick={() => handleSharesChange(shares + 10)}
                    className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {shipment.shares.available} shares available
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price per share:</span>
                  <span className="font-semibold">${shipment.shares.pricePerShare.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shares:</span>
                  <span className="font-semibold">{shares}</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-semibold">Total Investment:</span>
                  <span className="text-xl font-bold text-primary">${totalInvestment.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Projected Returns</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expected ROI:</span>
                    <span className="font-semibold text-green-500">+{shipment.roi}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Profit:</span>
                    <span className="font-semibold text-green-500">+${estimatedReturn.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-green-500/30 pt-2">
                    <span className="font-semibold">Projected Value:</span>
                    <span className="text-lg font-bold text-green-500">${estimatedValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-6 shadow-lg sticky top-8">
              <h3 className="font-bold text-foreground mb-4">Investment Summary</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Shipment</p>
                  <p className="font-semibold text-sm">{shipment.name}</p>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Shares</p>
                  <p className="text-2xl font-bold text-foreground">{shares}</p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Total Investment</p>
                  <p className="text-2xl font-bold text-primary">${totalInvestment.toLocaleString()}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Expected Return</p>
                  <p className="text-xl font-bold text-green-500">+${estimatedReturn.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">({shipment.roi}% ROI)</p>
                </div>
              </div>

              <button
                onClick={() => {
                  if (step < 3) {
                    setStep(step + 1);
                  } else {
                    setShowConfirmation(true);
                  }
                }}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-opacity mb-3"
              >
                {step === 3 ? 'Confirm Purchase' : 'Continue'}
              </button>

              <Link
                href="/marketplace"
                className="block w-full py-2 text-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </Link>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>✓</span>
                  <span>Secured by blockchain</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>✓</span>
                  <span>Fully insured shipment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>✓</span>
                  <span>Real-time tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AIAssistant />

      {/* Purchase Confirmation Modal */}
      <PurchaseConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        shipmentName={shipment.name}
        shares={shares}
        totalInvestment={totalInvestment}
        estimatedReturn={estimatedReturn}
      />
    </main>
  );
}

