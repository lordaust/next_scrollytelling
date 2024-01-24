type TChapterTypeImage = {
  children: React.ReactNode;
  details: {
    url?: string;
  };
};

export default function ChapterTypeImage({
  children,
  details: { url = 'backgroundimage2.jpg' },
}: TChapterTypeImage) {
  const backgroundImageStyle = {
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <div className='mt-20 ' style={backgroundImageStyle}>
      <div>Images are only from the AI!!</div>
      <div>{children}</div>
    </div>
  );
}
