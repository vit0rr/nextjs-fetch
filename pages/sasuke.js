import Link from 'next/link'
import {Container, Heading} from '@chakra-ui/react'

function Sasuke({ about, image, name }) {

  if(!about || !image) {
    return <div>Loading...</div>
  }

  return (
    <Container maxW='container.md'>
      <Heading>{name}</Heading>
      <p> {about}</p>
      <img src={image}/>
      <Link href="/">Itachi</Link>
    </Container>
  )
}

export async function getStaticProps() {
  // const res = await fetch('https://naruto-api.herokuapp.com/api/v1/characters')
  const res = await fetch('https://naruto-api.herokuapp.com/api/v1/characters/84')
  const json = await res.json()

  return {
    props: {
      about: json.about[0],
      image: json.images[0],
      name: json.name
    },
  }
}

export default Sasuke
