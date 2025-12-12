import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import sharingData from "@/data/sharing.json";
import { SharingData } from "@/types";
import SharingItem from "./SharingItem";
import ProfileLinks from "./ProfileLinks";

export default function Sharing() {
  const data = sharingData as SharingData;

  return (
    <section id="sharing" className="min-h-screen pt-20 md:pt-24">
      <Container size="full">
        <div className="flex flex-col min-h-[calc(100vh-6rem)]">
          {/* Top: Section Heading - Left Aligned */}
          <div className="mb-12 md:mb-14 lg:mb-16">
            <SectionHeading>What I&apos;m Sharing</SectionHeading>
          </div>

          {/* Middle: Sharing Items - Vertically Centered, Full Width */}
          <div className="flex-1 flex items-center">
            <div className="w-full">
              {data.items.map((item) => (
                <SharingItem key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* Bottom: Profile Links - Left Aligned */}
          <div className="mt-12">
            <ProfileLinks links={data.profileLinks} />
          </div>
        </div>
      </Container>
    </section>
  );
}
