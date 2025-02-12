
const Home = () => (
    <div className="Home">
        <h1>React Router</h1>
        <h2>Passos</h2>
        <div className="passos">
            <h3>1: Instalar react-router-dom</h3>
            <p>npm install react-router-dom@6</p>
        </div>
        <div className="passos">
            <h3>2: adicionaremos o modo de navegação</h3>
            <p>{`import { BrowserRouter } from  'react-router-dom'`}<br /><br /></p>
            <p>{`<BrowserRouter>`}</p>
            <p>{`<Menu /> Componente Menu`}</p>
            <p>{`<Content /> Componente Conteudo`}</p>
            <p>{`</BrowserRouter>`}</p>
        </div>
        <div className="passos">
            <h3>3: Componente Conteudo</h3>
            <p>{`import { Routes, Route } from "react-router-dom";`}<br /><br /></p>
            <p>{`<main className="Content">`}</p>
            <p>{`<Routes>`}</p>
            <p>{`<Route path="/about" element={<About />} /> rota simples`}</p>
            <p>{`<Route path="/param/:id" element={<Param />} /> rota com parametro`}</p>
            <p>{`<Route path="/" exact element={<Home />} /> rota raiz`}</p>
            <p>{`<Route path="*" element={<NotFound />} /> rota Não achado`}</p>
            <p>{`</Routes>`}</p>
            <p>{`</main>`}</p>
        </div>
        <div className="passos">
            <h3>4: Componente Menu</h3>
            <p>{`import { Link } from 'react-router-dom'`}<br /><br /></p>
            <p>{`<nav>`}</p>
            <p>{`<ul>`}</p>
            <p>{`<li><Link to="/">Início</Link></li> Link Home`}</p>
            <p>{`<li><Link to="/about">Sobre</Link></li> Link Pagina`}</p>
            <p>{`<li><Link to="/param/01">Param # 01</Link></li> Link pagina com parametro`}</p>            
            <p>{`</ul>`}</p>
            <p>{`</nav>`}</p>
        </div>
    </div>
)

export default Home;