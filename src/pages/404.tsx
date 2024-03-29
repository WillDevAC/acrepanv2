import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-red-600 dark:text-red-400">
          Pagina principal
        </Link>
      </p>
    </div>
  )
}