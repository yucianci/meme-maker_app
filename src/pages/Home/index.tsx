import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Templates, Wrapper } from './styles';
import logo from '../../assets/logo.svg';
import { meme } from './interface';

export const Home = () => {
  const [templates, setTemplates] = useState([] as any);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const {
        data: { memes }
      } = await response.json();
      setTemplates(memes);
    })();
  }, []);

  return (
    <Wrapper>
      <img src={logo} alt="logo meme maker" />

      <Card>
        <h2>Selecione um template:</h2>
        <Templates>
          {templates.map((item: meme) => {
            <button type="button">
              <img src="" alt="Template 1" />
            </button>;
          })}
        </Templates>

        <h2>Textos:</h2>
        <Form>
          <input placeholder="Texto 1" />
          <input placeholder="Texto 2" />

          <Button type="submit">MakeMyMeme!</Button>
        </Form>
      </Card>
    </Wrapper>
  );
};
