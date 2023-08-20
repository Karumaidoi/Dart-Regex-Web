import { useQuery } from 'react-query';
import { getRegex as getRegexApi } from '../services/apiRegex';

export function useRegex() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['regex'],
    queryFn: getRegexApi,
  });

  return { isLoading, error, data };
}
