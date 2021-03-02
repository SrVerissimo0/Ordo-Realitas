import React, { useState } from 'react'
import { Button, Form, Container, Tabs, Tab } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


function Cadastro() {

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")

    const [lsenha, setLsenha] = useState("")
    const [lemail, setLemail] = useState("")

    const [resp, setResp] = useState("")
    const [respC, setRespC] = useState("")

    async function Cadastro(e) {
        e.preventDefault()

        const answer = await fetch("http://localhost:3001/cadastro",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "nome": nome,
                "senha": senha,
                "email": email,
                "cpf": cpf
            })
        } )
        const data = await answer.json()
        setRespC(data.Mensagem)
        
    }

    async function Login(e) {
        e.preventDefault()

        const answer = await fetch("http://localhost:3001/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": lemail,
                "senha": lsenha
            })
        } )
        const data = await answer.json()
        if (data.Mensagem == "Aceito"){
            localStorage.setItem('token', data.token)
        }
        setResp(data.Mensagem)
        
    }


    if (respC == "Em analise"){
        setRespC("")
        alert("Olá! Agradescemos pela lealdade, estamos analisando seus dados de cadastro!")

    } else if(respC == "email ja cadastrado"){
        setRespC("")
        alert("Email já cadastrado!")
    }

    ////////////////////////////////////////////////////////////////////
    
    if (resp == "Email incorreto"){
        setResp("")
        alert("Email Incorreto")


    } else if (resp == "Senha incorreta") {
        setResp("")
        alert("Senha incorreta")

    } else if (resp == "Em Analise") {
        setResp("")
        alert("Seu Cadastro ainda está em analise!")

    } else if (resp == "Recusado") {
        alert("Você não é bem-vindo!")
        window.close()

    } else if (resp == "Aceito"){ 
        return(<Redirect to="Ajuda"/>)
    }





    return (
        <Container>

        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
                <h1 class="display-4 mt-4 mb-4">Login</h1>
                <Form onSubmit={Login}>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" required onChange={(e) => setLemail(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control type="password" name="senha" required onChange={(e) => setLsenha(e.target.value)} />
                    </Form.Group>

                    <Button className="btn-adicionar float-right" variant="outline-primary" type="submit">Login</Button>

                </Form>
            </Tab>
            <Tab eventKey="cadastro" title="Cadastro">
            <h1 class="display-4 mt-4 mb-4">Cadastro</h1>
                <Form onSubmit={Cadastro}>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" name="nome" required onChange={(e) => setNome(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control type="password" name="senha" required onChange={(e) => setSenha(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control type="text" name="cpf" required onChange={(e) => setCpf(e.target.value)} />
                    </Form.Group>


                    <Button className="btn-adicionar float-right" variant="outline-primary" type="submit">Cadastrar-se</Button>

                </Form>
            </Tab>
        </Tabs>
        
      </Container>
    )
}

export default Cadastro
