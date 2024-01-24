import '../../test.css';

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
    <div className='w-screen '>
      <div className='relative border-2 border-gray-900'>Video be like: Awww mothafucker!</div>
      <video
        src={url}
        autoPlay
        loop
        muted
        className='object-cover static h-screen w-screen top-0 left-0 -z-10  '></video>

      <div className='px-72  w-[80] h-screen flex flex-col-justify-cnter text-white space-y-5'>
        <span className='text-6xl'>FFS MOTERFUCKER!!!!</span>
        <span className='text-neutral-200'>LIpsum tipsum</span>
      </div>
    </div>
  );
}
