import { EventsIcon, GroupsIcon, NewsletterIcon, SavedIcon } from "../../constants/icons";
import QuickAccessComp from "../smallComponents/QuickAccessComp";

const QuickAccessCard = () => {
  return (
    <div className="rounded-lg py-3 px-4 flex flex-col gap-4 items-start border bg-white border-gray-300 shadow-sm w-full">
      <QuickAccessComp Icon={SavedIcon} title="Saved Items" />
      <QuickAccessComp Icon={GroupsIcon} title="Groups" />
      <QuickAccessComp Icon={NewsletterIcon} title="Newsletters" />
      <QuickAccessComp Icon={EventsIcon} title="Events" />
    </div>
  );
};

export default QuickAccessCard;
