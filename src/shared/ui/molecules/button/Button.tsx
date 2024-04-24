import { cn } from '@shared/lib'

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  isLoading?: boolean
  className?: string
  onClick?: () => void
}

export const Button = ({ title, onClick, className, isLoading = false, ...props }: Button) => {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded',
        isLoading ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
    >
      {isLoading ? 'Loading...' : title}
    </button>
  )
}
