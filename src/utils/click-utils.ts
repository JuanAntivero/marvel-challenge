export const handleOnClickPropagation = (onClickFunc: () => void) => (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();
  onClickFunc();
};