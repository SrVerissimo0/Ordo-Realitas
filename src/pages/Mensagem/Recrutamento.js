import React, { useState } from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import './Recrutamento.css'

function Recrutamento (){

    const [texto, setTexto] = useState("")

    async function Enviar(e) {
        e.preventDefault()

        const answer = await fetch("http://localhost:3001/recrutamento",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({
                "texto": texto
            })
        } )
        const data = await answer.json()
        if (data.Mensagem == "Enviado"){
            alert("Obrigado pela confiança!\nEntraremos em contato por Email!")
        } else if(data.Mensagem == "Token Invalido"){
            return(<Redirect to="/" />)
        }
    }


    return(
        <>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                <Nav className="mx-auto d-flex">
                    <Nav.Link className="nav-link" as={Link} to="/Ajuda" href="/Ajuda">Pedido de Ajuda</Nav.Link>
                    <Nav.Link className="nav-link active">Recrutamento</Nav.Link>
                </Nav>  
        </Navbar>
        <div className="Fundo">
            <main>
                <Container className="h-100">
                    <div className="container align-center">
                        <h5 className="text-light p-2">A Ordo Realitas, Ordem da Realidade ou apenas Ordem, é a principal organização responsável por manter o bem estar da Membrana e a proteger de Rituais Ocultistas que buscam a enfraquecer em busca de poder e ambição própria. A Ordo Realitas já foi uma organização secreta com objetivo de combater a influência paranormal e esconder a existência de entidades paranormais do mundo comum, mas por conta do avanço do conhecimento oculto isso teve de mudar. </h5>
                        <h5 className="text-light p-2">Conte-nos sobre você e sua história!</h5>
                        
                        <form onSubmit={Enviar}>
                            <textarea onChange={(e) => setTexto(e.target.value)} required rows='20'></textarea>
                            <button type="submit" className="btn float-none btn-secondary m-2">Enviar Mensagem</button>
                        </form>
                    </div>
                </Container>
            </main>
        </div>
        </>
    )
}

export default Recrutamento