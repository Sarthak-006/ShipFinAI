// Core types for the AI Shipping Platform

export interface Shipment {
  id: string;
  name: string;
  origin: string;
  destination: string;
  type: 'container' | 'bulk' | 'liquid' | 'refrigerated';
  weight: number; // in tons
  value: number; // in USD
  departureDate: string;
  arrivalDate: string;
  status: 'available' | 'in-transit' | 'delivered' | 'delayed';
  shares: {
    total: number;
    available: number;
    pricePerShare: number;
  };
  route: string[];
  vessel: {
    name: string;
    type: string;
    image?: string;
  };
  risk: 'low' | 'medium' | 'high';
  roi: number; // expected return on investment (%)
  insuranceCovered: boolean;
}

export interface Order {
  id: string;
  shipmentId: string;
  shipmentName: string;
  shares: number;
  totalInvested: number;
  purchaseDate: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  currentValue: number;
  profit: number;
  trackingUpdates: TrackingUpdate[];
}

export interface TrackingUpdate {
  id: string;
  timestamp: string;
  location: string;
  status: string;
  message: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Portfolio {
  totalInvested: number;
  currentValue: number;
  totalProfit: number;
  totalShares: number;
  activeShipments: number;
  orders: Order[];
}

export interface AIRecommendation {
  shipmentId: string;
  confidence: number; // 0-100
  reason: string;
  expectedROI: number;
  riskLevel: 'low' | 'medium' | 'high';
  suggestedShares: number;
}

export interface AIInsight {
  type: 'tip' | 'warning' | 'opportunity' | 'update';
  title: string;
  message: string;
  action?: string;
  actionLink?: string;
}

