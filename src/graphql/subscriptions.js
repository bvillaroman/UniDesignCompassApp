// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    username
    first_name
    last_name
    email
    password_hash
    phone_number
    processes
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    username
    first_name
    last_name
    email
    password_hash
    phone_number
    processes
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    username
    first_name
    last_name
    email
    password_hash
    phone_number
    processes
  }
}
`;
export const onCreateProcess = `subscription OnCreateProcess {
  onCreateProcess {
    id
    phase_ids
    user_id
    name
    date_start
    date_end
  }
}
`;
export const onUpdateProcess = `subscription OnUpdateProcess {
  onUpdateProcess {
    id
    phase_ids
    user_id
    name
    date_start
    date_end
  }
}
`;
export const onDeleteProcess = `subscription OnDeleteProcess {
  onDeleteProcess {
    id
    phase_ids
    user_id
    name
    date_start
    date_end
  }
}
`;
export const onCreatePhase = `subscription OnCreatePhase {
  onCreatePhase {
    id
    logs
    duration
    title
    description
  }
}
`;
export const onUpdatePhase = `subscription OnUpdatePhase {
  onUpdatePhase {
    id
    logs
    duration
    title
    description
  }
}
`;
export const onDeletePhase = `subscription OnDeletePhase {
  onDeletePhase {
    id
    logs
    duration
    title
    description
  }
}
`;
export const onCreateLog = `subscription OnCreateLog {
  onCreateLog {
    id
    timestamp
    text
  }
}
`;
export const onUpdateLog = `subscription OnUpdateLog {
  onUpdateLog {
    id
    timestamp
    text
  }
}
`;
export const onDeleteLog = `subscription OnDeleteLog {
  onDeleteLog {
    id
    timestamp
    text
  }
}
`;
