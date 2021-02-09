import { render, suppressUseLayoutReduxWarning } from '../test-utils';
import Calendar from "./Calendar";

describe('components::Calendar', () => {
  suppressUseLayoutReduxWarning();
  test('renders without crashing', () => {
    render(<Calendar />);
  });
});
