import imgLogo from "./assets/images/logo.png"
import imgLogoMiles from "./assets/images/logo-miles.png"
import imgSpiderMobile from "./assets/images/spider-mobile.png"
import imgSpiderDesktop from "./assets/images/spider-desktop.png"
import { CardInformation } from "./components/CardInformation"

function App() {
  return (
    <>
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col justify-center items-center">
          <header className="w-screen h-20">
                  <nav className="w-screen h-20 flex justify-around items-center">
                        <img src={imgLogo} alt="Logo Spider Man" />

                        <ul className="flex gap-6 text-white font-medium text-sm xl:gap-10">
                            <li className="hover:text-[#EC1F1D] transition cursor-pointer">Sinopse</li>
                            <li className="hover:text-[#EC1F1D] transition cursor-pointer">Elenco</li>
                            <li className="hover:text-[#EC1F1D] transition cursor-pointer">Fórum</li>
                        </ul>
                  </nav>
          </header>

          {/* SECTION MILES MORALES */}
          <section className="w-screen h-[800px] pt-16 pr-6 pb-16 pl-6 flex flex-col justify-center items-center bg-[url('./assets/images/bg-mobile.png')] xl:bg-[url('./assets/images/bg-desktop.png')] xl:flex-row-reverse">
                  <img src={imgSpiderMobile} alt="Spider Man" className="w-[376px] h-[271px] xl:hidden" />
                  <img src={imgSpiderDesktop} alt="Spider Man" className="hidden xl:block xl:absolute xl:ml-[1200px]" />

                  <div className="w-[327px] h-[361px] flex flex-col items-center xl:w-[600px]">
                        <img src={imgLogoMiles} alt="Logo Miles Morales" className="w-[180px] h-[87px]" />

                        <p className="w-[327px] text-white font-medium text-sm leading-[21px] text-center mt-5 xl:w-[600px] xl:text-base">
                        Miles Morales é o mais novo Homem-Aranha de Nova York da Marvel. Após a morte prematura de seu pai, Miles foi apresentado a Peter Parker,
                         que rapidamente se tornou seu amigo e mentor.Quando Miles foi picado por uma aranha geneticamente modificada da Oscorp,
                          ele desenvolveu poderes únicos e, após meses de insistência, Peter concordou em treiná-lo.
                        </p>

                        <button className="bg-[#EC1F1D] text-white w-[214px] pt-3 pr-8 pb-3 pl-8 mt-10 rounded-lg font-bold text-sm shadow-xl shadow-[#1a1919] hover:bg-[#7c1a19] transition xl:w-[272px]">COMPRAR INGRESSO</button>
                  </div>  
          </section>

          {/* SECTION INFORMATIONS */}
          <section className="w-screen h-[531px] bg-[#111826]">
                    <div className="flex flex-col justify-center items-center gap-10 pt-16 pr-6 pb-16 pl-6 xl:flex-row xl:pt-56">
                          <CardInformation
                          title={"Cinema"}
                          content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae quibusdam doloremque nulla! Inventore accusantium debitis error iure minima."}
                          />
                          <CardInformation
                          title={"Prêmios"}
                          content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae quibusdam doloremque nulla! Inventore accusantium debitis error iure minima."}
                          />
                          <CardInformation
                          title={"Indicações"}
                          content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae quibusdam doloremque nulla! Inventore accusantium debitis error iure minima."}
                          /> 
                    </div>
          </section>
        </div>
    </>
  )
}

export default App
