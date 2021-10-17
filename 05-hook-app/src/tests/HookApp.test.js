import { shallow } from "enzyme"
import HookApp from "../HookApp"

describe('Pruebas en <HookApp />', () => {
  test('should show correctly', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  })
  
})