import "./Footer.css"

const Footer = () => {
    let date =new Date().getFullYear()
    return (
        <footer>
            <span className="texto-copyright">
                copyright &copy; {date} - Todos os direitos reservados - Jenifer Kindermann 
            </span>
        </footer>
    )
}

export default Footer