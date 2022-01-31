import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => { console.log(res); return res.data}).catch(err => console.log(err));

function usePanic() {
  const { data, error } = useSWR(process.env.REACT_APP_PANIC_ENDPOINT, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePanic;