import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"
import TweetStore from "./stores/TweetStore"

import TweetActions from "./actions/TweetActions"
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  // formattedTweets(tweetsList) {

  // }

  addTweet(tweetToAdd) {
    // $.post("/tweets", {body: tweetToAdd})
    // .success( savedTweet => {
    //   let newTweetsList = this.state.tweetsList;
    //   newTweetsList.unshift(savedTweet);
    //   this.setState(this.formattedTweedfdts(newTweetsList));
    // })
    // .error(error => console.log(error));
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange)
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange)
  }

_onChange() {
  this.setState(getAppState());
}
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(<Main />, reactNode);
  }
};

$(documentReady);
