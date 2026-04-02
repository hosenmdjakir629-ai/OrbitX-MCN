import Hero from '../components/Hero';
import Partners from '../components/Partners';
import NetworkPartners from '../components/NetworkPartners';
import MissionVision from '../components/MissionVision';
import UniqueBenefits from '../components/UniqueBenefits';
import Features from '../components/Features';
import PlatformTools from '../components/PlatformTools';
import CreatorTestimonials from '../components/CreatorTestimonials';
import Earnings from '../components/Earnings';
import CopyrightProtection from '../components/CopyrightProtection';
import RequirementsPricing from '../components/RequirementsPricing';
import JoinForm from '../components/JoinForm';
import FAQ from '../components/FAQ';
import Trust from '../components/Trust';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal><Partners /></ScrollReveal>
      <ScrollReveal><NetworkPartners /></ScrollReveal>
      <ScrollReveal><MissionVision /></ScrollReveal>
      <ScrollReveal><UniqueBenefits /></ScrollReveal>
      <ScrollReveal><Features /></ScrollReveal>
      <ScrollReveal><PlatformTools /></ScrollReveal>
      <ScrollReveal><CreatorTestimonials /></ScrollReveal>
      <ScrollReveal><Earnings /></ScrollReveal>
      <ScrollReveal><CopyrightProtection /></ScrollReveal>
      <ScrollReveal><RequirementsPricing /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><JoinForm /></ScrollReveal>
      <ScrollReveal><Trust /></ScrollReveal>
    </>
  );
}
