import React, { useState } from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import './Recrutamento.css'

function Ajuda (){

    const [texto, setTexto] = useState("")

    async function Enviar(e) {
        e.preventDefault()

        const answer = await fetch("http://localhost:3001/ajuda",{
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
            alert("Obrigado pela confiança!\nEntraremos em contato por Email! ")
        } else if(data.Mensagem == "Token Invalido"){
            return(<Redirect to="/" />)
        }
    }

    return(
        <>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                <Nav className="mx-auto d-flex">
                    <Nav.Link className="nav-link active">Pedido de Ajuda</Nav.Link>
                    <Nav.Link className="nav-link" as={Link} to="/Recrutamento" href="/Recrutamento">Recrutamento</Nav.Link>
                </Nav>  
        </Navbar>
        <div className="Fundo">
            <main>
                <Container className="h-100">
                    <div className="container align-center">
                        <h5 className="text-light p-2">Vivendo vidas duplas, os agentes da Ordo Realitas espalhados pelo mundo todo, secretamente investigam e impedem o paranormal de ser formado, lutando contra aqueles que só desejam instaurar o caos no mundo.</h5>
                        <h5 className="text-light p-2">Conte seus problemas!</h5>
                        
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

export default Ajuda