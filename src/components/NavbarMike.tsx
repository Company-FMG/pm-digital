import logomike from '../assets/mikelogo.svg'

export default function NavbarMike(){
 return(
  <>
  <header className="p-6 bg-bluemike">
	<div className="container flex justify-between h-32 mx-auto">
		<a href="/" className="flex items-center p-2">
			<img className="h-20"src={logomike}/>
		</a>
	<div className="flex flex-col items-center justify-center">
        <a>
		    <img alt="" className="w-12 h-12 rounded-full ring-1 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100" src="https://source.unsplash.com/40x40/?portrait?4" />
        </a>
    </div>
    <div className="flex flex-col items-center justify-center font-poppins text-2xl text-white">
        <p>email@email.com</p>
    </div>
		{/*<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
        </button>*/}
	</div>
</header>
  </>
 )}
