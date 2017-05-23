import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Twit from 'twit'
import { Provider } from 'react-redux'
import store, {updateTweets} from './store'
import TweetList from './components/TweetList'
import R from 'ramda'

const getNames = R.map(R.pluck('text'))

class App extends Component {
  componentDidMount() {
    const creds = {
      consumer_key: 'csAfOO5ZDczuIYPNK6leRXbAH',
      consumer_secret: 'KIv9GtonuKHoWiH92a4GHHOlyEn3y7t0AINmGF3TbRYzBxefOe',
      access_token: '6649832-JfSqzFY8uSJiGfAvG6bhbvV4KkSc5CUcZA7mc6EP9a',
      access_token_secret: 'Mve9AheyoA6vAItjKa07fvdvRYiarQ01pjcs52Nz45yLa',
      timeout_ms: 60*1000
    }

    const client = new Twit(creds)

    client.get('lists/statuses', { owner_screen_name:'ignu', include_rts:'true', slug: 'politics' }, (err, tweets, response) => {
      const x = R.map(d => `${d.user.screen_name}: ${d.text}`)
      console.log(x(tweets))
      store.dispatch(updateTweets(tweets))
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TweetList/>
        </div>
      </Provider>
    );
  }
}

export default App;
