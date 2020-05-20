import { Twitt } from '../components/twitt';
import { NotificationTwitt } from '../components/notificationTwitt';
import changeList from './output/changeList.ts';
import guidelineList from './output/guidelineList.ts';

type TwittProps = React.ComponentProps<typeof Twitt>;

export const twitts: Omit<TwittProps, 'onPress'>[] = guidelineList;

type NotificationTwittProps = React.ComponentProps<typeof NotificationTwitt>;

export const notificationTweets: Array<NotificationTwittProps> = changeList;
