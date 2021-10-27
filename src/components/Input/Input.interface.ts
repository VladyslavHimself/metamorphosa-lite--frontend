export interface IProps {
  type: 'text' | 'password',
  placeholder?: string, 
  setData: React.Dispatch<React.SetStateAction<string>>,
}