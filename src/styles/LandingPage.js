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
    .info {
        animation: moveInLeft 1s ease-in;
    }
    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-150px);
        }
        80% {
            transform: translate(15px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
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
    @media (min-width: 320px) and (max-width: 480px) {
        .page {
            flex-direction: column-reverse;
            gap: 0;
        }
        .animation {
            transform: scale(1.5);
            width: 100%;
        }
        .info {
            width: 100%;
            padding: 0 1rem;
            z-index: 4;
        }
    }
`
export default Wrapper
