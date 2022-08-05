import React from "react";
import { Card, Wrapper } from "./styles";
import logo from '../../assets/logo.svg'

export const Home = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo meme maker" />

      <Card>
        <h2>Selecione um template</h2>
      </Card>
    </Wrapper>
  )
}