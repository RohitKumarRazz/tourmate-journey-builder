import { cn } from "../utils/cn";
import React from "react";
import { BentoGridItem } from "../components/ui/bento-grid";
import  BentoGrid  from "../components/ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function LADAKH() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Ladakh.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i===3 || i===6 || i===10 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const Ladakh = [
    {
      title: "Pangong Lake",
      description: "Marvel at the enchanting beauty of Pangong Lake, a breathtaking high-altitude lake situated amidst the majestic Himalayas. The crystal-clear blue waters and dramatic landscape make it a popular destination for photography and relaxation.",
      header: "images/pangong_lake.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Nubra Valley",
      description: "Embark on a journey to the surreal landscapes of Nubra Valley, known for its stark beauty and unique attractions like sand dunes and double-humped Bactrian camels. Experience the tranquility of this high-altitude desert region.",
      header: "images/nubra_valley.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Leh Palace",
      description: "Explore the historic Leh Palace, a former royal palace perched on a hill overlooking the town of Leh. Marvel at the traditional Tibetan architecture, ancient artifacts, and panoramic views of the surrounding mountains and valleys.",
      header: "images/leh_palace.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Khardung La Pass",
      description: "Conquer the world's highest motorable pass, Khardung La, and enjoy breathtaking views of the snow-capped Himalayas. Challenge yourself with the high-altitude drive or motorcycle ride to reach this iconic mountain pass.",
      header: "images/khardung_la_pass.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Hemis Monastery",
      description: "Immerse yourself in the spiritual ambiance of Hemis Monastery, one of the largest and wealthiest monasteries in Ladakh. Witness colorful festivals, ancient rituals, and a rich collection of Buddhist artifacts and thangkas.",
      header: "images/hemis_monastery.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Tso Moriri Lake",
      description: "Experience the serene beauty of Tso Moriri Lake, a high-altitude lake located in the Changthang plateau. Surrounded by snow-capped mountains and vast meadows, this pristine lake is a haven for birdwatchers and nature enthusiasts.",
      header: "images/tso_moriri_lake.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Diskit Monastery",
      description: "Discover the ancient Diskit Monastery, perched on a hilltop in the Nubra Valley. Admire the stunning views of the surrounding landscape and explore the monastery's intricate murals, statues, and prayer halls.",
      header: "images/diskit_monastery.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Zanskar Valley",
      description: "Embark on an adventure to Zanskar Valley, a remote and pristine region known for its rugged terrain, ancient monasteries, and adventurous treks. Explore frozen rivers, high mountain passes, and traditional Ladakhi villages.",
      header: "images/zanskar_valley.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Shanti Stupa",
      description: "Find peace and tranquility at Shanti Stupa, a white-domed Buddhist stupa perched atop a hill in Leh. Enjoy panoramic views of the Leh cityscape, surrounding mountains, and the Indus River valley from this sacred monument.",
      header: "images/shanti_stupa.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Lamayuru Monastery",
      description: "Visit the ancient Lamayuru Monastery, one of the oldest and largest monasteries in Ladakh. Explore the monastery's unique architecture, sacred relics, and mesmerizing lunar-like landscape that surrounds it.",
      header: "images/lamayuru_monastery.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  