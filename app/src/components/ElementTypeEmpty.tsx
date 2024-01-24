type TElementTypeEmpty = {
  children?: React.ReactNode;
  content: string;
};

export default function ElementTypeEmpty({ children, content }: TElementTypeEmpty) {
  return (
    <div className='border 2 bg-amber-800 border-white w-1/2'>
      No type! {children} - {content}
    </div>
  );
}
