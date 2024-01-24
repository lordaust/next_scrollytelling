import ChapterTypeColor from '../components/ChapterTypeColor';
import ChapterTypeGradient from '../components/ChapterTypeGradient';
import ChapterTypeImage from '../components/ChapterTypeImage';
import ChapterTypeVideo from '../components/ChapterTypeVideo';

export function getChapterComponent(type: string) {
  switch (type) {
    case 'video':
      return ChapterTypeVideo;
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
