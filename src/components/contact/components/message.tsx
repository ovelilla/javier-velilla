const colors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

type MessageProps = {
  message: string | undefined;
  color?: keyof typeof colors;
};

const Message = ({ message, color = "primary" }: MessageProps) => {
  if (!message) {
    return null;
  }

  return <span className={`text-xl text-[${colors[color]}]`}>{message}</span>;
};

export { Message };
