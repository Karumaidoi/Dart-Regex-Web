import { useQuery } from 'react-query';
import { getRegex } from '../services/apiRegex';

export function useRegex() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['regex'],
    queryFn: getRegex,
  });

  return { isLoading, error, data };
}
