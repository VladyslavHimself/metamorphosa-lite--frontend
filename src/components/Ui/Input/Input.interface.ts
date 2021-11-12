export interface IProps extends React.HTMLProps<HTMLInputElement> {
  type: 'text' | 'password',
  placeholder?: string, 
  changeInputState: React.Dispatch<React.SetStateAction<string>>,
}