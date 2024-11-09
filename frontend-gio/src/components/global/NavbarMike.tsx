import logomike from '../../assets/PM Digital Logo.svg';

export default function NavbarMike(){
	return(
		<header className="p-0 bg-bluemike">
			<div className="container flex justify-between sm:h-16 md:h-20 mx-auto px-4">
				<a href="/home" className="flex items-center p-2">
					<img className="h-8 sm:h-8 md:h-12" src={logomike}/>
				</a>
				<div className="flex flex-row gap-6 items-center justify-center">
					<a href="#">
						<img alt="" className="w-4 sm:w-6 md:w-12 lg:w-12 rounded-full ring-4 ring-white ring-offset-4 ring-offset-bluemike" src="https://source.unsplash.com/40x40/?portrait?" />
				</a>
				<div className="font-poppins text-xs sm:text-base md:text-sm lg:text-lg text-white">
					<p>{localStorage.getItem('nome')}</p>
					<p className='text-xs'>Despachante</p>
				</div>
				</div>
				{/*<button className="p-4 lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>*/}
			</div>
		</header>
	)
}