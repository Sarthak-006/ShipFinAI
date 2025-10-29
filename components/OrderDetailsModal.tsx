'use client';

import { Order } from '@/types/shipping';

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

export default function OrderDetailsModal({ isOpen, onClose, order }: OrderDetailsModalProps) {
  if (!isOpen || !order) return null;

  const profitPercentage = ((order.profit / order.totalInvested) * 100).toFixed(2);

  const handleExport = () => {
    const reportData = `
SHIPMENT ORDER REPORT
=====================

Order ID: ${order.id}
Shipment: ${order.shipmentName}
Status: ${order.status.toUpperCase()}

INVESTMENT DETAILS
------------------
Shares Owned: ${order.shares}
Purchase Date: ${new Date(order.purchaseDate).toLocaleDateString()}
Total Invested: $${order.totalInvested.toLocaleString()}

PERFORMANCE
-----------
Current Value: $${order.currentValue.toLocaleString()}
Profit/Loss: $${order.profit.toLocaleString()} (${profitPercentage}%)

TRACKING HISTORY
----------------
${order.trackingUpdates.map(update => `
${new Date(update.timestamp).toLocaleString()}
Location: ${update.location}
Status: ${update.status}
${update.message}
`).join('\n')}

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-card border border-border rounded-xl p-8 max-w-3xl w-full my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Order Details</h2>
          <button
            onClick={onClose}
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Order Info */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">{order.shipmentName}</h3>
              <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              order.status === 'active' ? 'bg-green-500/20 text-green-500' :
              order.status === 'completed' ? 'bg-blue-500/20 text-blue-500' :
              'bg-yellow-500/20 text-yellow-500'
            }`}>
              {order.status.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Shares</p>
              <p className="text-xl font-bold text-foreground">{order.shares}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Invested</p>
              <p className="text-xl font-bold text-foreground">${order.totalInvested.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Current Value</p>
              <p className="text-xl font-bold text-foreground">${order.currentValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Profit</p>
              <p className={`text-xl font-bold ${order.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {order.profit >= 0 ? '+' : ''}{order.profit.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-4">Tracking History</h3>
          <div className="space-y-4 max-h-64 overflow-y-auto">
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

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Purchase Date</p>
            <p className="text-lg font-semibold text-foreground">
              {new Date(order.purchaseDate).toLocaleDateString()}
            </p>
          </div>
          <div className={`rounded-lg p-4 ${
            order.profit >= 0 ? 'bg-green-500/10' : 'bg-red-500/10'
          }`}>
            <p className="text-sm text-muted-foreground mb-1">Return Rate</p>
            <p className={`text-lg font-semibold ${
              order.profit >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {order.profit >= 0 ? '+' : ''}{profitPercentage}%
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            📥 Export Report
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

