const textColors = {
  primary: "#bbcbdc",
  secondary: "#aa580d",
} as const;

type MessageProps = {
  message: string | undefined;
  textColor?: keyof typeof textColors;
};

const Message = ({ message, textColor = "primary" }: MessageProps) => {
  if (!message) {
    return null;
  }

  return (
    <span className={`text-xl text-[${textColors[textColor]}]`}>{message}</span>
  );
};

export { Message };
