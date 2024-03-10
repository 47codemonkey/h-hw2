import { useList } from './hook';

type ListProps = {
  cityList: string[];
  cityColor: string;
};

export const List: React.FC<ListProps> = ({ cityList, cityColor }) => {
  const { city, color } = useList({ cityList, cityColor });

  return (
    <ul style={{ backgroundColor: color }}>
      {city.map((cityItem, index) => (
        <li key={index}>{cityItem}</li>
      ))}
    </ul>
  );
};
