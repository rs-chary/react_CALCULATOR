interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
}

function Button({ value, onClick }: ButtonProps) {
  return (
    <button
      onClick={() => onClick(value)}
      className="rounded bg-slate-600 p-4 text-xl text-white hover:bg-slate-500"
    >
      {value}
    </button>
  );
}

export default Button;