import { colors } from '@axesoft-ui/tokens';
import { getContrast} from 'polished';

export const ColorsGrid = () => {
  const colorsArray = Object.entries(colors);
  
  return colorsArray.map(([name, color]) => {
    return (
      <div
        key={name}
        style={{ backgroundColor: color, padding: '2rem' }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff' 
        }}><strong>${name}</strong></div>

        <span style={{
          color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff' 
        }}>{color}</span>
      </div>
    );});
};
