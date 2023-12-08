import { colors } from '@beefreguglia/beef-ui--tokens';
import { getContrast } from 'polished';
import { H2 } from '../H2';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';

function groupColorsByPrefix(colors: { [key: string]: string }) {
  const colorGroups: { [prefix: string]: { key: string; color: string }[] } =
    {};

  for (const key in colors) {
    const prefix = key.match(/^[a-zA-Z]+/)?.[0]; // Extract letters as prefix
    if (prefix) {
      if (!colorGroups[prefix]) {
        colorGroups[prefix] = [];
      }
      colorGroups[prefix].push({ key, color: colors[key] });
    }
  }

  return colorGroups;
}

export function ColorsGrid() {
  const colorGroups = groupColorsByPrefix(colors);

  return (
    <div>
      {Object.entries(colorGroups).map(([prefix, groupColors]) => (
        <div
          key={prefix}
          style={{
            marginBottom: '2rem',
          }}
        >
          <H2>{capitalizeFirstLetter(prefix)}</H2>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1rem',
            }}
          >
            {groupColors.map(({ key, color }) => (
              <div
                key={key}
                style={{
                  backgroundColor: color,
                  border: color === '#FFFFFF' ? '1px solid #93A4C2' : '',
                  padding: '1rem',
                  borderRadius: '10px',
                  width: '160px',
                  height: '160px',
                  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'monospace',
                    color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
                  }}
                >
                  <strong>${key}</strong>
                  <span>{color}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
