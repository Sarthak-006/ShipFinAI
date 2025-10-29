'use client';

import Link from 'next/link';
import { Shipment } from '@/types/shipping';

interface ShipmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  shipment: Shipment | null;
}

export default function ShipmentDetailsModal({ isOpen, onClose, shipment }: ShipmentDetailsModalProps) {
  if (!isOpen || !shipment) return null;

  const potentialProfit = (shipment.value * (shipment.roi / 100)).toFixed(0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-card border border-border rounded-xl p-8 max-w-4xl w-full my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Shipment Details</h2>
          <button
            onClick={onClose}
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Header with status */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{shipment.name}</h3>
              <p className="text-sm text-muted-foreground">ID: {shipment.id}</p>
            </div>
            <div className="flex gap-2">
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
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Expected ROI</p>
              <p className="text-2xl font-bold text-green-500">+{shipment.roi}%</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Share Price</p>
              <p className="text-2xl font-bold text-foreground">${shipment.shares.pricePerShare}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Available</p>
              <p className="text-2xl font-bold text-foreground">{shipment.shares.available}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total Value</p>
              <p className="text-2xl font-bold text-foreground">${(shipment.value / 1000000).toFixed(1)}M</p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Route Information */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🗺️</span> Route Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Origin:</span>
                <span className="font-semibold">{shipment.origin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Destination:</span>
                <span className="font-semibold">{shipment.destination}</span>
              </div>
              <div className="mt-3">
                <p className="text-muted-foreground text-xs mb-2">Stops:</p>
                <div className="flex flex-wrap gap-2">
                  {shipment.route.map((stop, index) => (
                    <span key={index} className="px-2 py-1 bg-muted rounded text-xs">
                      {stop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>📅</span> Schedule
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Departure:</span>
                <span className="font-semibold">{new Date(shipment.departureDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Arrival:</span>
                <span className="font-semibold">{new Date(shipment.arrivalDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-semibold">
                  {Math.ceil((new Date(shipment.arrivalDate).getTime() - new Date(shipment.departureDate).getTime()) / (1000 * 60 * 60 * 24))} days
                </span>
              </div>
            </div>
          </div>

          {/* Cargo Details */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>📦</span> Cargo Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-semibold capitalize">{shipment.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weight:</span>
                <span className="font-semibold">{shipment.weight.toLocaleString()} tons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Value:</span>
                <span className="font-semibold">${(shipment.value / 1000000).toFixed(1)}M</span>
              </div>
            </div>
          </div>

          {/* Vessel Info */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🚢</span> Vessel Information
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-semibold">{shipment.vessel.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-semibold">{shipment.vessel.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className={`font-semibold ${
                  shipment.status === 'available' ? 'text-green-500' : 'text-yellow-500'
                }`}>
                  {shipment.status.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Projection */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span>💰</span> Investment Potential
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Potential ROI</p>
              <p className="text-3xl font-bold text-green-500">+{shipment.roi}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Potential Profit (Total)</p>
              <p className="text-3xl font-bold text-green-500">${(Number(potentialProfit) / 1000).toFixed(0)}K</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Insurance</p>
              <p className="text-lg font-bold text-green-500">{shipment.insuranceCovered ? '✓ Covered' : '✗ Not Covered'}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
          >
            Close
          </button>
          <Link
            href={`/purchase/${shipment.id}`}
            className="flex-1 py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Invest Now →
          </Link>
        </div>
      </div>
    </div>
  );
}

