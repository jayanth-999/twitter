import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';

export const navigationMenu = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/twitter/home"
    },
    {
        title: "Explore",
        icon: <ExploreIcon />,
        path: "/twitter/explore"
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon />,
        path: "/twitter/notifications"
    },
    {
        title: "Messages",
        icon: <MessageIcon />,
        path: "/twitter/messages"
    },
    {
        title: "Lists",
        icon: <ListAltIcon />,
        path: "/twitter/lists"
    },
    {
        title: "Communities",
        icon: <GroupIcon />,
        path: "/twitter/communities"
    },
    {
        title: "Verified",
        icon: <VerifiedIcon />,
        path: "/twitter/verified"
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        path: "/twitter/profile"

    },
    {
        title: "More",
        icon: <PendingIcon />,
        path: "/twitter/more"
    },
]