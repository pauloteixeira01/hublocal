import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
`

export const FilterArea = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    margin-top:1%;
    
    button {
        width:15%;
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;   

    a {
        text-decoration: none;
        color:#000;
    }
`

export const Title = styled.div`
    width:100%;
    border-bottom: 1px solid #4367FB;
    display: flex;
    justify-content: center;
    margin-bottom: 1%;

    h3 {
        color: #4367FB;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 20px; 
    }
`