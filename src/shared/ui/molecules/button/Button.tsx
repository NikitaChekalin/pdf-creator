import { cn } from '@shared/lib'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  className?: string
  onClick?: () => void
}

export const Button = ({ title, onClick, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn('bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded', className)}
    >
      {title}
    </button>
  )
}
