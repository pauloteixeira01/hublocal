import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:70px;
    background: ${props => props.actived ? '#53934d' : '#F0EEA5'};
    
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
        color: ${props => props.actived ? '#F0EEA5' : '#53934d'};
        font-weight: bold;
        align-self: flex-end;
        font-size:18px;
        padding-right:5%;
    }

    &:hover{
        background: #53934d;
    }

`