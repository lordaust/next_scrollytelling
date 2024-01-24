type TElementTypeParagraph = {
  children: React.ReactNode;
  content: string;
};

export default function ElementTypeParagraph({ children, content }: TElementTypeParagraph) {
  return (
    <div className='border 2 bg-cyan-800 border-white w-1/2 min-h-80'>
      A paragraph! Omg! {children} - {content}
    </div>
  );
}
