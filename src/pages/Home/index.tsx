import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import qs from 'qs';
import { Button, Card, Container, Form, GeneratedMeme, Templates, Wrapper } from './styles';
import logo from '../../assets/logo.svg';
import { IMeme } from './interface';

export const Home = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState<IMeme | null>(null);
  const [boxes, setBoxes] = useState<any>([]);
  const [generatedMeme, setGeneratedMeme] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const { data } = await response.json();
      setTemplates(data?.memes);
    })();
  }, []);

  const handleInputChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = boxes;
    newValues[index] = e.target.value;
    setBoxes(newValues);
  };

  const handleSelectTemplate = (item: IMeme) => {
    setSelectedTemplate(item);
    setBoxes([]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = qs.stringify({
      template_id: selectedTemplate?.id,
      username: 'yucianci',
      password: 'yucianci',
      boxes: boxes.map((text: string) => ({ text }))
    });

    console.log(params);

    const response = await fetch(`https://api.imgflip.com/caption_image?${params}`);
    const { data } = await response.json();
    setGeneratedMeme(data?.url);
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setBoxes([]);
    setGeneratedMeme(null);
  };

  return (
    <Wrapper>
      <img src={logo} alt="logo meme maker" />
      <Card>
        {generatedMeme ? (
          <Container>
            <GeneratedMeme src={generatedMeme} alt="Generated meme" />

            <Button type="button" onClick={handleReset}>
              Make a new meme!
            </Button>
          </Container>
        ) : (
          <>
            <h2>Selecione um template:</h2>
            <Templates>
              {templates.map((item: IMeme) => (
                <button
                  key={item.id}
                  className={item.id === selectedTemplate?.id ? 'selected' : ''}
                  type="button"
                  onClick={() => handleSelectTemplate(item)}>
                  <img src={item.url} alt={item.name} />
                </button>
              ))}
            </Templates>

            {selectedTemplate && (
              <>
                <h2>Textos:</h2>
                <Form onSubmit={handleSubmit}>
                  {new Array(selectedTemplate.box_count).fill('').map((_, index) => (
                    <input
                      key={String(Math.random())}
                      placeholder={`Texto ${index + 1}`}
                      onChange={handleInputChange(index)}
                    />
                  ))}

                  <Button type="submit">MakeMyMeme!</Button>
                </Form>
              </>
            )}
          </>
        )}
      </Card>
    </Wrapper>
  );
};
