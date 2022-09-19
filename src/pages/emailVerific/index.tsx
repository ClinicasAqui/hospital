import { useContext, useEffect } from 'react'
import { AuthContextProvier } from '../../context/authContext'
import unicornPcError from '../../assets/img/Hospital.png'
import UnicorPcChill from '../../assets/img/Hospital.png'
import logo from '../../assets/img/Hospital.png'
import { useParams } from 'react-router-dom'

const EmailChecker = () => {
	//CRIAR LOGICA
	//=> esperando verificação do usuario
	//=> sucesso token autenticado
	//=> erro problema com token
	const { tokenEmail } : any = useParams()

	const { validateEmail, message } = useContext(AuthContextProvier);

	const plus = {
		title : " Seu e-mail foi verificado! ",
		error : null,
		resend : null,
		image : UnicorPcChill
	}

	const error = {
		title : " Não foi possível validar seu e-mail! ",
		error : "Ops, não recebeu o e-mail?",
		resend : "Me mande outro e-mail, por favor.",
		image : unicornPcError
	}

	useEffect(() => {
		if (message === "") {
			console.log(tokenEmail)

			validateEmail(tokenEmail)
		}

	}, [])


	return (
		<div>
			<div>
				<img src={logo} alt='Clinicas Aqui!' />
				<h2>Você está quase lá!</h2>
			</div>
			<div>
				<div>
					<h1> {(message === "" || message === "Error") ? error.title : plus.title }</h1>
					<p>{(message === "" || message === "Error") ? error.error : plus.error }</p>
					{/* {user.email} */}
					<a>{(message === "" || message === "Error") ? error.resend : plus.resend }</a>
				<img className='ghost' src={(message === "" || message === "Error") ? error.image : plus.image} alt='' />
				
					{(message === "" || message === "Error") 
						? null 
						: (
							<button type='submit' >
								Ir para Logar
							</button>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default EmailChecker
