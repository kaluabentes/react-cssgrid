import React from 'react'

import Page from '_templates/page'
import Card from '_molecules/card'
import CardGrid from '_organisms/card-grid'
import cards from '_data/cards'

const Home = () => (
  <Page>
    <CardGrid>
      {cards.map(card => (
        <Card
          tag={card.tag}
          title={card.title}
          description={card.description}
          imageSrc={card.image}
        />
      ))}
    </CardGrid>
  </Page>
)

export default Home
