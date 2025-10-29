import { Shipment, Order, Portfolio, AIRecommendation, AIInsight, TrackingUpdate } from '@/types/shipping';

export const mockShipments: Shipment[] = [
  {
    id: 'SH001',
    name: 'Shanghai to Rotterdam Electronics',
    origin: 'Shanghai, China',
    destination: 'Rotterdam, Netherlands',
    type: 'container',
    weight: 2500,
    value: 1500000,
    departureDate: '2025-11-05',
    arrivalDate: '2025-12-10',
    status: 'available',
    shares: {
      total: 1000,
      available: 750,
      pricePerShare: 1500
    },
    route: ['Shanghai', 'Singapore', 'Suez Canal', 'Rotterdam'],
    vessel: {
      name: 'Pacific Trader',
      type: 'Container Ship'
    },
    risk: 'low',
    roi: 12.5,
    insuranceCovered: true
  },
  {
    id: 'SH002',
    name: 'Dubai to New York Luxury Goods',
    origin: 'Dubai, UAE',
    destination: 'New York, USA',
    type: 'container',
    weight: 1800,
    value: 2800000,
    departureDate: '2025-11-10',
    arrivalDate: '2025-12-05',
    status: 'available',
    shares: {
      total: 1500,
      available: 1200,
      pricePerShare: 1866
    },
    route: ['Dubai', 'Suez Canal', 'Gibraltar', 'New York'],
    vessel: {
      name: 'Atlantic Express',
      type: 'Container Ship'
    },
    risk: 'medium',
    roi: 15.8,
    insuranceCovered: true
  },
  {
    id: 'SH003',
    name: 'Singapore to Los Angeles Tech Components',
    origin: 'Singapore',
    destination: 'Los Angeles, USA',
    type: 'container',
    weight: 3200,
    value: 3500000,
    departureDate: '2025-11-15',
    arrivalDate: '2025-12-20',
    status: 'available',
    shares: {
      total: 2000,
      available: 1800,
      pricePerShare: 1750
    },
    route: ['Singapore', 'Hong Kong', 'Tokyo', 'Los Angeles'],
    vessel: {
      name: 'Pacific Navigator',
      type: 'Container Ship'
    },
    risk: 'low',
    roi: 14.2,
    insuranceCovered: true
  },
  {
    id: 'SH004',
    name: 'Santos to Hamburg Coffee Beans',
    origin: 'Santos, Brazil',
    destination: 'Hamburg, Germany',
    type: 'bulk',
    weight: 5000,
    value: 800000,
    departureDate: '2025-11-08',
    arrivalDate: '2025-12-15',
    status: 'available',
    shares: {
      total: 800,
      available: 320,
      pricePerShare: 1000
    },
    route: ['Santos', 'Rio de Janeiro', 'Lisbon', 'Hamburg'],
    vessel: {
      name: 'Atlantic Cargo',
      type: 'Bulk Carrier'
    },
    risk: 'medium',
    roi: 10.5,
    insuranceCovered: true
  },
  {
    id: 'SH005',
    name: 'Jeddah to Mumbai Oil Transport',
    origin: 'Jeddah, Saudi Arabia',
    destination: 'Mumbai, India',
    type: 'liquid',
    weight: 8000,
    value: 4200000,
    departureDate: '2025-11-12',
    arrivalDate: '2025-11-28',
    status: 'available',
    shares: {
      total: 2500,
      available: 2100,
      pricePerShare: 1680
    },
    route: ['Jeddah', 'Aden', 'Mumbai'],
    vessel: {
      name: 'Gulf Tanker',
      type: 'Oil Tanker'
    },
    risk: 'high',
    roi: 18.5,
    insuranceCovered: true
  },
  {
    id: 'SH006',
    name: 'Vancouver to Tokyo Lumber',
    origin: 'Vancouver, Canada',
    destination: 'Tokyo, Japan',
    type: 'bulk',
    weight: 4500,
    value: 950000,
    departureDate: '2025-11-20',
    arrivalDate: '2025-12-08',
    status: 'available',
    shares: {
      total: 950,
      available: 850,
      pricePerShare: 1000
    },
    route: ['Vancouver', 'Anchorage', 'Tokyo'],
    vessel: {
      name: 'Pacific Logger',
      type: 'Bulk Carrier'
    },
    risk: 'low',
    roi: 11.2,
    insuranceCovered: true
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    shipmentId: 'SH001',
    shipmentName: 'Shanghai to Rotterdam Electronics',
    shares: 50,
    totalInvested: 75000,
    purchaseDate: '2025-10-28',
    status: 'active',
    currentValue: 81250,
    profit: 6250,
    trackingUpdates: [
      {
        id: 'TU001',
        timestamp: '2025-10-30T10:00:00Z',
        location: 'Shanghai Port',
        status: 'Departed',
        message: 'Shipment has departed from Shanghai Port'
      },
      {
        id: 'TU002',
        timestamp: '2025-11-02T15:30:00Z',
        location: 'Singapore',
        status: 'In Transit',
        message: 'Passing through Singapore - On schedule'
      }
    ]
  },
  {
    id: 'ORD002',
    shipmentId: 'SH004',
    shipmentName: 'Santos to Hamburg Coffee Beans',
    shares: 100,
    totalInvested: 100000,
    purchaseDate: '2025-10-25',
    status: 'active',
    currentValue: 105000,
    profit: 5000,
    trackingUpdates: [
      {
        id: 'TU003',
        timestamp: '2025-10-26T08:00:00Z',
        location: 'Santos Port',
        status: 'Departed',
        message: 'Coffee shipment loaded and departed'
      }
    ]
  }
];

