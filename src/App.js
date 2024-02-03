import React, { useEffect, useState } from 'react';


const App = () => {
  const [status, setStatus] = useState(null);

  const checkOnlineStatus = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/1');
      // console.log(response.status)
      if (response.status === 200) {
        const currentTime = new Date().toLocaleTimeString();
        setStatus(`Online - Last checked at ${currentTime}`);
      }
    } catch (error) {
      setStatus('Offline');
    }
  };


  useEffect(() => {
 
    checkOnlineStatus();
// call after 10sec
   setInterval(() => {
      checkOnlineStatus();
    }, 10000);

    
  }, []);

  return (
    <div>
      <h1>Online Status:</h1>
      <p>{status}</p>
    </div>
  );
};

export default App;




