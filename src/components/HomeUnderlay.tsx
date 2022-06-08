import styled from 'styled-components';

interface IHalf {
  background: string; 
  colour: string; 
}

const Grid = styled.div`
  position: absolute; 
  width: 100%; 
  height: 100%; 
  margin: 0;
  padding: 0; 
  display: grid;
  grid-template-columns: 1fr 1fr;  
`;

const Half = styled.div<IHalf>`
  position: relative; 
  display: flex; 
  justify-content: center;
  width: 100%; 
  height: 100%; 
  background: ${props => props.background};
  color: ${props => props.colour}; 
`;

const Text = styled.div`
  align-self: center;  
  font-size: 35rem;
`;

function HomeUnderlay() {
  return (
    <Grid>
      <Half background='#374785' colour='#f76c6c'>
        <Text>大</Text>
      </Half>
      <Half background='#f76c6c' colour='#374785'>
        <Text>胆</Text>
      </Half>
    </Grid>
  )
}

export default HomeUnderlay