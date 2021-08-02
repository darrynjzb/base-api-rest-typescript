"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = void 0;
const strToArrMdws = (str) => {
    if (str) {
        return str.split(',');
    }
    return null;
};
exports.middlewares = {
    users: {
        create: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_CREATE_USER || '') || [
            'validate-body-create-user-middleware',
            'create-user-middleware'
        ],
        getById: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_GET_BY_ID_USER || '') || [
            'check-length-user-id-middleware',
            'get-user-by-id-middleware'
        ],
        update: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_UPDATE_BY_ID_USER || '') || [
            'check-length-user-id-middleware',
            'update-user-by-id-middleware'
        ],
        delete: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_DELETE_BY_ID_USER || '') || [
            'check-length-user-id-middleware',
            'delete-user-by-id-middleware'
        ]
    }
};
