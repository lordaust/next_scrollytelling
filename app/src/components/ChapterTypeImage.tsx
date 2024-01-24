type TChapterTypeImage = {
  children: React.ReactNode;
  details: {
    imageURL?: string;
    imageStyle?: string;
  };
};

export default function ChapterTypeImage({
  children,
  details: { imageURL = 'backgroundimage2.jpg', imageStyle = 'bg-fixed' },
}: TChapterTypeImage) {
  const backgroundImageURL = { backgroundImage: `url(${imageURL})` };
  const backgroundImageClasses = 'bg-center bg-cover bg-no-repeat bg-fixed'; //TODO fix tofixed
  const backgroundImageStyle = { imageStyle };
  return (
    <div
      className={`mt-20 bg-cover ${backgroundImageClasses} ${backgroundImageStyle}`}
      style={backgroundImageURL}>
      <div>Images are only from the AI!!</div>
      <div>{children}</div>
    </div>
  );
}
