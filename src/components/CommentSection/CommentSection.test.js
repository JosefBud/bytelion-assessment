import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CommentSection from './CommentSection';

describe('<CommentSection />', () => {
  const initialState = {
    username: undefined
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders', () => {
    const render = renderer
      .create(
        <Provider store={store}>
          <CommentSection />
        </Provider>
      )
      .toJSON();

    expect(render).toMatchSnapshot();
  });
});
