import styles from "@/styles/home/hero/hero.module.css";
import Image from "next/image";
import heroImage from "@/assets/images/hero-img.png";
import lineIcon from "@/assets/images/lineIcon.png";
import smallLeaf from "@/assets/images/SmallLeaf.png";
import leftLeaf from "@/assets/images/heroLeftLeaf.png";
import rightLeaf from "@/assets/images/heroRightLeaf.png";
import Container from "@/components/shared/Container";
import Description from "./Description";
import DownloadApp from "./DownloadApp";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <Container>
          <div className="py-5 z-50 relative ">
            <Description />
            <DownloadApp />
          </div>
        </Container>
      </div>

      <div className={`${styles.right} bg-secondary`}>
        <div className="absolute h-[450px] sm:h-[700px] w-[410px] sm:w-[600px] bottom-0 left-0 -translate-x-[35%] z-20">
          <div className="relative h-full w-full">
            <div className="absolute w-12 sm:w-20 h-12 sm:h-20 left-0 top-1/2 -translate-y-2/3 -rotate-90">
              <Image src={lineIcon} objectPosition="center" fill alt="#" />
            </div>
            <Image
              src={heroImage}
              objectPosition="center"
              fill
              alt="wearing a striped orange hat and a blue plaid shirt is holding a wooden crate filled with fresh vegetables, including lettuce, radishes, bell peppers, and other greens. The person's face is blurred"
            />
          </div>
        </div>
      </div>

      <Image
        src={smallLeaf}
        alt="leaf icon"
        width={50}
        height={50}
        className="absolute top-36 left-1/2 z-20"
      />
      <Image
        src={smallLeaf}
        alt="leaf icon"
        width={50}
        height={50}
        className="hidden sm:block  absolute bottom-36 left-36 z-20"
      />
      <Image
        src={leftLeaf}
        alt="leaf icon"
        width={60}
        height={60}
        className="hidden sm:block absolute top-20 left-0 z-20"
      />
      <Image
        src={rightLeaf}
        alt="leaf icon"
        width={60}
        height={60}
        className="absolute top-1/3 right-0 z-20"
      />
    </section>
  );
};

export default Hero;
