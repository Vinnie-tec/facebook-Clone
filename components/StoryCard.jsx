import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        alt="bb"
        width={40}
        height={40}
        // layout="fixed"
        // objectFit="contain"
      />
      <h1>{name}</h1>
      <Image
        className="lg:rounded-3xl object-cover filter brightness-75 rounded-full"
        src={src}
        alt="jj"
        width={40}
        height={40}
        // layout="full"
        // objectFit="contain"
      />
    </div>
  )
};

export default StoryCard;
