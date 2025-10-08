
//import { api } from './api';

const BASE_URL = 'http://localhost:8080'; // URL base do backend Spring Boot

class AutorService {

    // Listar todos os autores com filtros opcionais
    async listar() {

    try {
      const response = await fetch(`${BASE_URL}/api/autors`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const autores = await response.json();
      console.log('📚 Autores carregados do PostgreSQL:', autores);
      return autores;
    } catch (error) {
      throw new Error(`Erro ao listar autores: ${error.message}`);
    }
  }
            
       
    // Obter autor por ID - GET /api/autors/{id}
     async obterPorId(id) {
        try {
            const response = await fetch(`/autors/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao obter autor: ${error.message}`);
        }
    }

    // Criar um novo autor - POST /api/autors
    async criar(autorData) {
        try {
           
            const dadosSpring = {
                nome: autorData.nome,
                email: autorData.email, 
                telefone: autorData.telefone,
                nacionalidade: autorData.nacionalidade,
                biografia: autorData.biografia
            };

             console.log('📝 Criando autor no PostgreSQL:', dadosSpring);

            const response = await fetch(`${BASE_URL}/api/autors`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosSpring),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const autorCriado = await response.json();
            console.log('✅ Autor criado no PostgreSQL:', autorCriado);
            return autorCriado;
        } catch (error) {
            throw new Error(`Erro ao criar autor: ${error.message}`);
        }
    }

     async atualizar(id, autorData) {
        try {
            const dadosSpring = {
                nome: autorData.nome,
                email: autorData.email, 
                telefone: autorData.telefone,
                nacionalidade: autorData.nacionalidade,
                biografia: autorData.biografia
            };

            const response = await fetch(`${BASE_URL}/api/autors/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosSpring),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const autorAtualizado = await response.json();
            console.log('✅ Autor atualizado:', autorAtualizado);
            return autorAtualizado;

        } catch (error) {
            console.error('❌ Erro em atualizar:', error);
            throw new Error(`Erro ao atualizar autor: ${error.message}`);
        }
    }

    async excluir(id) {
        try {
            const response = await fetch(`${BASE_URL}/api/autors/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('✅ Autor excluído ID:', id);
            return true;
        } catch (error) {
             console.error('❌ Erro em excluir:', error);
            throw new Error(`Erro ao excluir autor: ${error.message}`);
        }
    }

    // TESTAR conexão com o backend - GET /api/autors/test
    async testarConexao() {
        try {
        const response = await fetch(`${BASE_URL}/api/autors/test`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const resultado = await response.text();
        console.log('✅ Teste de conexão com Spring:', resultado);
        return resultado;
        } catch (error) {
             console.error('❌ Erro em testarConexao:', error);
        throw new Error(`Erro ao testar conexão: ${error.message}`);
        }
    }
}

export const autorService = new AutorService();
export default autorService;