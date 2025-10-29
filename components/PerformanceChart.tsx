'use client';

interface PerformanceChartProps {
  totalInvested: number;
  currentValue: number;
}

export default function PerformanceChart({ totalInvested, currentValue }: PerformanceChartProps) {
  // Generate mock historical data
  const generateChartData = () => {
    const days = 30;
    const data = [];
    const growth = (currentValue - totalInvested) / totalInvested;
    const dailyGrowth = growth / days;

    for (let i = 0; i <= days; i++) {
      const value = totalInvested * (1 + (dailyGrowth * i));
      data.push({
        day: i,
        value: value,
        date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000)
      });
    }
    return data;
  };

  const chartData = generateChartData();
  const maxValue = Math.max(...chartData.map(d => d.value));
  const minValue = Math.min(...chartData.map(d => d.value));
  const range = maxValue - minValue;

  return (
    <div className="w-full">
      {/* Chart */}
      <div className="relative h-64 bg-muted/30 rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.1"
              className="text-muted"
              opacity="0.3"
            />
          ))}

          {/* Line chart */}
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
            points={chartData
              .map((point, index) => {
                const x = (index / (chartData.length - 1)) * 100;
                const y = 100 - ((point.value - minValue) / range) * 100;
                return `${x},${y}`;
              })
              .join(' ')}
          />

          {/* Fill area */}
          <polygon
            fill="currentColor"
            className="text-primary opacity-10"
            points={
              chartData
                .map((point, index) => {
                  const x = (index / (chartData.length - 1)) * 100;
                  const y = 100 - ((point.value - minValue) / range) * 100;
                  return `${x},${y}`;
                })
                .join(' ') + ' 100,100 0,100'
            }
          />
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground pr-2">
          <span>${(maxValue / 1000).toFixed(0)}K</span>
          <span>${((maxValue + minValue) / 2000).toFixed(0)}K</span>
          <span>${(minValue / 1000).toFixed(0)}K</span>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between text-xs text-muted-foreground mt-2 px-4">
        <span>{chartData[0].date.toLocaleDateString([], { month: 'short', day: 'numeric' })}</span>
        <span>15 days</span>
        <span>{chartData[chartData.length - 1].date.toLocaleDateString([], { month: 'short', day: 'numeric' })}</span>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-muted-foreground">Portfolio Value</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-muted rounded-full"></div>
          <span className="text-muted-foreground">Initial Investment</span>
        </div>
      </div>
    </div>
  );
}

