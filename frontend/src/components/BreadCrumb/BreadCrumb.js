import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const getBreadcrumbName = (path) => {
        const breadcrumbMap = {
            '': 'Início',
            'livros': 'Livros',
            'autores': 'Autores',
            'usuarios': 'Usuários',
            'emprestimos': 'Empréstimos',
            'novo': 'Novo',
            'editar': 'Editar',
            'categorias': 'Categorias',
            'perfil': 'Meu Perfil',
            'configuracoes': 'Configurações'
        };
        return breadcrumbMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
    };

    return (
        <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/" className="text-decoration-none">
                        <i className="bi bi-house-door"></i> Início
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    
                    return isLast ? (
                        <li key={to} className="breadcrumb-item active" aria-current="page">
                            {getBreadcrumbName(value)}
                        </li>
                    ) : (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to} className="text-decoration-none">
                                {getBreadcrumbName(value)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;