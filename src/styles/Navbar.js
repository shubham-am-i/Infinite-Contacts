import styled from '@emotion/styled'

const Wrapper = styled.nav`
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--grey-50);

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .nav-center p {
    font-size: 30px;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    font-size: large;
    color: var(--grey-500);
    background-color: var(--grey-100);
    border: none;
    border-radius: var(--borderRadius);
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    background: var(--grey-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    width: 100%;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    font-size: medium;
    background: transparent;
    border-color: transparent;
    color: var(--grey-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    .nav-center {
      width: 90%;
    }
  }
`
export default Wrapper
