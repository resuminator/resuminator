import mixpanel from "mixpanel-browser";
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL);

const mp = mixpanel;
export default mp;
