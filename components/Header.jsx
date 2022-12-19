import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg"
          alt=""
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 sm:mr-10 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-transparent hidden md:inline-flex ml-2 items-center placeholder-gray-500 outline-none flex-shrink"
          />
        </div>
      </div>

      {/* center div */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          alt=""
          width={30}
          height={30}
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3">Vinnie-tec</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
