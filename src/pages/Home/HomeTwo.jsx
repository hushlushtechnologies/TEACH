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
      image: "/img/brand.jpg",
    },
    {
      link: "#",
      text: "Technology",
      image: "/img/technology.jpg",
    },
    {
      link: "#",
      text: "Social Media Marketing",
      image: "/img/social.jpg",
    },
    {
      link: "#",
      text: "Designs & Creatives",
      image: "/img/design.jpg",
    },
    {
      link: "#",
      text: "Ad Film Making",
      image: "/img/adfilm.jpg",
    },
    {
      link: "#",
      text: "Photography",
      image: "/img/photo.jpg",
    },
    {
      link: "#",
      text: "Animation & VFX",
      image: "/img/vfx.jpg",
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
