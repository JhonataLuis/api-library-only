import React, {useState} from "react";

function UsuarioForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuario = { nome, email, telefone };

        try {
            const response = await fetch("http://localhost:8080/api/users", {
                method: "POST",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            });

            if(response.ok) {
                setMensagem("Usuário cadastrado com sucesso!");
                setNome("");
                setEmail("");
                setTelefone("");
            } else {
                setMensagem("Erro ao cadastrar usuário.");
            }
        } catch (error) {
            console.error(error);
            setMensagem("Falha na conexão com o servidor.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Cadastro de Usuário</h2>
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
                <p className="mt-3 text-center text-green-600 font-semibold">
                {mensagem}
                </p>
            )}
        </div>
    );
}

export default UsuarioForm;