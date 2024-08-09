import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import TimelineItem from "@/components/timeline-item";
import { timelineData } from "@/data";

const TimelineSection = () => {
  return (
    <section id="timeline" className="overflow-x-hidden bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-center gap-14">
          <SectionHeader
            titleText="Timeline"
            subtitleText="My journey so far."
          />
          <div className="flex w-full flex-col items-center justify-center">
            {timelineData.map((timelineItem) => (
              <TimelineItem
                key={timelineItem.place}
                position={timelineItem.position}
                place={timelineItem.place}
                dates={timelineItem.dates}
                description={timelineItem.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TimelineSection;