export const mockPortfolio: Portfolio = {
  totalInvested: 175000,
  currentValue: 186250,
  totalProfit: 11250,
  totalShares: 150,
  activeShipments: 2,
  orders: mockOrders
};

export const mockAIRecommendations: AIRecommendation[] = [
  {
    shipmentId: 'SH003',
    confidence: 92,
    reason: 'Tech components have high demand. Route is well-established with minimal delays historically.',
    expectedROI: 14.2,
    riskLevel: 'low',
    suggestedShares: 75
  },
  {
    shipmentId: 'SH002',
    confidence: 85,
    reason: 'Luxury goods market is strong. Higher ROI but moderate risk due to value.',
    expectedROI: 15.8,
    riskLevel: 'medium',
    suggestedShares: 50
  },
  {
    shipmentId: 'SH006',
    confidence: 88,
    reason: 'Lumber demand in Asia is increasing. Short route with low risk.',
    expectedROI: 11.2,
    riskLevel: 'low',
    suggestedShares: 60
  }
];

export const mockAIInsights: AIInsight[] = [
  {
    type: 'opportunity',
    title: 'High-ROI Opportunity Detected',
    message: 'Oil transport shipment from Jeddah to Mumbai shows 18.5% ROI with 84% available shares.',
    action: 'View Details',
    actionLink: '/marketplace/SH005'
  },
  {
    type: 'tip',
    title: 'Diversification Recommended',
    message: 'Your portfolio is concentrated in container shipments. Consider bulk or liquid cargo for better balance.',
    action: 'Explore Options',
    actionLink: '/marketplace?filter=bulk,liquid'
  },
  {
    type: 'update',
    title: 'Shipment On Schedule',
    message: 'Your Shanghai to Rotterdam shipment is passing through Singapore on time.',
    action: 'Track Now',
    actionLink: '/orders/ORD001'
  },
  {
    type: 'warning',
    title: 'Market Alert',
    message: 'Container shipping rates may increase next month. Consider locking in current prices.',
    action: 'View Marketplace',
    actionLink: '/marketplace'
  }
];

