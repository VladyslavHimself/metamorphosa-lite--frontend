export interface IProps extends React.HTMLProps<HTMLButtonElement> {
  value: string,
  onClickHandler: () => void;
}