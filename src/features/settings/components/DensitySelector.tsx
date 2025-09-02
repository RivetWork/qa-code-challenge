import { useDispatch, useSelector } from 'react-redux';
import { selectDensity } from '../state/settingsSelectors';
import { setDensity } from '../state/settingsSlice';

export default function DensitySelector() {
  const dispatch = useDispatch();
  const density = useSelector(selectDensity);

  const handleDensityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDensity(e.target.value as any));
  };

  return (
    <select value={density} onChange={handleDensityChange}>
      <option value="comfortable">Comfortable</option>
      <option value="compact">Compact</option>
    </select>
  );
}
