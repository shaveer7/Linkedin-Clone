import Layout from "../../components/layout";
import LinkedInNews from "../../components/common/LinkedInNews";
import SuggestedFollow from "../../components/common/SuggestedFollow";
import UserProfileCard from "../../components/cards/UserProfileCard";
import ConnectionsWidget from "../../components/cards/ConnectionsWidget";
import PostBoxCard from "../../components/cards/PostBoxCard";
import PostCard from "../../components/cards/PostCard";
import PremiumBadgeCard from "../../components/cards/PremiumBadgeCard";
import QuickAccessCard from "../../components/cards/QuickAccessCard";

function Home() {
  return (
    <Layout>
      <div className="flex flex-row justify-between gap-8 max-w-[100vw] w-full">
        {/* <div className="max-w-[5vw] h-full"></div> */}
        <div className="w-full flex flex-col items-start max-w-[20vw] gap-2">
          <UserProfileCard />
          <ConnectionsWidget />
          <PremiumBadgeCard />
          <QuickAccessCard />
        </div>
        <div className="max-w-[50vw] w-full gap-2 flex flex-col">
          <PostBoxCard />
          <PostCard />
        </div>
        <div className="max-w-[20vw] w-full gap-2 flex flex-col">
          <LinkedInNews />
          <SuggestedFollow />
        </div>
        {/* <div className="max-w-[5vw]"></div> */}
      </div>
    </Layout>
  );
}

export default Home;
