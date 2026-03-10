import type { AppView } from "../types";

interface BrowseProps {
  onNavigate: (view: AppView) => void;
}

const Browse = (_props: BrowseProps) => {
  return (
    <main>
      <h1>Browse</h1>
    </main>
  );
};

export default Browse;
