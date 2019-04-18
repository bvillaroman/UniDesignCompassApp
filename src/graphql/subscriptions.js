// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    first_name
    last_name
    email
    password_hash
    processes {
      id
      phase_ids {
        id
        duration
        title
        description
      }
      user_id {
        id
        first_name
        last_name
        email
        password_hash
      }
      name
      date_start
      date_end
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    first_name
    last_name
    email
    password_hash
    processes {
      id
      phase_ids {
        id
        duration
        title
        description
      }
      user_id {
        id
        first_name
        last_name
        email
        password_hash
      }
      name
      date_start
      date_end
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    first_name
    last_name
    email
    password_hash
    processes {
      id
      phase_ids {
        id
        duration
        title
        description
      }
      user_id {
        id
        first_name
        last_name
        email
        password_hash
      }
      name
      date_start
      date_end
    }
  }
}
`;
export const onCreateProcess = `subscription OnCreateProcess {
  onCreateProcess {
    id
    phase_ids {
      id
      logs {
        id
        timestamp
        text
      }
      duration
      title
      description
    }
    user_id {
      id
      first_name
      last_name
      email
      password_hash
      processes {
        id
        name
        date_start
        date_end
      }
    }
    name
    date_start
    date_end
  }
}
`;
export const onUpdateProcess = `subscription OnUpdateProcess {
  onUpdateProcess {
    id
    phase_ids {
      id
      logs {
        id
        timestamp
        text
      }
      duration
      title
      description
    }
    user_id {
      id
      first_name
      last_name
      email
      password_hash
      processes {
        id
        name
        date_start
        date_end
      }
    }
    name
    date_start
    date_end
  }
}
`;
export const onDeleteProcess = `subscription OnDeleteProcess {
  onDeleteProcess {
    id
    phase_ids {
      id
      logs {
        id
        timestamp
        text
      }
      duration
      title
      description
    }
    user_id {
      id
      first_name
      last_name
      email
      password_hash
      processes {
        id
        name
        date_start
        date_end
      }
    }
    name
    date_start
    date_end
  }
}
`;
export const onCreatePhase = `subscription OnCreatePhase {
  onCreatePhase {
    id
    logs {
      id
      timestamp
      text
    }
    duration
    title
    description
  }
}
`;
export const onUpdatePhase = `subscription OnUpdatePhase {
  onUpdatePhase {
    id
    logs {
      id
      timestamp
      text
    }
    duration
    title
    description
  }
}
`;
export const onDeletePhase = `subscription OnDeletePhase {
  onDeletePhase {
    id
    logs {
      id
      timestamp
      text
    }
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
