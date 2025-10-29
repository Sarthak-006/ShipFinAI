'use client';

import { useState } from 'react';

interface PurchaseConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  shipmentName: string;
  shares: number;
  totalInvestment: number;
  estimatedReturn: number;
}

export default function PurchaseConfirmation({
  isOpen,
  onClose,
  shipmentName,
  shares,
  totalInvestment,
  estimatedReturn
}: PurchaseConfirmationProps) {
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      // Auto close after showing success
      setTimeout(() => {
        onClose();
        window.location.href = '/portfolio';
      }, 2000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card border-2 border-green-500 rounded-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Purchase Successful!</h2>
          <p className="text-muted-foreground mb-4">
            Your investment has been confirmed. Redirecting to portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-foreground mb-4">Confirm Purchase</h2>
        
        <div className="space-y-4 mb-6">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Shipment</p>
            <p className="font-semibold text-foreground">{shipmentName}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Shares</p>
              <p className="text-2xl font-bold text-foreground">{shares}</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Total</p>
              <p className="text-2xl font-bold text-primary">${totalInvestment.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Expected Return</p>
            <p className="text-xl font-bold text-green-500">+${estimatedReturn.toLocaleString()}</p>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>✓ Transaction secured by blockchain</p>
            <p>✓ Shipment fully insured</p>
            <p>✓ Real-time tracking enabled</p>
          </div>
        </div>

        {processing ? (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
            <p className="text-sm text-muted-foreground mt-2">Processing payment...</p>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Confirm Purchase
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

