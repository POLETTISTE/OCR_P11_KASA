import logo from '../../assets/logo-footer.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="logo de Kasa" />
      </div>
      <p className="footer-mentions">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
