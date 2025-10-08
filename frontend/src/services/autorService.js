

class AutorService {
    static async getAutoresAll() {
       
        try{
            const response = await fetch('/api/autores');
            return response.data;
        } catch (error) {
            console.error('Erro na requisição:', error);
            throw new Error('Ero ao listar autores: ${error.message}');
        }
       
    }

     async obterPorId(id) {
        try {
            const response = await fetch(`/autores/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao obter autor: ${error.message}`);
        }
    }

    async criar(autorData) {
        try {
            const response = await api.post('/autores', autorData);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao criar autor: ${error.message}`);
        }
    }

     async atualizar(id, autorData) {
        try {
            const response = await api.put(`/autores/${id}`, autorData);
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao atualizar autor: ${error.message}`);
        }
    }

    async excluir(id) {
        try {
            await api.delete(`/autores/${id}`);
            return true;
        } catch (error) {
            throw new Error(`Erro ao excluir autor: ${error.message}`);
        }
    }
}

export const autorService = new AutorService();