import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

let mockTweets = [
  {id: 1, name: "Nick Pisciotta", body: "My first tweet"},
  {id: 2, name: "Nick Pisciotta", body: "My second tweet"},
  {id: 3, name: "Nick Pisciotta", body: "My third tweet"},
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets}; 
  }
  addTweet(tweetToAdd) {

  }
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetsList tweets={mockTweets} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
  <Main />,
  document.getElementById('react')
  );
};

$(documentReady);
