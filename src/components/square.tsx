interface SquareProps {
  value: null | "X" | "O";
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="border h-9 w-9 font-bold text-center text-2xl -mt-px -mr-px"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
