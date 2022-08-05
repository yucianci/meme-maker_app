import React from "react"
import { Button, Card, Form, Templates, Wrapper } from "./styles"
import logo from '../../assets/logo.svg'

export const Home = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo meme maker" />

      <Card>
        <h2>Selecione um template:</h2>
        <Templates>
          <button type="button">
            <img src="" alt="Template 1" />
          </button>
          <button type="button">
            <img src="" alt="Template 1" />
          </button>
        </Templates>

        <h2>Textos:</h2>
        <Form>
          <input placeholder="Texto 1" />
          <input placeholder="Texto 2" />

          <Button type="submit">MakeMyMeme!</Button>
        </Form>
      </Card>
    </Wrapper>
  )
}