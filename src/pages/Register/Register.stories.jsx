import React from 'react';

import { Register } from './Register';
import * as HeaderStories from '../../components/Header/Header.stories';

export default {
  title: 'Pages/Register',
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
