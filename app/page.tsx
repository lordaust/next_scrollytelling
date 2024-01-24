import document from './src/data/document.json';
import { getChapterComponent } from './src/utilities/getChapterComponent';
import { getElementComponent } from './src/utilities/getElementComponent';

export default function Home() {
  return (
    <main className='bg-gray-800'>
      {document.map((chapter, index) => {
        const ChapterComponent = getChapterComponent(chapter.type);

        return (
          <ChapterComponent key={chapter.chapterId} details={chapter.details}>
            {chapter.elements.map((element) => {
              const ElementComponent = getElementComponent(element.type);

              return (
                <div className='flex items-center justify-center' key={element.id}>
                  <ElementComponent key={element.id} content={element.content}>
                    Wassup?
                  </ElementComponent>
                </div>
              );
            })}
          </ChapterComponent>
        );
      })}
    </main>
  );
}
