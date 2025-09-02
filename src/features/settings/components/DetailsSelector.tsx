import { useDispatch, useSelector } from 'react-redux';
import { selectShowFields } from '../state/settingsSelectors';
import { setShowFields } from '../state/settingsSlice';

export const DetailsSelector = () => {
  const dispatch = useDispatch();
  const activeFields = useSelector(selectShowFields);

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    dispatch(setShowFields({ [key]: event.target.checked }));
  };

  return Object.entries(activeFields).map(([key, val]) => (
    <label key={key} style={{ display: 'block' }}>
      <input type="checkbox" checked={val} onChange={(e) => handleSelection(e, key)} />
      {key}
    </label>
  ));
};
