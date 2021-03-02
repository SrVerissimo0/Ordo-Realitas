import React from 'react'
import './home.css'
import Cadastro from '../../Comp/cadastro'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'

function Home() {

    const [mostrar, setMostrar] = useState("")

    return (
        <div>
            <header className="menu">
                <h2 className="container titulo">Ordo Realitas</h2>
                <img style={{width:'100%'}} src={require('./IMG/senhor2.jpg').default} />
                <div className="container posIMG">
                    <h1 className="Stitulo">Recrutar, ajudar.</h1>
                    <p className="Stitulo">Proteção da realidade contra ocutistas e entidades paranormais.</p>
                    <button className="btn float-none Butao" onClick={() => setMostrar(true)}><h4 className="textoBotao">Candidatar-se Agora</h4></button>
                </div>
            </header>
            <main className="container">
                <hr />
                <div className="info">
                    <div className="div-img">
                        <img style={{width:'100%'}} src={require('./IMG/local.png').default}/>
                    </div>
                    <div className="container">
                        <p>Localização</p>
                        <h4>Rua X</h4>
                        <h4>Rio de Janeiro, RJ 22291-080</h4>
                        <h4>Brasil</h4>
                    </div>
                </div>
                <hr />
                <div className="info">
                    <div className="div-img">
                        <img style={{width:'100%'}} src={require('./IMG/info.png').default}/>
                    </div>
                    <div className="container">
                        <p>Sobre</p>
                        <h4>Reconhecimento de atividades paranormais e apreenção ou execução de ocultista, assim como o resgate de vítimas e afins.</h4>
                    </div>
                </div>
                <hr />
                <div className="info">
                    <div className="div-img">
                        <img style={{width:'100%'}} src={require('./IMG/mensagem.png').default}/>
                    </div>
                    <div className="container">
                        <p>Contato</p>
                        <h4>Ordo Realitas</h4>
                        <p>Nome</p>
                        <br />
                        <h4>5521968770081</h4>
                        <p>Telefone</p>
                        <br />
                        <h4>ordorealitas00.com</h4>
                        <p>Email</p>
                        <br />
                        <h4>www.ordorealitas.com</h4>
                        <p>Website</p>
                    </div>
                </div>
            </main>

            <Modal
                size="md"
                show={mostrar}
                onHide={() => setMostrar(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Candidate-se
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Cadastro />
                    <br />
                </Modal.Body>
            </Modal>

        </div>

        
    )
}

export default Home
