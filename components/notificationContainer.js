import {useReducer} from 'react'
import Link from 'next/link';
import Head from 'next/head';
import initialData from "./initialData";
import styles from './notificationContainer.module.scss';

function notifReducer(notifications, action) {
  if (action.type === 'markAsRead') {
    return notifications.map(n => {
      if (!n.read) {
        return {
          ...n,
          read: true
        }
      } else return n;
    })
  }
}

const link = '#';

export default function NotificationContainer() {
  const [notifications, dispatch] = useReducer(notifReducer, initialData);
  const notifCount = notifications.filter(n => !n.read).length;

  return <div className={styles.container}>
  <Head>
    <title>Notifications: {notifCount} New</title>
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"></link>
  </Head>
    <div className={styles.heading}>
      <h1>
        Notifications{'\u00A0\u00A0'}
        <span className={styles.counter}>
          {notifCount}
        </span>
      </h1>
      <button className={styles.readButton} onClick={() => dispatch({type:'markAsRead'})}>
        Mark all as read
      </button>
    </div>
    <ul className={styles.list}>
      {notifications.map(n => <NotificationPanel  key={n.id} notification={n} />)}
    </ul>
  </div>
}

function NotificationPanel({notification}) {
  let content;

  switch(notification.type) {
    case 'reaction':
      content = <>reacted to your recent post <Link href={link} className={styles.postLink}>{notification.targetPostName}</Link></>
      break;
    case 'comment':
      content = <>commented on your picture</>
      break;
    case 'privateMessage':
      content = <>sent you a private message</>
      break;
    case 'follow':
      content = <>{notification.followAction === 'follow' ? 'followed' : 'unfollowed'} you</>
      break;
    case 'followGroup':
      content = <>{notification.followAction === 'follow' ? 'has joined your' : 'left the'} group <Link href={link} className={styles.groupLink}>{notification.targetGroupName}</Link></>
      break;
    default:
      content = <></>
      break;
  }

  return <div className={`${styles.notifPanel} ${!notification.read && styles.unread}`}>
    <div className={styles.notifBox}>
      <img className={styles.avatarImg} src={notification.initiatorAvatarUrl} />

      <div className={styles.notifContent}>
        <section>
          <Link href={link} className={styles.userLink}>{notification.initiatorName}</Link>
          {' '}
          {content}
          {!notification.read && <>{'\u00a0\u00a0'}<span className={styles.notifCircle} /></>}
        </section>

        <section className={styles.timeSpan}>
          {notification.timePassed} ago
        </section>

        {notification.type === 'privateMessage' && 
          <Link href={link} className={styles.linkWrapper}>
            <div className={styles.privateMessage}>
              {notification.messageText}
            </div>
          </Link>
        }
      </div>
      
      {notification.type === 'comment' &&
        <Link href={link} className={styles.linkWrapper}>
          <img className={styles.commentImg} src={notification.targetThumbnailUrl} />
        </Link>
      }
    </div>
  </div>

}