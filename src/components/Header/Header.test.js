import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from './Header';

jest.mock('../../media/bytelion-logo.png', () => {
  return undefined;
});

describe('<Header />', () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders', () => {
    const render = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON();

    expect(render).toMatchSnapshot();
  });
});
