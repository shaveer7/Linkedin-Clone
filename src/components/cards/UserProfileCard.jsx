import { SheildIcon } from "../../constants/icons";

const UserProfileCard = () => {
  return (
    <div className="bg-white w-full pb-4 rounded-xl shadow-sm border border-gray-200">
      <div className="relative w-full">
        <img
          src="/profileCardBack.jpeg"
          className="rounded-tl-xl rounded-tr-xl h-16 w-full"
        />
        <div className="absolute -bottom-6 left-4">
          <img
            src="/userImg.jpeg"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="mt-7 px-4">
        <h2 className="text-lg font-semibold flex items-center gap-1">
          Shaveer Sajjad <SheildIcon />
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Perfecting the Skills: JavaScript | PHP | CSS | HTML | C++ |...
        </p>
        <p className="text-sm text-gray-500 mt-1">Lahore, Punjab</p>
        <div className="flex items-center gap-2 mt-3">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQHu_E2w9HoHoA/company-logo_100_100/company-logo_100_100/0/1673005545714?e=1755734400&v=beta&t=hNF0gGMpxD4QSKtLzfZZ1UXFAuq7neeKnnVjVAqA0y4"
            className="w-5 h-5 rounded-sm"
          />
          <p className="text-sm font-medium">The Dev Corporate</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
