import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import CommentSection from './components/CommentSection/CommentSection';

const App = () => {
  return (
    <div>
      <Header />
      <MainBlock />
      <CommentSection />
    </div>
  );
};

export default connect(null, null)(App);
