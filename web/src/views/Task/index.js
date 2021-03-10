import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

// My components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

import * as S from './styles';

function Business({ match }) {
  const [ redirect, setRedirect ] = useState(false);
  const [ type, setType ] = useState();
  // const [ id, setId ] = useState(); 
  const [ done, setDone ] = useState(false);
  const [ name, setName ] = useState();
  const [ description, setDescription ] = useState();
  const [ date, setDate ] = useState();
  const [ hour, setHour ] = useState();
  

  async function LoadTaskDetails() {
    await api.get(`/task/${match.params.id}`)
    .then(response => {
      setType(response.data.type)
      setDone(response.data.done)  
      setName(response.data.name)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })
  }

  async function Save() {

    //Validação dos dados
    if (!name) {
      return alert('Você precisa informar o nome do estabelecimento');
    } else if (!description) {
      return alert('Você precisa informar a descrição do estabelecimento');
    } else if (!type) {
      return alert('Você precisa informar qual o segmento do estabelecimento')
    } else if (!date) {
      return alert('Você precisa informar a data de fundação do estabelecimento')
    } else if (!hour) {
      return alert('Você precisa informar a hora de fundação do estabelecimento')
    }

    if (match.params.id) {
      await api.put(`/task/${match.params.id}`,{
        macaddress: isConnected,
        done,
        type,
        name,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    } else { 
      await api.post('/task',{
        macaddress: isConnected,
        type,
        name,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    } 
  }

  async function Remove() {
    const res = window.confirm('Deseja realmente excluir o cadastro desse estabelecimento?');
    if (res === true) {
      await api.delete(`/task/${match.params.id}`)
      .then(() => setRedirect(true)); 
    }   
  }

  useEffect(() => {
    if (!isConnected) {
      setRedirect(true);
    }
    LoadTaskDetails();
  }, [])

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header /> 

      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 && 
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo do Estabelecimento" 
                className={type && type !== index && 'inative'}/>
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>NOME</span>
          <input type="text" placeholder="Digite o nome do estabelecimento" 
          onChange={e => setName(e.target.value)} value={name} />
        </S.Input>

        <S.TextArea>
          <span>DESCRIÇÃO</span>
          <textarea rows={5} placeholder="Uma breve descrição do estabelecimento" 
          onChange={e => setDescription(e.target.value)} value={description}/>
        </S.TextArea>

        <S.Input>
          <span>DATA</span>
          <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
          <img src={iconCalendar} alt="Calendário" />
        </S.Input>

        <S.Input>
          <span>HORA</span>
          <input type="time" onChange={e => setHour(e.target.value)} value={hour}/>
          <img src={iconClock} alt="Relógio" />
        </S.Input>

        <S.Options>
          {match.params.id && <button type="button" onClick={Remove} >EXCLUIR</button>}
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>Salvar</button>
        </S.Save>

      </S.Form>

      <Footer /> 
    </S.Container>
  )    
}

export default Business;
