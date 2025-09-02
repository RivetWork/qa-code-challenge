import { useDispatch, useSelector } from 'react-redux';
import { selectPageSize } from '../state/settingsSelectors';
import { setPageSize } from '../state/settingsSlice';

export default function PageSizeInput() {
  const dispatch = useDispatch();
  const pageSize = useSelector(selectPageSize);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(e.target.value);
    if (newSize >= 5 && newSize % 5 === 0) {
      dispatch(setPageSize(newSize));
    }
  };

  return (
    <label>
      Page size:
      <input type="number" min={5} step={5} value={pageSize} onChange={handlePageSizeChange} />
    </label>
  );
}
