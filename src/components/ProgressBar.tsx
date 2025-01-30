interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="h-full w-2 bg-gray-100 rounded-full relative">
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-primary/50 rounded-full transition-all duration-500"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};