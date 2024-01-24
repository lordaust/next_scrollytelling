type TChapterTypeVideo = {
  children: React.ReactNode;
  details: {
    url?: string;
  };
};

export default function ChapterTypeVideo({
  children,
  details: { url = 'grayscale_video.mp4' },
}: TChapterTypeVideo) {
  return (
    <div className='min-h-screen z-10'>
      <div>Video be like: Awww mothafucker!</div>
      <div className='bg-video bg-scroll -z-0'>
        <video autoPlay loop muted className='bg-video__content bg-scroll -z-200'>
          <source src={url} type='video/mp4' />
        </video>
        <div className='z-20'>{children}</div>
      </div>
    </div>
  );
}
