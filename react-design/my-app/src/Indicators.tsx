import './Indicators.css';

type Props = {
  current: number;
  count: number;
  onClick: (index: number) => void;
};

export function Indicators({ current, count, onClick }: Props) {
  return (
    <ul>
      {Array.from({ length: count }, (_, index) => (
        <li key={index} onClick={() => onClick(index)}>
          <button style={{ backgroundColor: index === current ? 'blue' : '' }}>
            {index}
          </button>
        </li>
      ))}
    </ul>
  );
}
