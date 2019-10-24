import React from 'react'

import Page from '_templates/page'
import CardTag from '_atoms/card-tag'
import CardTitle from '_atoms/card-title'
import CardDescription from '_atoms/card-description'
import CardImage from '_atoms/card-image'
import amsterdanImage from '_images/Amsterdam.jpg'

const Home = () => (
  <Page>
    <CardTag>Front-end</CardTag>
    <CardTitle>valtech_</CardTitle>
    <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis erat quis orci gravida sollicitudin.</CardDescription>
    <CardImage src={amsterdanImage} alt="Amsterdan" />
  </Page>
)

export default Home
