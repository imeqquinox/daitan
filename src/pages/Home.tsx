import { Container } from '../GlobalStyles';
import Underlay from '../components/HomeUnderlay';
import Model from '../components/HomeModel';

function Home() {
  return (
    <Container>
      <Underlay />
      <Model />
    </Container>
  )
}

export default Home