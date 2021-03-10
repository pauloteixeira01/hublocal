import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    background: ${props => props.actived ? '#4367FB' : '#B0C4DE'};
    cursor: pointer;
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width:10%;
        padding:5%;  
    }
    
    span {
        color: ${props => props.actived ? '#B0C4DE' : '#4367FB'};
        font-weight: bold;
        align-self: flex-end;
        font-size:18px;
        padding-right:5%;
    }

    &:hover{
        background: #03E795;
    }

`