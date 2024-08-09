import Container from "@/components/container";
import ContactInformation from "@/components/contact-information";
import ContactForm from "@/components/contact-form";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-12">
      <Container>
        <div className="grid w-full grid-cols-1 divide-[#cccccc] max-lg:divide-y lg:grid-cols-2 lg:divide-x">
          <ContactInformation />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
