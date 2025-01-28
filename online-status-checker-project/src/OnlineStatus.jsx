import { useState, useEffect } from 'react';
import './App.css'


const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={`online-status ${isOnline ? 'online' : 'offline'}`}>
      <h2>You are currently {isOnline ? 'Online' : 'Offline'}</h2>
    </div>
  );
};

export default OnlineStatus;
