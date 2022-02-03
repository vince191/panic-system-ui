import useSWR from 'swr';
import { get } from '../api/api';


const fetcher = (url: string) => get(url);

function usePanic() {
  const { data, error } = useSWR('/api/panic', () => fetcher('/api/panic'))

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePanic;