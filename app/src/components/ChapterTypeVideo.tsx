type TChapterTypeVideo = {
  children: React.ReactNode;
};

export default function ChapterTypeVideo({ children }: TChapterTypeVideo) {
  return (
    <div className='mt-20 bg-red-800'>
      <div>Video be like: Awww mothafucker!</div>
      <div>{children}</div>
    </div>
  );
}
