import './single-notification.css'

export default function SingleNotification(notif) {

    return (
        <div className="singleNotification__wrapper">
            <div className="singleNotification__wrapper-icon">
                {notif.orderType === 0 ? <img src='./star.svg' alt="start icon"  width="20px"/>: null}
                {notif.orderType === 1 ? <img src='./check.svg' alt="check icon"  width="20px"/>: null}
                {notif.orderType === 2 ? <img src='./discount.svg' alt="discount icon"  width="20px"/>: null}
            </div>
            <div className="singleNotification__wrapper-content">

                <h1>{notif.title}</h1>
                <p>{notif.desc}</p>
            </div>
            <div className="singleNotification__wrapper-close">
            <img className="close-notif" src="./close.svg" width="14px" onClick={() => notif.removeNotif(notif.id)}/>
            </div>
        </div>
    )
}