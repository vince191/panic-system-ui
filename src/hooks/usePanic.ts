import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data.Items).catch(err => console.log(err));
 
function usePanic() {
  console.log(process.env.REACT_APP_PANIC_ENDPOINT);
  const { data, error } = useSWR( process.env.REACT_APP_PANIC_ENDPOINT, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePanic;