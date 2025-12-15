import SectionHeader from "@/components/ui/SectionHeader";
import sharingData from "@/data/sharing.json";
import { SharingData } from "@/types";
import SharingItem from "./SharingItem";
import ProfileLinks from "./ProfileLinks";

export default function Sharing() {
  const data = sharingData as SharingData;

  return (
    <section id="sharing" className="pb-12 lg:pb-40">
      <SectionHeader
        title="What I'm Sharing"
        tagline="Thoughts, ideas and writing I've been excited to share."
      />

      <div className="mb-8">
        {data.items.map((item) => (
          <SharingItem key={item.id} {...item} />
        ))}
      </div>

      <ProfileLinks links={data.profileLinks} />
    </section>
  );
}
