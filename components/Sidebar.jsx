import { useSession } from "next-auth/react";
import { ChevronDownIcon, UserGroupIcon, ShoppingBagIcon } from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session, loading } = useSession();

  return (
    <div className="p-2 m-5 max-w-[600px] xl:min-w-[300px] ">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={ShoppingBagIcon} title="Market Place" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
