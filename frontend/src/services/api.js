
const baseURL = 'http://localhost:8080';

// Configurações padrão
const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include' // Para cookies/sessão se necessário
};

// Função para fazer requisições HTTP
async function request(endpoint, options = {}) {
  const url = `${baseURL}${endpoint}`;
  
  console.log(`🔄 Fazendo request: ${options.method || 'GET'} ${url}`);
  
  const config = {
    ...defaultConfig,
    ...options,
    headers: {
      ...defaultConfig.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    console.log(`✅ Response recebido: ${response.status} ${response.statusText}`);
    
    // Se a resposta não for bem-sucedida, lança erro
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      
      // Tenta extrair mensagem de erro do corpo da resposta
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // Se não conseguir parsear JSON, usa texto simples
        const errorText = await response.text();
        errorMessage = errorText || errorMessage;
      }
      
      throw new Error(errorMessage);
    }
    
    // Para respostas sem conteúdo (como DELETE), retorna true
    if (response.status === 204 || response.headers.get('Content-Length') === '0') {
      return true;
    }
    
    // Parseia a resposta como JSON
    return await response.json();
    
  } catch (error) {
    console.error('❌ Erro na requisição:', error.message);
    
    // Tratamento de erros específicos
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      throw new Error('Servidor Spring não está respondendo. Verifique se está rodando na porta 8080.');
    }
    
    throw error;
  }
}

export const api = {
    get: (endpoint, options = {}) => request(endpoint, { ...options, method: 'GET' }),
  
  post: (endpoint, data, options = {}) => 
    request(endpoint, { 
      ...options, 
      method: 'POST', 
      body: JSON.stringify(data) 
    }),
  
  put: (endpoint, data, options = {}) => 
    request(endpoint, { 
      ...options, 
      method: 'PUT', 
      body: JSON.stringify(data) 
    }),
  
  delete: (endpoint, options = {}) => 
    request(endpoint, { ...options, method: 'DELETE' }),
};

export default api;