# 🛍️ E-commerce Simples com Carrinho de Compras

Uma aplicação de e-commerce simples desenvolvida com **React**, **TypeScript** e **Redux Toolkit**. O objetivo é proporcionar uma experiência básica de compra online, com listagem de produtos, filtros, carrinho persistente e checkout fictício.

---

## 🚀 Funcionalidades Principais

- **Listagem de produtos:** Carregamento dinâmico a partir de uma API fake (JSON Server).
- **Filtros:** Pesquisa por nome, filtragem por categoria e faixa de preço.
- **Carrinho de compras:** Adição, remoção e atualização de quantidades, com persistência local via `localStorage`.
- **Checkout simples:** Visualização do total da compra e simulação de finalização.
- **Rotas SPA:** Navegação entre páginas Home e Checkout usando React Router.
- **Estilização:** Componentes estilizados via `styled-components` para fácil manutenção e personalização.

---

## 🧱 Arquitetura e Estrutura

- **React + TypeScript:** Código fortemente tipado para maior segurança e melhor autocompletar.
- **Redux Toolkit:** Gerenciamento de estado global com slices dedicados para `products` e `cart`.
- **Persistência:** Middleware simples para salvar e recuperar estado do carrinho no `localStorage`.
- **Componentização:** UI modularizada em componentes reutilizáveis, facilitando manutenção e testes.
- **API Simulada:** JSON Server fornece endpoints RESTful para simular backend.
- **Hooks personalizados:** Hooks tipados (`useAppDispatch`, `useAppSelector`) para integração Redux consistente.

---

## 🧰 Tecnologias

| Tecnologia         | Descrição                                       |
|--------------------|--------------------------------------------------|
| **React**          | Biblioteca para construção de interfaces         |
| **TypeScript**     | Superset do JavaScript com tipagem estática      |
| **Redux Toolkit**  | Gerenciamento de estado simplificado             |
| **React Router DOM** | Navegação entre páginas no formato SPA         |
| **Styled Components** | Estilização com CSS-in-JS                     |
| **Axios**          | Cliente HTTP para chamadas à API                 |
| **JSON Server**    | API fake para simulação de backend               |

---

## 🗃️ Estrutura de Pastas

```

src/
├── components/         # Componentes reutilizáveis (ProductCard, FilterBar, etc.)
├── features/           # Redux slices (products, cart)
├── pages/              # Páginas da aplicação (Home, Checkout)
├── services/           # Axios instance, serviços API
├── styles/             # Estilos globais e temas
├── utils/              # Funções auxiliares (filtros, validações)
├── store.ts            # Configuração da store Redux
├── storeHooks.ts       # Hooks tipados para Redux
├── App.tsx             # Componente principal com rotas
└── main.tsx            # Ponto de entrada React

````

---

## 🏁 Como Rodar o Projeto

### 1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd ecommerce-simples
````

### 2. Instale as dependências:

```bash
npm install
```

### 3. Inicie o JSON Server (API Fake):

```bash
npm run json-server
```

> A API estará disponível em: `http://localhost:3001/products`

### 4. Em outro terminal, rode a aplicação React:

```bash
npm run dev
```

> Acesse a aplicação em: `http://localhost:5173`

---

## 🗃️ Exemplo de API Fake - `db.json`

```json
{
  "products": [
    {
      "id": 1,
      "name": "Tênis Esportivo",
      "price": 199.9,
      "category": "Calçados",
      "image": "https://via.placeholder.com/300x300?text=Tenis"
    },
    {
      "id": 2,
      "name": "Camisa Polo",
      "price": 89.9,
      "category": "Roupas",
      "image": "https://via.placeholder.com/300x300?text=Camisa"
    },
    {
      "id": 3,
      "name": "Jaqueta de Couro",
      "price": 349.9,
      "category": "Roupas",
      "image": "https://via.placeholder.com/300x300?text=Jaqueta"
    },
    {
      "id": 4,
      "name": "Bota Masculina",
      "price": 249.9,
      "category": "Calçados",
      "image": "https://via.placeholder.com/300x300?text=Bota"
    }
  ]
}
```

---

## 🧩 Possíveis Melhorias Futuras

* ✅ Autenticação de usuários com JWT
* ✅ Backend real com banco de dados (ex: PostgreSQL, MongoDB)
* ✅ Pagamentos reais via gateways (Stripe, PayPal)
* ✅ UX aprimorada com loaders e mensagens de erro
* ✅ Testes unitários e de integração com Jest + Testing Library
* ✅ Responsividade e acessibilidade aprimoradas

---

## 📊 Feedback do Projeto Atual

### ✅ **Pontos Fortes**

* **Estrutura modular** clara e fácil de escalar.
* **Persistência local** eficiente no carrinho.
* **Componentes reutilizáveis** e bem segmentados.
* **Boa organização** de pastas e slices Redux.
* **Código limpo** com uso de hooks tipados e boas práticas.

### ⚠️ **Pontos a Melhorar**

* Otimizar filtros para grandes volumes de dados (ideal via backend).
* Middleware de persistência pode ser extraído para lógica isolada.
* Adicionar tratamento global de erros e estados de loading.
* Incluir testes automatizados e CI para manter qualidade futura.

---

## 🤝 Contribuições

Sinta-se à vontade para:

* 📬 Abrir issues com sugestões e bugs
* 📌 Criar pull requests com melhorias
* ⭐️ Marcar o repositório como favorito

---

**Obrigado por visitar o projeto!** 🚀
Se quiser, posso adaptar esse arquivo automaticamente ao seu repositório GitHub e gerar uma versão com emojis, badges e links personalizados. Deseja isso também?
