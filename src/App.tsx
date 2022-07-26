import React from 'react';
import logo from './logo.svg';
import './App.css';
import useSWR from 'swr';


const fetcher = (...args: Array<any>) => fetch(args[0]).then(response => {
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
}
return response.json();
});
function App() {
  const {data, error} = useSWR('/res.json',fetcher, {refreshInterval: 2} )

  console.log(data)
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
