import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import './styles/Recommended.css'
import './styles/Notifications.css'
import SingleNotification from './Notifications/SingleNotification'

const notificationURL = "https://sw-coding-challenge.herokuapp.com/api/v1/notifications"
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs";

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function Notification() {
    const [notifications, setNotifications] = useState([]);
    const [responseError, setResponseError] = useState('default')
    const fetchNotifications = useCallback(async () => {
    // fetch and set products
    try {
        const result = await axios.get(`${notificationURL}`);
        // add an ID to each object for key mapping and random orderType for icon referencing.
        for (var i = 0; i < result.data.d.length; i++) {
            result.data.d[i].id = i;
            result.data.d[i].orderType = Math.floor(Math.random() * 3);;
            // console.log(result.data.d[i])
        }
        // console.log(result.data.d)
        // limiting notification listed to 10
        setNotifications(result.data.d.splice(0, 10).map((product) => {
            return product
          }))
        // setNotifications(result.data.d)
    } catch (error) {
        setResponseError(error.message);
    }
    });


    useEffect(() => {
        fetchNotifications();
    }, []);

    const removeNotif = (id) =>  {
        setNotifications(notifications.filter((singleNotif) => singleNotif.id !== id )
    )}

    return (
        <div className="notifications__wrapper">
            {notifications.length == 0 ? <h1>No notifications :-p</h1> : null}
            {notifications.map((notif, index) => (
                <SingleNotification 
                    key={index} 
                    title={notif.title}
                    desc={notif.description} 
                    id={notif.id}
                    orderType={notif.orderType}
                    removeNotif={removeNotif}
                />
            ))}
        </div>
    );
}