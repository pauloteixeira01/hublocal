import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width:50%;
    margin-bottom: 70px;    
`

export const TypeIcons = styled.div`
    width:100%;
    display:flex;
    justify-content:center; 

    .inative {
        opacity: 0.5;
    }

    button {
        margin:1%;
        border:none;
        background:none;
    }

    img {
        width:100%;
        margin:2%;
        cursor: pointer;
        
        &:hover {
            opacity:0.5;
        }
    }
`

export const Input = styled.div`
    width:100%;
    display: flex;
    flex-direction: column; 
    
    
    span {
        color: #707070;
        margin: 1%;
    }

    input {
        fontsize:16px;
        padding: 1%;
        border:none;
        border-bottom: 1px solid #4367FB;
    }

    img {
        width:3%;
        position: relative;
        left: 90%;
        bottom:25px;
    }
`


export const TextArea = styled.div`
    width:100%;
    display: flex;
    flex-direction: column; 
    
    
    span {
        color: #707070;
        margin: 1%;
    }

    input {
        fontsize:16px;
        padding: 3%;
        border:none;
        border-bottom: 1px solid #4367FB;
    }

    textarea {
        font-size:16px;
        border: 1px solid #4367FB;
    }
`


export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: #4367FB;
        border: none;
        background: none;
        font-size:18px;
        cursor:pointer;

        &:hover {
            opacity:0.5;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #B0C4DE;
        font-weight: bold;
        font-size: 18px;
    }
  
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button {
        width:100%;
        font-weight: bold;
        color: #FFF;
        padding:1%;
        border-radius: 30px;
        border: none;
        background: #4367FB;
        font-size:20px;
        cursor:pointer;

        &:hover {
            opacity:0.5;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #B0C4DE;
        font-weight: bold;
        font-size: 18px;
    }
  
`

