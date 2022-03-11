import { FC } from 'react';
import { AuthList } from '../../components/auth/auth.list';
import { ObservationItem } from '../../components/observation/observation.item';
import { initialOM } from '../../components/om/om.initial';

export const Overview: FC = () => {
    return <div className="overview">Overview</div>;
};

export const Users: FC = () => {
    return <div className="overview">Users</div>;
};

export const Revenue: FC = () => {
    return <div className="overview">Revenue</div>;
};

export const Order: FC = () => {
    return <div className="overview">Order</div>;
};

export const History: FC = () => {
    return <div className="overview">History</div>;
};

export const Configurations: FC = () => {
    return <div className="overview">Configurations</div>;
};

export const Auth: FC = () => {
    return <div className="overview"><AuthList om={initialOM} username="" email="" password="" /></div>;
};

export const ObservationItemMenu: FC = () => {
    return <div className="overview"><ObservationItem /></div>;
};