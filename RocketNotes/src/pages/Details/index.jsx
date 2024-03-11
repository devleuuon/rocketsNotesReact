import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"

export function Details() {
  
return (
    <Container> 
    <Header />

    <Section title="Links Úteis">
        <Links>
            <li>
                <a href="https://rocketseat.com.br">https://rocketseat.com.br</a>
            </li>
            <li>
                <a href="https://rocketseat.com.br">https://rocketseat.com.br</a>
            </li>
        </Links>
        </Section>

        <Section title="Marcadores">

        <Tag title="Express" />
        <Tag title="Node Js" />

        </Section>

    <Button title="Voltar" />
    </Container>
)
  
}

