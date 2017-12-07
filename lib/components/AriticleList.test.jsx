require('raf'); // kind of a polyfill react needs for animations
import React from 'react';
import ArticleList from './ArticleList';
import { shallow } from 'enzyme';
let enzyme = require('enzyme');

let Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

describe('<ArticleList />', () => {
  it('renders correctly', () => {
    const testProps = {
      articles: {
        a: { id: 'a' },
        b: { id: 'b' }
      },
      store: {
        lookupAuthor: jest.fn(() => ({}))
      }
    };
    const wrapper = shallow(<ArticleList {...testProps} />);
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
