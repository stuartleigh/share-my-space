export const getUsers = state => state.get('users');

export const getUser = id => state => state.getIn(['users', id]);
