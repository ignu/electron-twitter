import { createStore } from 'redux';
const ADD_TWEETS = 'add_tweets'

const state = {
  tweets: []
}

export const updateTweets = (tweets) => {
  return {
    type: ADD_TWEETS,
    data: tweets
  }
}

const reducer = (state: DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_TWEETS:
      return {tweets: action.data}

    default :
      return state
    }
}

const store = createStore(reducer);

export default store;
