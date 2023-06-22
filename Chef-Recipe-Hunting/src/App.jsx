import React, { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    fetch('https://chef-recipe-hunting-server-abdur-rahman.vercel.app/chefinfo')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App;