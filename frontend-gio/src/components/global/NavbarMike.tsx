import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logomike from '../../assets/PM Digital Logo.svg';

export default function NavbarMike() {
	const navigate = useNavigate();
	const [showProfilePopup, setShowProfilePopup] = useState(false);

	return (
		<header className="p-0 bg-bluemike">
			<div className="container flex justify-between sm:h-16 md:h-20 mx-auto px-4">
				<a href="/home" className="flex items-center p-2">
					<img className="h-8 sm:h-8 md:h-12" src={logomike} alt="Logo PM Digital"/>
				</a>
				<div className="flex flex-row gap-6 items-center justify-center relative pr-10">
					<button onClick={() => navigate('/perfil')}
						onMouseEnter={() => setShowProfilePopup(true)}
						onMouseLeave={() => setShowProfilePopup(false)}
						className="p-2 rounded-md" >
						<img
							alt="User Avatar"
							className="w-4 sm:w-6 md:w-12 lg:w-12 rounded-full ring-4 ring-white ring-offset-4 ring-offset-bluemike"
							src="https://source.unsplash.com/40x40/?portrait?"
						/>
					</button>
					
					{/* Popup de perfil */}
					{showProfilePopup && (
						<div 
							className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-64 p-6 border border-gray-200 transition-opacity duration-3000"
							style={{ transitionDelay: '3s', opacity: showProfilePopup ? 1 : 0 }}
							onMouseEnter={() => setShowProfilePopup(true)}
							onMouseLeave={() => setShowProfilePopup(false)}
						>
							{/* Centraliza o avatar, nome e cargo */}
							<div className="flex flex-col items-center">
								<img
									src="https://source.unsplash.com/60x60/?portrait?"
									alt="Profile Avatar"
									className="w-16 h-16 rounded-full ring-2 ring-blue-600 mb-3"
								/>
								<p className="font-semibold text-lg">{localStorage.getItem('nome')}</p>
								<p className="text-xs text-gray-500 mb-4">Despachante</p>
							</div>

							{/* Botões de Ação */}
							<div className="flex flex-col gap-2 mt-2 text-center">
								<button 
									onClick={() => navigate('/minha-conta')}
									className="text-blue-600 hover:underline text-sm font-medium"
								>
									Minha Conta
								</button>
								<button 
									onClick={() => navigate('/configuracoes')}
									className="text-blue-600 hover:underline text-sm font-medium"
								>
									Configurações
								</button>
								<button 
									onClick={() => navigate('/sair')}
									className="flex items-center justify-center text-red-600 hover:underline text-sm font-medium mt-2"
								>
									Sair
									<span className="ml-2">🔒</span> {/* Espaço reservado para o ícone */}
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
