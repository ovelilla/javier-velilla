type FieldProps = {
  children: React.ReactNode;
  className?: string;
};

const Field = ({ children, className = "" }: FieldProps) => {
  return <div className={`flex flex-col gap-2 ${className}`}>{children}</div>;
};

export { Field };
