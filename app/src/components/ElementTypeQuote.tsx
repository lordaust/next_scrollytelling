type TElementTypeQuote = {
  children: React.ReactNode;
  content: string;
};

export default function ElementTypeQuote({ children, content }: TElementTypeQuote) {
  return (
    <div className='border 2 bg-yellow-800 border-white'>
      This is the quote: {children} - {content}
    </div>
  );
}
