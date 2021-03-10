import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #4367FB;
        margin:0px; 
    }
    p {
        color: #4367FB;
    }
`
export const QrCodeArea = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    span {
        text-transform: uppercase;
        font-weight: bold;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button {
        font-weight: bold;
        background: #4367FB;
        color: #FFF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 70px;

        &:hover {
            opacity: 0.5;
        }
    }
`
 