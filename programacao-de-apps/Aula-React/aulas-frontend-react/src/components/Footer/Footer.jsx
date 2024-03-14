import "./Footer.css"

const Footer = () => {
    let date =new Date().getFullYear()
    return (
        <footer>
            copyright &copy; {date} - Todos os direitos reservados - Jenifer Kindermann 
            
        </footer>
    )
}

export default Footer