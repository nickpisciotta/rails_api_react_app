export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <image className="circle">{this.props.gravatar}</image>
        <span className="title">{this.props.name}</span>
        <time>{this.props.formattedDate}</time>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
