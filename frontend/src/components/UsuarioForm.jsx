import React, { useState } from "react";

function UsuarioForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const testarConexao = async () => {
        try {
            const response = await fetch("/api/users/test");
            if (response.ok) {
                const data = await response.text();
                setMensagem("✅ " + data);
            } else {
                setMensagem("❌ Backend não respondeu");
            }
        } catch (error) {
            setMensagem("❌ Não foi possível conectar ao backend");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuario = { nome, email, telefone };

        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            });

            if (response.ok) {
                const data = await response.json();
                setMensagem(`✅ Usuário ${data.nome} cadastrado com sucesso!`);
                setNome("");
                setEmail("");
                setTelefone("");
            } else {
                setMensagem("❌ Erro ao cadastrar usuário");
            }
        } catch (error) {
            setMensagem("❌ Falha na conexão com o servidor");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Cadastro de Usuário</h2>
            
            <button
                onClick={testarConexao}
                className="mb-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 w-full"
            >
                Testar Conexão com Backend
            </button>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Salvar
                </button>
            </form>
            
            {mensagem && (
                <p className={`mt-3 text-center font-semibold ${
                    mensagem.includes("✅") ? "text-green-600" : "text-red-600"
                }`}>
                    {mensagem}
                </p>
            )}
        </div>
    );
}

export default UsuarioForm;