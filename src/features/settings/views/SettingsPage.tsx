import ThemeSelector from '../components/ThemeSelector';
import PageSizeInput from '../components/PageSizeInput';
import DensitySelector from '../components/DensitySelector';
import { DetailsSelector } from '../components/DetailsSelector';

export default function SettingsPage() {
  return (
    <div className="settings">
      <h1>Settings</h1>

      <section>
        <h2>Theme</h2>
        <ThemeSelector />
      </section>

      <section>
        <h2>List</h2>
        <PageSizeInput />
        <DensitySelector />
      </section>

      <section>
        <h2>Detail fields</h2>
        <DetailsSelector />
      </section>
    </div>
  );
}
