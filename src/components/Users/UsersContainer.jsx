import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress, getUsers } from '../../redux/UsersReducer';
import Users from "./Users";
import Preloader from "./../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgerss,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUserS

} from "../../redux/usersSelectors";



class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }
  
    onPageChanget = (pageNumber) => {

      this.props.getUsers(pageNumber, this.props.pageSize);
     
    };
    render() {
      return (
        <>
          <div> {this.props.isFetching ? <Preloader /> : null}</div>
  
          <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onPageChanget={this.onPageChanget}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgerss={this.props.followingInProgerss}
          />
        </>
      );
    }
  }



// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgerss: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {

    return {

        users: getUserS(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgerss: getFollowingInProgerss(state)
    }
}


export default connect(mapStateToProps, {follow,unfollow,setUsers,
    setCurrentPage,setUsersTotalCount,toggleIsFetching, 
    toggleFollowingProgress, getUsers})
(UsersContainer);