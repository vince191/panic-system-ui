import { Auth } from 'aws-amplify';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string, accessToken: string) => axios.get(url, {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
}).then(res => { console.log(res); return res.data }).catch(err => console.log(err));

function usePanic() {
  const url = process.env.REACT_APP_PANIC_ENDPOINT ?? 'np-url-found';
  let accessToken = '';

  Auth.currentAuthenticatedUser().then(user => {
    accessToken = user.signInUserSession.accessToken.jwtToken;
    console.log('access token found', accessToken);
  }).catch(err => console.log(err));

  
  const { data, error } = useSWR(url, () => fetcher(url, accessToken))

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePanic;