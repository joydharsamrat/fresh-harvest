import { questrial } from "@/app/fonts";
import Image from "next/image";
import appStoreLogo from "@/assets/images/appstore.png";
import googlePlayLogo from "@/assets/images/googleplay.png";

const DownloadApp = () => {
  return (
    <div className="mt-44 sm:mt-5">
      <h3 className={`${questrial.className}  text-sm`}>Download App:</h3>
      <div className="flex gap-2 mt-2">
        <div className="relative h-10 w-[140px]">
          <Image
            src={appStoreLogo}
            fill
            alt="Fresh Salad"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-10 w-[140px]">
          <Image
            src={googlePlayLogo}
            fill
            alt="Fresh Salad"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
