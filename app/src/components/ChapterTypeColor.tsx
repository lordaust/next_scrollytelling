type TChapterTypeColor = {
  children: React.ReactNode;
};

export default function ChapterTypeColor({ children }: TChapterTypeColor) {
  return (
    <div className='mt-20 bg-green-800'>
      <div>This is the color yo!</div>
      <div>{children}</div>
    </div>
  );
}
