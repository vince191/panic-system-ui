import { Auth } from 'aws-amplify';
import axios from 'axios';
import useSWR from 'swr';

const instance = axios.create({
  baseURL: process.env.REACT_APP_PANIC_ENDPOINT ?? 'np-url-found',
  headers: {
    'Content-Type': 'application/json'
  }
});

const fetcher = (url: string) => instance.get(url).then(res => { console.log(res); return res.data }).catch(err => console.log(err));

function usePanic() {
  const url = process.env.REACT_APP_PANIC_ENDPOINT ?? 'np-url-found';
  let accessToken = '';

  Auth.currentAuthenticatedUser().then(user => {
    accessToken = user.signInUserSession.accessToken.jwtToken;
    instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }).catch(err => console.log(err));


  const { data, error } = useSWR(url, () => fetcher(url))

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePanic;