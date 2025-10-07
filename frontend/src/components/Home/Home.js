import React from 'react';

const Home = () => {
    return (
        <div className="container mt-4">
            <div className="jumbotron bg-light p-5 rounded">
                <h1 className="display-4">Bem-vindo à LibraryOnly</h1>
                <p className="lead">Sistema de gerenciamento de biblioteca</p>
                <hr className="my-4" />
                <p>Gerencie livros, autores, usuários e empréstimos de forma eficiente.</p>
                <div className="row mt-5">
                    <div className="col-md-3 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="bi bi-book fs-1 text-primary"></i>
                                <h5 className="card-title mt-2">Livros</h5>
                                <p className="card-text">Gerencie o acervo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="bi bi-person-badge fs-1 text-success"></i>
                                <h5 className="card-title mt-2">Autores</h5>
                                <p className="card-text">Cadastre autores</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="bi bi-people fs-1 text-warning"></i>
                                <h5 className="card-title mt-2">Usuários</h5>
                                <p className="card-text">Gerencie usuários</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="bi bi-arrow-left-right fs-1 text-info"></i>
                                <h5 className="card-title mt-2">Empréstimos</h5>
                                <p className="card-text">Controle empréstimos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;