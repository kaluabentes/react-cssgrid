import React from 'react'

import Page from '_templates/page'
import amsterdanImage from '_images/Amsterdam.jpg'
import Card from '_molecules/card'

const Home = () => (
  <Page>
    <Card
      tag="Front-end"
      title="valtech_"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis erat quis orci gravida sollicitudin."
      imageSrc={amsterdanImage}
    />
  </Page>
)

export default Home
