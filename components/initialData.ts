interface Notification {
  id: number
  type: string,
  initiatorName: string,
  initiatorAvatarUrl: string,
  timePassed: string
  read: boolean
}

interface FollowNotification
  extends Notification {
  type: 'follow' | 'followGroup'
  followAction: 'follow' | 'unfollow'
}

interface FollowGroupNotification
  extends FollowNotification {
  type: 'followGroup'
  targetGroupName: string;
}

interface CommentPictureNotification
  extends Notification {
  type: 'comment'
  targetThumbnailUrl: string
}

interface ReactionNotification
  extends Notification {
  type: 'reaction'
  targetPostName: string
}

interface PrivateMessageNotification
  extends Notification {
  type: 'privateMessage'
  messageText: string
}

const initialData: Notification[] = [
  {
    id: 0,
    type: 'reaction',
    initiatorName: 'Mark Webber',
    initiatorAvatarUrl: '/images/avatar-mark-webber.webp',
    timePassed: '1m',
    read: false,
    targetPostName: 'My first tournament today!'
  } as ReactionNotification,
  {
    id: 1,
    type: 'follow',
    initiatorName: 'Angela Gray',
    initiatorAvatarUrl: '/images/avatar-angela-gray.webp',
    timePassed: '5m',
    read: false,
    followAction: 'follow',
  } as FollowNotification,
  {
    id: 2,
    type: 'followGroup',
    initiatorName: 'Jacob Thompson',
    initiatorAvatarUrl: '/images/avatar-jacob-thompson.webp',
    timePassed: '1 day',
    read: false,
    followAction: 'follow',
    targetGroupName: 'Chess Club'
  } as FollowGroupNotification,
  {
    id: 3,
    type: 'privateMessage',
    initiatorName: 'Rizky Hasanuddin',
    initiatorAvatarUrl: '/images/avatar-rizky-hasanuddin.webp',
    timePassed: '5 days',
    read: true,
    messageText: "Hello, thanks for setting up the Chess Club. I've been a member for a few" +
    " weeks now and I'm already having lots of fun and improving my game."
  } as PrivateMessageNotification,
  {
    id: 4,
    type: 'comment',
    initiatorName: "Kimberly Smith",
    initiatorAvatarUrl: '/images/avatar-kimberly-smith.webp',
    timePassed: '1 week',
    read: true,
    targetThumbnailUrl: '/images/image-chess.webp'
  } as CommentPictureNotification,
  {
    id: 5,
    type: 'reaction',
    initiatorName: 'Nathan Peterson',
    initiatorAvatarUrl: '/images/avatar-nathan-peterson.webp',
    timePassed: '2 weeks',
    read: true,
    targetPostName: '5 end-game strategies to increase your win rate'
  } as ReactionNotification,
  {
    id: 6,
    type: 'followGroup',
    initiatorName: 'Anna Kim',
    initiatorAvatarUrl: '/images/avatar-anna-kim.webp',
    timePassed: '2 weeks',
    read: true,
    followAction: 'unfollow',
    targetGroupName: 'Chess Club'
  } as FollowGroupNotification
]

export default initialData;