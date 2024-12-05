type ErrorProps = {
  error: string | undefined;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) {
    return null;
  }

  return <span className="text-base text-red-800">{error}</span>;
};

export { Error };
