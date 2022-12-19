import StoryCard from "./StoryCard";

const story = [
  {
    name: "Vinnietec",
    src: "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
    profile:
      "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
  },
  {
    name: "Bolu",
    src: "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
    profile:
      "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
  },
  {
    name: "Cynthia",
    src: "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
    profile:
      "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
  },
  {
    name: "Ruth",
    src: "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
    profile:
      "https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      <h2>h2</h2>
      {story.map((story) => {
        <div>
          <h1>{story.name}</h1>
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        </div>;
      })}
    </div>
  );
};

export default Stories;
