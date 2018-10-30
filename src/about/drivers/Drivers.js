import React from 'react'

import Session from '../Session'
import Title from '../Title'
import Paragraph from '../Paragraph'
import SymbolsList from './SymbolsList'
import Subtitle from '../Subtitle'
import Developers from './developers/render'

export default () => (
  <Session>
    <Title>Direcionadores</Title>
    <Subtitle>
      Para que servem os direcionadores de responsabilidade socioambiental da
      MateriaMundi?
    </Subtitle>
    <Paragraph>
      Na MateriaMundi acreditamos que não existe uma só resposta aos desafios de
      construir uma forma mais responsável de projetar, produzir e consumir, e
      que as escolhas mais apropriadas irão variar de acordo com o contexto no
      qual se está inseridos. Por este motivo criamos os nossos Direcionadores
      de Responsabilidade Socioambiental. Os Direcionadores foram desenvolvidos
      para auxiliar o usuário a escolher de forma consciente entre diversas
      opções, baseando-se em informações sobre o que determinada empresa/produto
      faz para obter um impacto positivo. Através da análise qualitativa e da
      pontuação de cada produto, material e serviço em cada direcionador o
      usuário pode comparar alternativas, priorizando o aspecto socioambiental
      mais relevante para o seu projeto em seu contexto.
    </Paragraph>
    <Subtitle>Como funciona?</Subtitle>
    <Paragraph>
      Os quatro direcionadores são divididos em duas vertentes, dois analisam
      aspectos sociais e dois aspectos ambientais, e cada um possui pontuação de
      0 à 4, sendo zero a nota mínima e quatro a nota máxima. Cada material,
      produto e serviço apresentado na plataforma passa por essa auto-avaliação
      que é composta por 81 perguntas com objetivo de analisar seu impacto
      positivo. Essas análise fica disponível para você de forma descritiva,
      sendo possível ver cada uma das perguntas e respostas e também em forma
      quantitativa, através do gráfico de impacto. Para auxiliar a tomada de
      decisão sobre qual alternativa utilizar disponibilizamos uma ferramenta de
      comparação, onde os gráficos podem ser sobrepostos e uma análise
      comparativa pode ser feita.
    </Paragraph>
    <Subtitle>O que garante a veracidade das informações?</Subtitle>
    <Paragraph>
      A MateriaMundi acredita em seus usuários e mesmo se porventura acontecer
      de uma informação não ser verídica, acreditamos no poder da comunidade
      para regular o coletivo e garantir a integridade da plataforma. Por isso
      optamos por um processo de auto-avaliação, onde cada empresa é convidada a
      responder voluntariamente as 81 perguntas, sem um processo de auditoria.
      Para garantir um canal apropriado para feed-back onde toda a comunidade
      possa fornecer e colher informações, na página de cada produto
      disponibilizamos uma área para comentários e avaliação. A plataforma
      oferece ainda como opção a possibilidade de anexar documentos
      comprobatórios caso a empresa possua. Não tornamos a comprovação um item
      obrigatório pois entendemos que muitas vezes os custos para tal são
      impeditivos para empresas menores.
    </Paragraph>
    <br />
    <SymbolsList />
    <br />
    <Developers />
  </Session>
)
