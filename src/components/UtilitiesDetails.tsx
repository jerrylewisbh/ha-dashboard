import { useMemo } from 'react';
import { useEntity, useHistory } from '@hakit/core';
import { Icon } from '@iconify/react';
import type { EntityName } from '@hakit/core';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import * as styles from '../styles/UtilitiesDetails.styles';

// --- TYPES ---
type BasicSensor = { state: string | number };

interface HistoryEntry {
  state?: string | number;
  s?: string | number;
  last_updated?: number;
  lu?: number;
}

// --- HELPERS ---
const formatUtility = (val: string | number | undefined, decimals: number = 1) => {
  if (!val || val === 'unknown' || val === 'unavailable') return '--';
  const num = parseFloat(String(val));
  return isNaN(num) ? '--' : num.toFixed(decimals);
};

const formatCurrency = (val: string | number | undefined) => {
  if (!val || val === 'unknown' || val === 'unavailable') return '$0.00';
  const num = parseFloat(String(val));
  return isNaN(num)
    ? '$0.00'
    : new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD',
      }).format(num);
};

// ==========================================
// CUSTOM CHART COMPONENT
// ==========================================
const UtilityChart = ({ entityId, color, unit }: { entityId: EntityName; color: string; unit: string }) => {
  const historyData = useHistory(entityId, {
    hoursToShow: 24,
    significantChangesOnly: true,
  });

  const chartData = useMemo(() => {
    if (!historyData || historyData.loading || !historyData.entityHistory) return null;

    return (historyData.entityHistory as HistoryEntry[])
      .map(entry => {
        const timestamp = entry.last_updated ?? entry.lu;
        const stateValue = entry.state ?? entry.s;

        return {
          time: timestamp ? new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
          value: Number(stateValue),
        };
      })
      .filter(entry => !isNaN(entry.value));
  }, [historyData]);

  if (!chartData || chartData.length === 0) {
    return (
      <div style={styles.chartLoadingStyle}>
        Loading telemetry...
        <span style={styles.chartLoadingSubStyle}>(Historical data required)</span>
      </div>
    );
  }

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
        <defs>
          <linearGradient id={`color-${entityId}`} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={color} stopOpacity={0.4} />
            <stop offset='95%' stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray='3 3' stroke='rgba(255,255,255,0.05)' vertical={false} />

        <XAxis dataKey='time' stroke='rgba(255,255,255,0.2)' fontSize={9} tickLine={false} axisLine={false} minTickGap={40} />

        <YAxis domain={['auto', 'auto']} stroke='rgba(255,255,255,0.2)' fontSize={9} tickLine={false} axisLine={false} />

        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(20,20,25,0.95)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
          }}
          itemStyle={{ color: color, fontWeight: 800 }}
          // FIXED: Use 'readonly' to satisfy the strict Recharts Tooltip types
          formatter={(value: string | number | readonly (string | number)[] | undefined) => {
            const num = Number(Array.isArray(value) ? value[0] : value);
            const displayValue = !isNaN(num) ? num.toFixed(2) : '--';
            return [`${displayValue} ${unit}`, 'Usage'];
          }}
        />

        <Area
          type='monotone'
          dataKey='value'
          stroke={color}
          strokeWidth={2}
          fillOpacity={1}
          fill={`url(#color-${entityId})`}
          isAnimationActive={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// ==========================================
// MAIN UTILITIES COMPONENT
// ==========================================
export function UtilitiesDetails() {
  // --- ELECTRICITY ---
  const elecDaily = useEntity('sensor.house_electricity_daily' as never) as unknown as BasicSensor;
  const elecMonthly = useEntity('sensor.energy_monitor_energy_this_month' as never) as unknown as BasicSensor;
  const elecTotal = useEntity('sensor.house_electricity_lifetime_total' as never) as unknown as BasicSensor;
  const elecCostToday = useEntity('sensor.house_electricity_cost_today' as never) as unknown as BasicSensor;
  const elecCostMonth = useEntity('sensor.house_electricity_cost_month' as never) as unknown as BasicSensor;

  // --- WATER ---
  const waterDaily = useEntity('sensor.house_water_daily' as never) as unknown as BasicSensor;
  const waterMonthly = useEntity('sensor.house_water_monthly' as never) as unknown as BasicSensor;
  const waterTotal = useEntity('sensor.house_water_house_water_2' as never) as unknown as BasicSensor;
  const waterCostToday = useEntity('sensor.house_water_cost_today' as never) as unknown as BasicSensor;
  const waterCostMonth = useEntity('sensor.house_water_cost_monthly' as never) as unknown as BasicSensor;

  // --- GAS ---
  const gasDaily = useEntity('sensor.house_gas_daily' as never) as unknown as BasicSensor;
  const gasMonthly = useEntity('sensor.house_gas_monthly' as never) as unknown as BasicSensor;
  const gasTotal = useEntity('sensor.house_gas_m3' as never) as unknown as BasicSensor;
  const gasCostToday = useEntity('sensor.house_gas_cost_today' as never) as unknown as BasicSensor;
  const gasCostMonth = useEntity('sensor.house_gas_cost_month' as never) as unknown as BasicSensor;

  return (
    <div style={styles.popupContainerStyle}>
      {/* ELECTRICITY COLUMN */}
      <div style={styles.columnStyle}>
        <div style={styles.headerStyle}>
          <Icon icon='mdi:flash' style={{ fontSize: '1.8rem', color: '#FFD700' }} />
          <span style={styles.headerTitleStyle}>Electricity</span>
        </div>

        <div style={styles.dataRowStyle}>
          <div>
            <div style={styles.labelStyle}>Today</div>
            <div style={{ fontSize: '0.75rem', color: '#FFD700', fontWeight: 700 }}>{formatCurrency(elecCostToday?.state)}</div>
          </div>
          <div>
            <span style={styles.valueStyle}>{formatUtility(elecDaily?.state, 1)}</span>
            <span style={styles.unitStyle}>kWh</span>
          </div>
        </div>

        <div style={styles.dataRowStyle}>
          <div>
            <div style={styles.labelStyle}>This Month</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{formatCurrency(elecCostMonth?.state)}</div>
          </div>
          <div>
            <span style={styles.valueStyle}>{formatUtility(elecMonthly?.state, 0)}</span>
            <span style={styles.unitStyle}>kWh</span>
          </div>
        </div>

        <div style={styles.dataRowStyle}>
          <span style={styles.labelStyle}>Lifetime</span>
          <div>
            <span style={styles.valueStyle}>{formatUtility(elecTotal?.state, 0)}</span>
            <span style={styles.unitStyle}>kWh</span>
          </div>
        </div>

        <div style={styles.graphWrapperStyle}>
          <UtilityChart entityId={'sensor.energy_monitor_power_minute_average' as EntityName} color='#FFD700' unit='W' />
        </div>
      </div>

      {/* WATER COLUMN */}
      <div style={styles.columnStyle}>
        <div style={styles.headerStyle}>
          <Icon icon='mdi:water' style={{ fontSize: '1.8rem', color: '#00d4ff' }} />
          <span style={styles.headerTitleStyle}>Water</span>
        </div>

        <div style={styles.dataRowStyle}>
          <div>
            <div style={styles.labelStyle}>Today</div>
            <div style={{ fontSize: '0.75rem', color: '#00d4ff', fontWeight: 700 }}>{formatCurrency(waterCostToday?.state)}</div>
          </div>
          <div>
            <span style={styles.valueStyle}>{formatUtility(waterDaily?.state, 0)}</span>
            <span style={styles.unitStyle}>L</span>
          </div>
        </div>

        <div style={styles.dataRowStyle}>
          <div>
            <div style={styles.labelStyle}>This Month</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{formatCurrency(waterCostMonth?.state)}</div>
          </div>
          <div>
            <span style={styles.valueStyle}>{formatUtility(waterMonthly?.state, 0)}</span>
            <span style={styles.unitStyle}>L</span>
          </div>
        </div>

        <div style={styles.dataRowStyle}>
          <span style={styles.labelStyle}>Lifetime</span>
          <div>
            <span style={styles.valueStyle}>
              {waterTotal?.state && !isNaN(Number(waterTotal.state)) ? formatUtility(Number(waterTotal.state) / 1000, 1) : '--'}
            </span>
            <span style={styles.unitStyle}>m³</span>
          </div>
        </div>

        <div style={styles.graphWrapperStyle}>
          <UtilityChart entityId={'sensor.house_water_flow_rate' as EntityName} color='#00d4ff' unit='L/min' />
        </div>
      </div>

      {/* GAS COLUMN */}
      <div style={styles.columnStyle}>
        <div style={styles.headerStyle}>
          <Icon icon='mdi:fire' style={{ fontSize: '1.8rem', color: '#ff5722' }} />
          <span style={styles.headerTitleStyle}>Gas</span>
        </div>

        <div style={styles.dataRowStyle}>
          <div>
            <div style={styles.labelStyle}>Today</div>
            <div style={{ fontSize: '0.75rem', color: '#ff5722', fontWeight: 700 }}>{formatCurrency(gasCostToday?.state)}</div>
          </div>
          <div>
            <span style={styles.valueStyle}>{formatUtility(gasDaily?.state, 2)}</span>
            <span style={styles.unitStyle}>m³</span>
          </div>
        </div>

        <div style={styles.dataRowStyle}>
          <div>
            <div style={styles.labelStyle}>This Month</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{formatCurrency(gasCostMonth?.state)}</div>
          </div>
          <div>
            <span style={styles.valueStyle}>{formatUtility(gasMonthly?.state, 2)}</span>
            <span style={styles.unitStyle}>m³</span>
          </div>
        </div>

        <div style={styles.dataRowStyle}>
          <span style={styles.labelStyle}>Lifetime</span>
          <div>
            <span style={styles.valueStyle}>{formatUtility(gasTotal?.state, 2)}</span>
            <span style={styles.unitStyle}>m³</span>
          </div>
        </div>

        <div style={styles.graphWrapperStyle}>
          <UtilityChart entityId={'sensor.house_gas_flow_rate' as EntityName} color='#ff5722' unit='m³/h' />
        </div>
      </div>
    </div>
  );
}
