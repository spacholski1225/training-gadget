import React from 'react';

interface HeatmapDayProps {
  date: string;
  colorClass: string;
  onClick: () => void;
}

const HeatmapDay: React.FC<HeatmapDayProps> = ({ date, colorClass, onClick }) => {
  const formatTooltip = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pl-PL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      className={`heatmap-day ${colorClass}`}
      onClick={onClick}
      title={formatTooltip(date)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    />
  );
};

export default HeatmapDay;