interface Props {
  name: string;
  children: React.ReactNode;
}

const SkillIcon = (props: Props) => {
  const { name, children } = props;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex size-10 flex-col items-center justify-center lg:h-16 lg:w-20">
        {children}
      </div>
      <p className="font-manrope font-bold text-black">{name}</p>
    </div>
  );
};

export default SkillIcon;
