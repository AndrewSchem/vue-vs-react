interface ButtonProps {
  label: string
  children?: React.ReactNode
  onClick: () => void
}

export default function Button({ label, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
      {label}
    </button>
  )
}
