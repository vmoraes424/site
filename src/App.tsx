import './App.css';

interface AppProps {
  email: string
}

function irPraCima() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
function irPraBaixo() {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth'
  })
}

export default function App(props: AppProps) {

  return (
    <div className="App">
      <header>
        <div className='menu'>
          <div className='logo' onClick={irPraCima}>Vini</div>
          <div className='botao'>
            <div className='linha-menu'></div>
            <div className='linha-menu'></div>
            <div className='linha-menu'></div>
          </div>
        </div>
      </header>
      <section>
        <div className='esquerda'>
          <div className='container'>
            <div className='imagem'></div>
            <div className='profissao'>front end developer</div>
            <div className='nome'>Vinícius Moraes</div>
            <div className='links'>
              <a href="https://github.com/vmoraes424" target="_blank">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==" />
              </a>
              <a href="https://www.linkedin.com/in/vmoraes424/" target="_blank">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTIgMTZoLTJ2LTZoMnY2em0tMS02Ljg5MWMtLjYwNyAwLTEuMS0uNDk2LTEuMS0xLjEwOSAwLS42MTIuNDkyLTEuMTA5IDEuMS0xLjEwOXMxLjEuNDk3IDEuMSAxLjEwOWMwIC42MTMtLjQ5MyAxLjEwOS0xLjEgMS4xMDl6bTggNi44OTFoLTEuOTk4di0yLjg2MWMwLTEuODgxLTIuMDAyLTEuNzIyLTIuMDAyIDB2Mi44NjFoLTJ2LTZoMnYxLjA5M2MuODcyLTEuNjE2IDQtMS43MzYgNCAxLjU0OHYzLjM1OXoiLz48L3N2Zz4=" />
              </a>
            </div>
            <div className='btns'>
              <a href="#.">Me contrate</a>
              <a href="#." onClick={irPraBaixo}>Saiba mais</a>
            </div>
          </div>
        </div>
        <div className='direita'>

        </div>
      </section>
        <div className='baixo'>
          
        </div>
        <div className='maisbaixo'>
        </div>
    </div>
  );
}
