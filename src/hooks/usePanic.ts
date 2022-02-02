import { Auth } from 'aws-amplify';
import axios from 'axios';
import useSWR from 'swr';

const instance = axios.create({
  baseURL: process.env.REACT_APP_PANIC_ENDPOINT ?? 'np-url-found',
  headers: {
    'Content-Type': 'application/json'
  }
});

const fetcher = (url: string) => Auth.currentAuthenticatedUser().then(user => {
  let accessToken = user.signInUserSession.accessToken.jwtToken;
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  return instance.get(url).then(res => { console.log(res); return res.data }).catch(err => console.log(err));
}).catch(err => console.log(err));

function usePanic() {
  const { data, error } = useSWR('/api/panic', () => fetcher('/api/panic'))

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePanic;