import * as S from './style';

interface Props {
  label: string;
  name: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, type, onChange, value }: Props) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input name={name} type={type} onChange={onChange} value={value} />
    </S.Container>
  );
};

export default Input;
