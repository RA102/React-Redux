
export default class FriendListApp extends Component {


    render () {
        const { friendlist: { friendsById }, dispatch } = this.props;
        const actions = bindActionCreators(FriendsActions, dispatch);

        return (
            <div >
                <h1>The FriendList</h1>
            </div>
        );
    }
}