import React from 'react'
import HeroSection from '../../components/home/HeroSection';
import VideoExpandSection from '../../components/home/VideoExpand';
import PinnedText from '../../components/home/PinnedText';
import RecentWork from '../../components/home/RecentWork';
import WhoAreWe from '../../components/home/WhoAreWe';
import OurServices from '../../components/home/OurServices';
import FlowingMenu from '../../components/home/Services';
import StatCard from '../../components/home/StatCard';
import ScrollVelocity from '../../components/home/ScrollVelicity';
import SocialMediaLinks from '../../components/home/SocialMedia';
import CallToActionAndContact from '../../components/home/CallToAction';

export default function HomeTwo() {

    const mainServices = [
    {
      link: "#",
      text: "Branding",
      image: "https://picsum.photos/600/400?random=10",
    },
    {
      link: "#",
      text: "Technology",
      image: "https://picsum.photos/600/400?random=11",
    },
    {
      link: "#",
      text: "Social Media Marketing",
      image: "https://picsum.photos/600/400?random=12",
    },
    {
      link: "#",
      text: "Designs & Creatives",
      image: "https://picsum.photos/600/400?random=13",
    },
    {
      link: "#",
      text: "Ad Film Making",
      image: "https://picsum.photos/600/400?random=14",
    },
    {
      link: "#",
      text: "Photography",
      image: "https://picsum.photos/600/400?random=15",
    },
    {
      link: "#",
      text: "Animation & VFX",
      image: "https://picsum.photos/600/400?random=16",
    },
  ];

  return (
     <>
     <HeroSection />
      <VideoExpandSection />
      <PinnedText />
      <RecentWork />
      <WhoAreWe />
      <OurServices />

      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={mainServices} />
      </div>

      <StatCard />
      <ScrollVelocity
        texts={["WILD IDEAS! -", "LETS DIVE IN - "]}
        velocity={100}
        className="custom-scroll-text "
      />
      <SocialMediaLinks />
      <CallToActionAndContact />
     </>
  )
}
