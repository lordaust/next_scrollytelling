type TChapterTypeGradient = {
  children: React.ReactNode;
  details: {
    fromColor?: string;
    toColor?: string;
  };
};

export default function ChapterTypeGradient({
  children,
  details: { fromColor = 'defaultFromColor', toColor = 'defaultToColor' },
}: TChapterTypeGradient) {
  const gradientStyle = `mt-20 bg-gradient-to-r from-${fromColor} to-${toColor}`;
  return (
    <div className={gradientStyle}>
      <div>Gradient be like: Awww mothafucker!</div>
      <div>{children}</div>
    </div>
  );
}
