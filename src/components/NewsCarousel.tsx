import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const postUrns = [
  "urn:li:activity:7427318692113174528",
  "urn:li:activity:7427397497846689792",
  "urn:li:activity:7408242593362276352",
];

const NewsCarousel = () => {
  return (
    <Carousel
      opts={{ align: "center", loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
    >
      <CarouselContent>
        {postUrns.map((urn, i) => (
          <CarouselItem key={i}>
            <div className="rounded-2xl overflow-hidden border border-border bg-card">
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/${urn}`}
                height="500"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title={`LinkedIn post ${i + 1}`}
                className="w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 md:-left-12" />
      <CarouselNext className="-right-4 md:-right-12" />
    </Carousel>
  );
};

export default NewsCarousel;
