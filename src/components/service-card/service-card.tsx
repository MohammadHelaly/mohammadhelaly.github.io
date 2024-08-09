interface Props {
  serviceIcon: React.ReactNode;
  serviceTitle: string;
  serviceDescription: string;
}

const ServiceCard = (props: Props) => {
  const { serviceIcon, serviceTitle, serviceDescription } = props;

  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-4 border-b-2 border-black p-6 lg:px-4">
      <div className="h-24 w-full">{serviceIcon}</div>
      <h3 className="text-center font-manrope text-[calc(1.3rem_+_0.6vw)] font-bold leading-[1.2] text-black xl:text-[1.75rem]">
        {serviceTitle}
      </h3>
      <p className="text-center font-manrope text-muted">
        {serviceDescription}
      </p>
    </div>
  );
};

export default ServiceCard;
