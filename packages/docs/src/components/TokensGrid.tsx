import {  } from '@ignite-ui/tokens';
import '../styles/tokens-grid.css';

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export const TokensGrid = ({tokens, hasRemValue = false}: TokensGridProps) => {
  const tokensArray = Object.entries(tokens);
  
  return (
    <table className='tokens-grid'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Rem</th>}
        </tr>
      </thead>

      <tbody>
        {tokensArray.map(([key, value]) => {
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
