# Projeto de Cards de Notícias

Este projeto consiste em um layout simples de cards de notícias, utilizando Next.js com CSS Modules para estilização. O design inclui uma lista vertical e horizontal de cards, cada um contendo uma data, um título, um preview da notícia e tags interativas.

## Tecnologias Utilizadas

- **Next.js** - Framework para React com suporte a renderização no servidor  
- **CSS Modules** - Modularização de estilos para um melhor encapsulamento  
- **React** - Biblioteca para construção de interfaces de usuário  

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

```
/
├── src/
│   ├── app/
│   │   ├── page.js           # Componente principal da página
│   │   ├── page.module.css   # Estilização dos componentes da página principal
│   │   ├── globals.css       # Estilos globais do projeto
│   ├── components/
│   │   ├── CardColumn/
│   │   │   ├── CardColumn.js       # Lista vertical de cards de notícias
│   │   │   ├── CardColumn.module.css # Estilos para CardColumn
│   │   ├── CardRow/
│   │   │   ├── CardRow.js          # Cards de notícias com rolagem horizontal
│   │   │   ├── CardRow.module.css  # Estilos para CardRow
```

## Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O projeto estará disponível em `http://localhost:3000/`.

## Funcionalidades

- Exibição de cards de notícias com informações de data, título, descrição e tags.  
- Layouts vertical e horizontal utilizando `CardColumn` e `CardRow`.  
- Animação de hover para destacar os cards.  
- Tags interativas com efeito de hover.  

## Estilos

O projeto utiliza CSS Modules para estilização, garantindo encapsulamento e prevenindo conflitos de classes.

### Exemplo de Estilo (`CardColumn.module.css`)
```css
.card {
  width: 800px;
  height: 200px;
  border-radius: 30px;
  border: solid 1px rgb(63, 63, 69);
  background-color: rgb(26, 27, 34);
  padding: 30px;
  transition: 0.2s;
  margin-top: -25pt;
}

.card:hover {
  transform: translateY(-20px);
}
```

## Contribuição

Se você deseja contribuir para este projeto, siga os passos:

1. Faça um fork do repositório.  
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-funcionalidade`).  
3. Commit suas alterações (`git commit -m 'Adicionando nova funcionalidade'`).  
4. Envie para o repositório remoto (`git push origin minha-funcionalidade`).  
5. Abra um Pull Request.  

## Licença

Este projeto está sob a licença MIT. Você é livre para usá-lo e modificá-lo conforme necessário.
