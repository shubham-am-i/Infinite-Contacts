import styled from '@emotion/styled'

const Wrapper = styled.main`
    .page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rem;
        width: 100%;
        overflow: hidden;
        color: white;
        background-color: black;
    }
    h1 {
        font-weight: 700;
        span {
            color: var(--primary-500);
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    input {
        padding: 1em;
        border-style: none;
        border-radius: var(--borderRadius);
    }
    .animation {
        transform: scale(1.5);
        height: 500px;
        width: 40%;
        overflow: hidden;
    }
    @media (max-width: 480px) {
        .page {
            flex-direction: column-reverse;
            gap: 0;
        }
        .animation {
            transform: scale(1.5);
            width: 100%;
        }
        .info {
            z-index: 4;
        }
    }
`
export default Wrapper
