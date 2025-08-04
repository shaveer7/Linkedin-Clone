import FollowButton from "../buttons/FollowButton";

const SuggestedFollowCard = ({ companyName, description }) => {
  return (
    <div>
      <div className="flex items-start gap-3 mb-4">
        <div>
          <img src={"/companyLogo.jpeg"} className="w-10 h-10 rounded-full" />
        </div>
        <div>
          <div className="flex-1 pb-1">
            <p className="font-medium text-sm pb-1">{companyName}</p>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <FollowButton />
        </div>
      </div>
    </div>
  );
};

export default SuggestedFollowCard;
