'use-strict';
const ROUTER_PATHS = {
    ROOT: '/',
    BASE: '/V3',
    TEST_API: '/test-api',
    PLUS: '/plus',
    SELF: '/self',
    LIST: '/list'
};module.exports.ROUTER_PATHS = ROUTER_PATHS;

const ROUTER_PARAMS = {
    USERID:"/:userid",
    NAMESPACE:"/:namespace",
    LEVEL:"/:level",
    RESOURCE:"/:resource",
    VERSION : "/V:version",
    ACTION : "/:action"
};exports.ROUTER_PARAMS = ROUTER_PARAMS;

