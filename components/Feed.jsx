import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6">
      <h1>feed</h1>
      <div>
        <Stories />
      </div>
    </div>
  );
};

export default Feed;
