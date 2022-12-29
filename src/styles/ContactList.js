import styled from '@emotion/styled'

const Wrapper = styled.main`
  padding: 1em;
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
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
    color: var(--grey-600);
  }
  span {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    .container {
      width: 100%;
      justify-content: space-between;
    }
    img {
      width: 70px;
    }
    .container div {
      padding-top: 0px;
    }
  }
`

export default Wrapper
