type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 ${className}`}
    >
      {children}
    </div>
  );
};

export { Container };
