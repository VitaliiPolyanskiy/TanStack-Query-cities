import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCities } from '../api/citiesApi';
import { City } from '../types/City';

export const CitiesList = () => {
  const [cities, setCities] = useState<City[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cities'],
    queryFn: fetchCities,
  });

  useEffect(() => {
    if (data) {
      setCities(data.cities)
    }
  }, [data]);

  if (isLoading) return <p>Загрузка...</p>
  if (isError) return <p>Ошибка загрузки данных</p>

  return (
    <ul className="cities-list">
      {cities.map(city => (
        <li key={city.name} className="city-item">
          <strong>{city.name}</strong>
          <span>{city.population.toLocaleString()} чел.</span>
        </li>
      ))}
    </ul>
  );
}
