interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ text, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer text-[20px]/[1.4] tracking-[-0.5px] font-bold bg-neutral-900 px-4 py-3 text-neutral-0 rounded-[10px] ${className}`}>
      {text}
    </button>
  );
};

export default CustomButton;
