import * as S from './style';
import { ChangeEvent, useState } from 'react';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <S.Label>
      <S.Input checked={checked} type="checkbox" onChange={handleChange} />
      <S.Switch />
    </S.Label>
  );
};

export default ToggleSwitch;
