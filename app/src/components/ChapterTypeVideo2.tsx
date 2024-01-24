type TChapterTypeVideo = {
  children: React.ReactNode;
  details: {
    url?: string;
  };
};

export default function ChapterTypeVideo({ children, details: { url = '' } }: TChapterTypeVideo) {
  return (
    <article className='parallax-container'>
      <header className='parallax'>
        <div className='video-wrapper'>
          <h1 className='leading-none p-4 text-white text-3xl uppercase video-title md:p-8 md:text-5xl'>
            Video Background
          </h1>
          <video autoPlay loop muted className='w-full'>
            <source
              src='https://static.vecteezy.com/system/resources/previews/004/827/387/mp4/abstracy-particles-background-video.mp4'
              type='video/mp4'></source>
            <source
              src='https://static.vecteezy.com/system/resources/previews/004/827/387/abstracy-particles-background-video.webm'
              type='video/webm'></source>
          </video>
        </div>
      </header>

      <div className='bg-gray-500 content leading-normal py-12 px-4 md:px-12'>
        <div className='mx-auto max-w-md'>
          <p className='mb-4 md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error iure quo ea
            dolore, iste ad assumenda ducimus sunt. Rerum nulla ipsum unde exercitationem ea atque
            explicabo tempore perferendis delectus?
          </p>
          <p className='mb-4 md:text-xl'>
            Laudantium cumque mollitia maxime, magni pariatur blanditiis laborum quisquam. Iure
            veniam deserunt debitis minus animi at fugiat doloremque a tempore obcaecati adipisci
            voluptate molestiae, amet odio, unde velit! Dolore, molestiae.
          </p>
          <p className='mb-4 md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error iure quo ea
            dolore, iste ad assumenda ducimus sunt. Rerum nulla ipsum unde exercitationem ea atque
            explicabo tempore perferendis delectus?
          </p>
          <p className='md:text-xl'>
            Laudantium cumque mollitia maxime, magni pariatur blanditiis laborum quisquam. Iure
            veniam deserunt debitis minus animi at fugiat doloremque a tempore obcaecati adipisci
            voluptate molestiae, amet odio, unde velit! Dolore, molestiae.
          </p>
        </div>
      </div>
    </article>
  );
}
