import { FabCard, WeatherCard } from '@hakit/components';
import { useEntity } from '@hakit/core';
import { LightGrid } from './LightGrid';
import { LockGrid } from './LockGrid';
import { UtilitiesDetails } from './UtilitiesDetails'; // <-- IMPORT THE NEW COMPONENT
import * as styles from '../styles/MainDashboard.styles';
import { ClimateModalContent } from './ClimateModalContent.tsx';

// Add 'utilities' to the union type
interface ModalManagerProps {
  openPopup: 'lights' | 'locks' | 'climate' | 'weather' | 'utilities' | null;
  isClosing: boolean;
  handleClosePopup: () => void;
}

export function ModalManager({ openPopup, isClosing, handleClosePopup }: ModalManagerProps) {
  const weatherSummary = useEntity('sensor.calgary_summary');

  if (!openPopup) return null;

  const overlayAnim = isClosing ? 'fadeOut 0.2s ease-in forwards' : 'fadeIn 0.2s ease-out forwards';
  const contentAnim = isClosing ? 'scaleDown 0.2s ease-in forwards' : 'scaleUp 0.2s ease-out forwards';

  // Make the utilities modal wide like the weather one
  const isWideModal = openPopup === 'weather' || openPopup === 'utilities';

  const renderContent = () => {
    switch (openPopup) {
      case 'lights':
        return (
          <>
            <h2 style={styles.modalTitleStyle}>Lights</h2>
            <LightGrid />
          </>
        );
      case 'climate':
        return (
          <>
            <h2 style={styles.modalTitleStyle}>Climate Control</h2>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              {/* Swapped to custom component */}
              <ClimateModalContent />
            </div>
          </>
        );
      case 'locks':
        return (
          <>
            <h2 style={styles.modalTitleStyle}>Door Locks</h2>
            <LockGrid />
          </>
        );
      case 'weather':
        return (
          <>
            <h2 style={styles.modalTitleStyle}>Detailed Forecast</h2>
            {weatherSummary.state && weatherSummary.state !== 'unavailable' && (
              <div style={styles.weatherSummaryStyle}>{weatherSummary.state}</div>
            )}
            <WeatherCard
              entity='weather.openweathermap'
              forecastRows={1}
              allowForecastToggle={true}
              includeTitle={false}
              disableModal={true}
              style={{ width: '100%', border: 'none', background: 'transparent' }}
            />
          </>
        );
      case 'utilities': // <-- NEW CASE FOR UTILITIES
        return (
          <>
            <h2 style={styles.modalTitleStyle}>Energy & Utilities</h2>
            <UtilitiesDetails />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ ...styles.modalOverlayStyle, animation: overlayAnim }} onClick={handleClosePopup}>
      <div
        style={{ ...(isWideModal ? styles.weatherModalContentStyle : styles.modalContentStyle), animation: contentAnim }}
        onClick={e => e.stopPropagation()}
      >
        <div style={styles.modalCloseButtonStyle}>
          <FabCard icon='mdi:close' size={32} onClick={handleClosePopup} />
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
