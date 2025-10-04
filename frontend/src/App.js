import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Carregando...');

  useEffect(() => {
    // Example fetch to backend root (proxied to Spring Boot at :8080)
    fetch('/').then(async (res) => {
      if (!res.ok) {
        setMessage('Backend indisponível');
        return;
      }
      const text = await res.text();
      setMessage('Backend respondeu: ' + text.substring(0, 120));
    }).catch(() => setMessage('Erro ao conectar ao backend'));
  }, []);

  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: 24}}>
      <h1>To-Do List — Frontend React</h1>
      <p>{message}</p>
      <p>Exemplos de arquivos: <code>frontend/src/App.js</code>, <code>frontend/package.json</code></p>
    </div>
  );
}

export default App;
