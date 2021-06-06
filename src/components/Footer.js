import '../App.css';

function Footer(){
  let year = new Date().getFullYear()
  return(
    <div className="footer">
      <div>
        <p className="footer-text">EMAIL US</p>
        <a href="mailto:discotreellc@gmail.com" className="footer-text">discotreellc@gmail.com</a>
      </div>
      <p className="footer-text">Disco Tree {year}</p>
    </div>
  )
}

export default Footer;
