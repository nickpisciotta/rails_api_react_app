import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedTweets(rawTweets) {
      AppDispatcher.dispatch({
        actionType: 'RECEIVED_TWEETS'
        rawTweets
      })
  }
}
