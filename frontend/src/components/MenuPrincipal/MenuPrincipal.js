import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuPrincipal = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Verifica se a rota está ativa
    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            {/* Navbar Principal */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top">
                <div className="container">
                    {/* Logo e Nome da Biblioteca */}
                    <Link 
                        className="navbar-brand d-flex align-items-center fw-bold" 
                        to="/"
                        onClick={closeMenu}
                    >
                        <i className="bi bi-book-half me-2 fs-4"></i>
                        <span className="fs-4">LibraryOnline</span>
                    </Link>

                    {/* Botão Hamburger para Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="navbarNav"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Itens do Menu */}
                    <div 
                        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav me-auto">
                            {/* Início */}
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${isActiveRoute('/') ? 'active' : ''}`}
                                    to="/"
                                    onClick={closeMenu}
                                >
                                    <i className="bi bi-house-door me-1"></i>
                                    Início
                                </Link>
                            </li>

                            {/* Livros - Dropdown */}
                            <li className="nav-item dropdown">
                                <Link
                                    className={`nav-link dropdown-toggle ${
                                        location.pathname.startsWith('/livros') ? 'active' : ''
                                    }`}
                                    to="#"
                                    id="livrosDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-book me-1"></i>
                                    Livros
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="livrosDropdown">
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/livros"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-list-ul me-2"></i>
                                            Todos os Livros
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/livros/novo"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-plus-circle me-2"></i>
                                            Adicionar Livro
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/livros/categorias"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-tags me-2"></i>
                                            Categorias
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Autores */}
                            <li className="nav-item dropdown">
                                <Link
                                    className={`nav-link dropdown-toggle ${
                                        location.pathname.startsWith('/autores') ? 'active' : ''
                                    }`}
                                    to="#"
                                    id="autoresDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person-badge me-1"></i>
                                    Autores
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="autoresDropdown">
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/autores"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-people me-2"></i>
                                            Todos os Autores
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/autores/novo"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-person-plus me-2"></i>
                                            Novo Autor
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Usuários */}
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${isActiveRoute('/usuarios') ? 'active' : ''}`}
                                    to="/usuarios"
                                    onClick={closeMenu}
                                >
                                    <i className="bi bi-people me-1"></i>
                                    Usuários
                                </Link>
                            </li>

                            {/* Empréstimos */}
                            <li className="nav-item dropdown">
                                <Link
                                    className={`nav-link dropdown-toggle ${
                                        location.pathname.startsWith('/emprestimos') ? 'active' : ''
                                    }`}
                                    to="#"
                                    id="emprestimosDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-arrow-left-right me-1"></i>
                                    Empréstimos
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="emprestimosDropdown">
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/emprestimos"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-list-check me-2"></i>
                                            Todos os Empréstimos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/emprestimos/novo"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-plus-circle me-2"></i>
                                            Novo Empréstimo
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/emprestimos/relatorios"
                                            onClick={closeMenu}
                                        >
                                            <i className="bi bi-graph-up me-2"></i>
                                            Relatórios
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* Menu do Lado Direito (Login/Perfil) */}
                        <ul className="navbar-nav ms-auto">
                            {/* Barra de Pesquisa */}
                            <li className="nav-item me-2">
                                <div className="nav-link">
                                    <div className="input-group input-group-sm">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Pesquisar..." 
                                            aria-label="Pesquisar"
                                        />
                                        <button className="btn btn-outline-light" type="button">
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            {/* Notificações */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link position-relative"
                                    to="#"
                                    id="notificacoesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-bell fs-5"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                        <span className="visually-hidden">notificações não lidas</span>
                                    </span>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notificacoesDropdown">
                                    <li><h6 className="dropdown-header">Notificações</h6></li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            <small>📚 Empréstimo vence amanhã</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            <small>✅ Livro devolvido com sucesso</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            <small>🎉 Novo livro disponível</small>
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item text-center" to="/notificacoes">
                                            Ver todas
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Perfil do Usuário */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle d-flex align-items-center"
                                    to="#"
                                    id="perfilDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div 
                                        className="bg-light rounded-circle d-flex align-items-center justify-content-center me-2"
                                        style={{width: '32px', height: '32px'}}
                                    >
                                        <span className="text-primary fw-bold">U</span>
                                    </div>
                                    <span>Usuário</span>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="perfilDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/perfil">
                                            <i className="bi bi-person me-2"></i>
                                            Meu Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/configuracoes">
                                            <i className="bi bi-gear me-2"></i>
                                            Configurações
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/meus-emprestimos">
                                            <i className="bi bi-book me-2"></i>
                                            Meus Empréstimos
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item text-danger" to="/logout">
                                            <i className="bi bi-box-arrow-right me-2"></i>
                                            Sair
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Espaço para conteúdo abaixo do menu fixo */}
            <div style={{ paddingTop: '76px' }}></div>

            {/* Bootstrap JS para funcionalidades do dropdown */}
            <script 
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
                async
            ></script>
        </>
    );
};

export default MenuPrincipal;