import './Footer.css'

interface FooterProps {
  email: string
}
export default function Footer(props: FooterProps) {
  return <div>

    <footer className="Footer">
      
      <h2 className="FooterSobre"><b>Sobre Mim</b>
        <p>Meu nome é Vinícius e <br />estou aprendendo React, sei um pouco <br />de HTML5, CSS3 e JavaScript pretendo <br />aprender outras linguagens também!</p>
      </h2>
      <h2 className="FooterContato">Contato
        <p>Email: {props.email}</p>
        </h2>
    </footer>

  </div>
}