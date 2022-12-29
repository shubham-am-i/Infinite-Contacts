import styled from '@emotion/styled'

const Wrapper = styled.main`
  padding: 1em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  .container {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }
  img {
    width: 100px;
    border-radius: 50%;
  }
  .container div {
    text-align: end;
    padding-top: 20px;
  }
  div p {
    margin: 0;
  }
`

export default Wrapper
