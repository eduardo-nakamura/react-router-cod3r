interface AboutProps {    
    title?: string; 
    description?: string; 
}
const About: React.FC<AboutProps> = (props) => (
    <div className="About">
        <h1>Sobre</h1>
        <h2>O nosso Sitema foi criado...</h2>
    </div>
)

export default About;