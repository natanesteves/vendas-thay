// Components
import { OurTeam } from "../components/layout/OurTeam";
import { Button } from "../components/Button";

import { Doubts } from "../components/Doubts";
import Testimonial from "../components/Testimonial/Testimonial";
// Styles
import "../styles/pages/home.scss";
import { FiHeart } from "react-icons/fi";

// Images
let NFT = require("../assets/DSC_0223.png");

export function Home() {
  return (
    <main>
      <section className="presentation">
        <div className="container">
          <div className="descriptionPresentation">
            <h1>Dentista prescritor 1.0</h1>
            <p>
            APRENDA A ELABORAR PRESCRIÇÕES MAIS SEGURAS E SEJA UM DENTISTA CAPAZ DE LIDAR COM INTERAÇÕES MEDICAMENTOSAS E COMPLICAÇÕES DO USO DE MEDICAMENTOS!
            </p>
          </div>
          <div className="imgPresentation"></div>
        </div>
      </section>

      {/* <section className="whatWeDo" id="whatWeDo">
        <div className="title">
          <h1>O Evento</h1>
        </div>

        <div className="container">
          <div className="nftImg">
            <img src={NFT} alt="NFT" />
          </div>
          <div className="boxsInformation">
            <div className="boxInformation one">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1 className="boxtitle">Os Dias</h1>
              <p>
              Serão 3 dias de uma imersão no mundo da Farmacologia aplicada à Clínica Odontológica, com aulas de duração aproximada de 1 hora.
              </p>
            </div>
            <div className="boxInformation two">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>O assunto</h1>
              <p>
              Vamos falar sobre a importância do conhecimento em farmacologia para uma prática clínica segura e responsável.
              </p>
            </div>
            <div className="boxInformation three">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>O público-alvo</h1>
              <p>As aulas são voltadas para todos os interessados em farmacologia, em especial, alunos de graduação e  pós-graduação em Odontologia e dentistas.</p>
            </div>
            <div className="boxInformation four">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>O local</h1>
              <p>Nosso encontro acontecerá no Youtube, no canal <a href="https://www.youtube.com/channel/UCYdKtFDfeBYQqEbr3GDfJAw">@farmacodontologia</a>, sempre às 20:23. O link será enviado para o email cadastrado na inscrição, 1 hora antes.</p>
            </div>
            
          </div>
        </div>
      </section> */}
 {/* <Testimonial /> */}



      <section className="propose" id="propose">
         <a href="https://hotm.art/dentistaprescritor">
        <Button text={"Inscreva-se agora!"}></Button></a>
        <div className="container">

          <div className="imgPropose"></div>
          <div className="descriptionPropose">
            <h1>7 dias de garantia incondicional</h1>
            <br></br>
            <h2>Acesso por 12 meses</h2>
            <br></br>
            <h2>Assista quantas vezes quiser</h2>
          </div>
        </div>
      </section>

     
      <section className="propose2" id="propose">
        <div className="container">
          
          <div className="descriptionPropose">
            <h1>POR QUE O DENTISTA PRECISA ESTUDAR FARMACOLOGIA?</h1>
            <p>O dia a dia do dentista é repleto de desafios e a prescrição 
              medicamentosa é uma das maiores dúvidas dos profissionais. Entre 
              protocolos e receitas prontas, nos deparamos com casos desafiadores,
               interações medicamentosas e manifestações orais e sistêmicas do uso de 
               medicamentos. Na hora da prescrição, pode bater aquela dúvida: posso indicar 
               esse medicamento? Como orientar seu uso? Todas essas perguntas vão ser respondidas 
               nesse curso! Meu nome é Thayanne Calcia e sou professora de Terapêutica Medicamentosa
                aplicada à Odontologia. Sou dentista, mestre e doutora com mais de 10 anos de experiência 
                no ensino e no estudo da Farmacologia. Sou especializada em Estomatologia e DTM/Dor Orofacial,
                áreas nas quais atuo clinicamente. Diariamente, me dedico a simplificar o entendimento da Farmacologia 
                Clínica na Odontologia, disciplina que é considerada bastante desafiadora. Vamos juntos desbravar o mundo 
                da Terapêutica Medicamentosa em Odontologia?  </p>
          </div>
        </div>
        
      </section>


      <section className="propose2" id="propose">
        <div className="container">
        
          <div className="descriptionPropose">
            <h1>O CURSO</h1>
            <h3>Aprenda farmacologia de uma forma descomplicada de uma vez por todas! Você verá de forma detalhada e aplicada à clínica tudo que um dentista precisa saber para realizar prescrições seguras e eficientes. Além disso, você estará preparado para reconhecer repercussões orais do uso de medicamentos, bem como lidar com interações medicamentosas.  </h3>
          </div>
        </div>
      
      </section>
      
      <section className="propose2" id="propose">
        <div className="container">
        
          <div className="descriptionPropose">
            <h1>São 60 horas de conteúdo gravado + leituras complementares atualizadas + duas mentorias ao vivo com a Profa. Thayanne Calcia</h1>
            <br></br>
            <h2>Módulo 1 - Fortalecendo a base</h2>
            <br></br>
            <h3>Seja bem-vindo!</h3>
            <br></br>
            <h3>Por que estudar farmacologia?</h3>
            <br></br>
            <h3>Vias de administração e formas farmacêuticas</h3>
            <br></br>
            <h3>O que o corpo faz com o medicamento?</h3>
            <br></br>
            <h3>O que o medicamento faz com o corpo? (Farmacocinética e farmacodinâmica aplicadas à clínica)</h3>
            <br></br>
            <h3>Como elaborar os diferentes tipos de prescrição odontológica</h3>
            <br></br>
            <h2>Módulo 2 - Terapêutica medicamentosa da dor</h2>
            <br></br>
            <h3>Princípios do tratamento da dor</h3>
            <br></br>
            <h3>Analgésicos não-opioides</h3>
            <br></br>
            <h3>Opioides</h3>
            <br></br>
            <h3>Analgésicos de ação central</h3>
            <br></br>
            <h3>Anestésicos locais e vasoconstritores</h3>
            <br></br>
            <h3>Sedação medicamentosa</h3>
            <br></br>
            <h2>Módulo 3 - Terapêutica medicamentosa da inflamação</h2>
            <br></br>
            <h3>Princípios do tratamento da inflamação</h3>
            <br></br>
            <h3>Anti-inflamatórios não esteroidais (AINEs)</h3>
            <br></br>
            <h3>Corticoides</h3>
            <br></br>
            <h2>Módulo 4 - Terapêutica medicamentosa das infecções (Módulo ministrado pelo Prof. Edilson Martins)</h2>
            <br></br>
            <h3>Beta-lactâmicos</h3>
            <br></br>
            <h3>Macrolídeos</h3>
            <br></br>
            <h3>Quinolonas</h3>
            <br></br>
            <h3>Outras classes</h3>
            <br></br>
            <h3>Antifúngicos</h3>
            <br></br>
            <h3>Antivirais</h3>
            <br></br>
            <h2>Módulo 5 - As consequências do uso de medicamentos</h2>
            <br></br>
            <h3>Pacientes anticoagulados</h3>
            <br></br>
            <h3>Osteonecrose dos maxilares induzida por medicamentos</h3>
            <br></br>
            <h3>Alteração de glândulas salivares por medicamentos</h3>
            <br></br>
            <h3>Mucosite oral</h3>
            <br></br>
            <h3>Outras manifestações orais</h3>
            <br></br>
            <h3>Interações medicamentosas</h3>

            <br></br>
            <h2>Módulo 6 - Farmacologia em grupos especiais de pacientes</h2>
            <br></br>
            <h3>Crianças</h3>
            <br></br>
            <h3>Idosos</h3>
            <br></br>
            <h3>Gestantes</h3>
            <br></br>
            <h3>Lactantes</h3>
            
          </div>
        </div>
      
      </section>

      <section className="propose" id="propose">
        <div className="container">
        <div className="imgPropose3"></div>
          <div className="descriptionPropose">
            <h1>APRENDA FARMACOLOGIA COM QUEM TEM EXPERIÊNCIA NA ÁREA</h1>
            <h3>Thayanne Calcia é sou professora de Terapêutica Medicamentosa aplicada à Odontologia. Sou dentista, mestre e doutora com mais de 10 anos de experiência no ensino e no estudo da Farmacologia. Ela é especialista em Estomatologia e DTM/Dor Orofacial, áreas nas quais atuo clinicamente. Diariamente, dedica-se a simplificar o entendimento da Farmacologia Clínica na Odontologia, disciplina que é considerada bastante desafiadora.</h3>
          </div>
        </div>
      
      </section>

      <section className="propose" id="propose">
        <div className="container">
        <div className="imgPropose4"></div>
          <div className="descriptionPropose">
           
            <h3>Edilson Martins é professor do Doutorado de Desenvolvimento e Inovação Tecnológica de Medicamentos da Universidade Federal do Ceará (UFC) e de Cursos de pós-graduação e livres na área de HOF. É farmacêutico Hospitalar, servidor público no Instituto Dr José Frota e Cirurgião Dentista. Possui Mestrado e Doutorado em Farmacologia pela UFC e especializações em Farmacologia Clínica, Toxicologia Geral e Patologia Oral e Maxilofacial. Seu objetivo é trazer a farmacologia clínica para a rotina do cirurgião dentista prescritor de modo acessível, claro e direto. Será responsável pelo módulo de tratamento farmacológico das infecções, área em que possui ampla atuação.</h3>
          </div>
        </div>
      
      </section>

      <section className="propose2" id="propose">
        <div className="container">
        
          <div className="descriptionPropose">
            <h1>TUDO QUE VOCÊ VAI VER</h1>
            <br></br>
            <h3>Diversos materiais complementares para download.</h3>
            <br></br>
            <h3>Banco de questões sobre todos os temas abordados no curso.</h3>
            <br></br>
            <h3>Aula bônus sobre interpretação de exames laboratoriais com a Profa. Thayanne Calcia.</h3>
            <br></br>
            <h3>Certificado de conclusão de curso online</h3>
          </div>
        </div>
      
      </section>

      <section className="propose" id="propose">
        <div className="container">
        <div className="imgPropose3"></div>
          <div className="descriptionPropose">
            <h1>INVESTIMENTO</h1>
            <h3>R$ 499,99 à vista

Ou em até 12x de

49,99</h3>
          </div>
        </div>
        <a href="https://hotm.art/dentistaprescritor">
        <Button text={"Inscreva-se agora!"}></Button></a>
      </section>

    </main>
  );
}
