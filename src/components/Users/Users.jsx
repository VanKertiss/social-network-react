import React from "react";
import HS from "./users.module.css";
import userPhoto from "./../../img/avatars/no_foto.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={HS.main}>
            {pages.map((p) => {
                return (
                    <span
                        className={props.currentPage === p && HS.selected}
                        onClick={(e) => {
                            props.onPageChanget(p);
                        }}
                    >
            {p + " "}
          </span>
                );
            })}

            {props.users.map((u) => (
                <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/Main/" + u.id}>
                <img
                    src={u.photos.small ? u.photos.small : userPhoto}
                    className={HS.UserPhoto}
                    alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? <button disabled={props.followingInProgerss
                      .some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}>
                      Unfollow</button>
                  : <button disabled={props.followingInProgerss.some(id => id === u.id)}
                            onClick={() => {
                                props.follow(u.id)
                            }}>
                      Follow</button>
              }
            </div>
          </span>
                    <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.sity"}</div>
              <div>{"u.location.contry"}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
