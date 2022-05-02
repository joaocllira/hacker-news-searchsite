import { createRoot } from 'react-dom/client';
import PageChanger from '.';

it('renders a PageChanger without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<PageChanger returnCurrentPage={(page: number) => { }} />,)
});
