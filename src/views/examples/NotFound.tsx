interface NotFoundProps {    
    title?: string; 
    description?: string; 
}
const NotFound: React.FC<NotFoundProps> = (props) => (
    <div className="NotFound">
        <h1>Não existe</h1>
        <h2>Suma daqui</h2>
    </div>
)

export default NotFound;