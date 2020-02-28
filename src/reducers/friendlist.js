import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';



export default function friends(state = initialState, action) {
    switch (action.type) {

        case types.ADD_FRIEND:
            const newId = this.state.friends[state.friends.length - 1] + 1;
            return {
                friends: this.state.friends.concat(newId),
                friendsById: {
                    ...state.friendsById,
                    [newId]: {
                        id: newId,
                        name: action.name
                    }
                }
            };

        case types.DELETE_FRIEND:
            return {
                ...state,
                friends: this.state.friends.filter(id => id !== action.id),
                friendsById: omit(state.friendsById, action.id)
            };
        case types.STAR_FRIEND:
            return {
                ...state,
                friendsById: mapValues(this.state.friendsById, (friend) => {
                    return friend.id === action.id ? assign({}, friend, {starred: !friend.starred}) : friend
                })
            };
        default:
            return false;
    }
}