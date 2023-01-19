import './Principal.css'

function Principal() {
    return (
        <div className="coluna-principal">
            <section className="container-corvinal">
                <h2 className='casa-corvinal'>Casa Corvinal</h2>
                <p className="primeiro-artigo">
                    A casa dos que possuem inteligência, originalidade, espirituosidade e criatividade. Corvinal tem as cores azul e bronze, águia como símbolo e o Professor Fílio Flitwick como diretor.
                    Os corvinais valorizam o conhecimento e utilizam sua curiosidade para conquistá-lo. Apesar da mente alerta, no entanto, o desejo de saber muitas vezes pode ser mal compreendido, como no caso de Luna Lovegood.
                </p>
            </section>
            <section className="container-sonserina">
                <h2 className="casa-sonserina">Casa Sonserina</h2>
                <p className="segundo-artigo">
                    A casa de Salazar Slytherin é dirigida pelo Professor Severo Snape e valoriza ambição, astúcia e individualismo.
                    Por causa disso, sonserinos se assemelham a grifinórios na paixão que carregam pelas atividades que assumem. Por outro lado, eles são capazes de tudo para chegar à seus objetivos, valorizando muito mais o individualismo do que o companheirismo.
                    É uma das casas de Hogwarts que mais produziu bruxos das trevas. Apesar disso, não existe uma relação direta entre os dois fatos.
                    Por fim, a casa tem as cores verde e prata, além de ser simbolizada por uma cobra. Seu fantasma residente é o Barão Sangrento.
                </p>
            </section>
            <section className="container-lufa-lufa">
                <h2 className='casa-lufa-lufa'>Casa Lufa-Lufa</h2>
                <p className="terceiro-artigo">
                    Diferente das outras casas, a Lufa-lufa não se guia por características excludentes. Isso porque a casa enaltece valores como bondade, amor e empatia acima de todas as outras coisas. Sendo assim, com um texugo símbolo e as cores amarelo e preto, é a mais acolhedora entre as casas de Hogwarts.
                    Por fim, seu fantasma é o Frei Gorducho e a Professora diretora é Pomona Sprout.
                </p>
            </section>
            <section className="container-grifinoria">
                <h2 className='casa-grifinoria'>Casa Grifinoria</h2>
                <p className="terceiro-artigo">
                    Simbolizada por um leão e pelas cores vermelho e dourado, a Grifinória é dirigida pela Professora Minerva McGonagall. As principais características do membro da casa são a nobreza, a ousadia e a coragem. Não é à toa, por exemplo, que Harry Potter e seus amigos estão nessa casa.
                    Grifinórios também são pessoas calorosas e amigáveis, portanto, com corações dispostos a assumir riscos por aqueles que amam.
                    Além disso, o fantasma da casa é o Sir Nicholas de Mimsy-Porpington, também conhecido como “Nick Quase-Sem-Cabeça”.
                </p>
            </section>
        </div >
    )
}
export default Principal;