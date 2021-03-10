import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

// import api from '../../services/api';

// My components
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function QrCode() {
	const [mac, setMac] = useState();
	const [redirect, setRedirect] = useState(false);

	async function SaveMac() {
		if (!mac) {
			alert('Informe o código do smartphone');
		} else {
			await localStorage.setItem('@yourMac/macaddress', mac);
			setRedirect(true);
			window.location.reload();
		}		
	}

	return(
		<S.Container>
			{ redirect && <Redirect to="/"/> }
			<Header />

			<S.Content>
				<h1>Capture o qrcode pelo App</h1>
				<p>Suas atividades serão sincronizadas com o seu smartphone.</p>
				<S.QrCodeArea>
					<Qr value='getmacaddress' size={250}/>
				</S.QrCodeArea>

				<S.ValidationCode>
					<span>Digite a numeração que apareceu no seu smartphone</span>
					<input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
					<button type="button" onClick={SaveMac}>SINCRONIZAR</button>
				</S.ValidationCode>

			</S.Content>

			<Footer />
		</S.Container>	
	)
}

export default QrCode;