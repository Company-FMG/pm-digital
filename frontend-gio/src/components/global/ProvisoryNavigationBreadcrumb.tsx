export default function ProvisoryNavigationBreadcrumb() {
    return (
        <>
            <div className="container mx-auto  max-w-xl">
                <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-100 dark:text-gray-800">
                    <ol className="flex h-8 space-x-2 dark:text-gray-800">
                        <li className="flex items-center">
                            <a rel="noopener noreferrer" href="/denuncia" className="flex items-center hover:underline">Denúncia</a>
                        </li>
                        <li className="flex items-center space-x-1">
                            <span className="dark:text-gray-600">/</span>
                            <a rel="noopener noreferrer" href="/viaturas" className="flex items-center px-1 capitalize hover:underline">Viaturas em Circulação</a>
                        </li>
                        <li className="flex items-center space-x-1">
                            <span className="dark:text-gray-600">/</span>
                            <a rel="noopener noreferrer" href="/newcomplaint" className="flex items-center px-1 capitalize hover:underline">Nova ocorrência</a>
                        </li>
                        <li className="flex items-center space-x-1">
                            <span className="dark:text-gray-600">/</span>
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-1 capitalize hover:underline">Login</a>
                        </li>
                        <li className="flex items-center space-x-1">
                            <span className="dark:text-gray-600">/</span>
                            <a rel="noopener noreferrer" href="/home" className="flex items-center px-1 capitalize hover:underline">Default</a>
                        </li>
                    </ol>
                </nav>
                <p className="ml-20">(Menu de navegação entre as rotas provisório)</p>
            </div>
        </>
    )
}