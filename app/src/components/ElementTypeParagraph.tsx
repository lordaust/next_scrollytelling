type TElementTypeParagraph = {
  children: React.ReactNode;
  content: string;
};

export default function ElementTypeParagraph({ children, content }: TElementTypeParagraph) {
  return (
    <div className='border 2 bg-cyan-800 border-white'>
      A paragraph! Omg! {children} - {content}
    </div>
  );
}
