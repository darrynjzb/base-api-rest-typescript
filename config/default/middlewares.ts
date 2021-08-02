const strToArrMdws = (str: string) => {
  if (str) {
    return str.split(',');
  }
  return null;
};

export = {
  users: {
    create: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_CREATE_USER || '') || [
      'validate-body-create-user-middleware',
      'create-user-middleware'
    ],
    getById: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_GET_BY_ID_USER || '') || [
      'check-length-user-id-middleware',
      'test-middleware'
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
