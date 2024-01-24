import ChapterTypeColor from '../components/ChapterTypeColor';
import ChapterTypeGradient from '../components/ChapterTypeGradient';
import ChapterTypeImage from '../components/ChapterTypeImage';
import ChapterTypeVideo from '../components/ChapterTypeVideo';
import ChapterTypeVideo2 from '../components/ChapterTypeVideo2';

export function getChapterComponent(type: string) {
  switch (type) {
    case 'video':
      return ChapterTypeVideo;
    case 'video2':
      return ChapterTypeVideo2;
    case 'gradient':
      return ChapterTypeGradient;
    case 'color':
      return ChapterTypeColor;
    case 'image':
      return ChapterTypeImage;
    default:
      return ChapterTypeColor;
  }
}
