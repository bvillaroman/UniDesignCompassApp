/* eslint-disable */
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
    processes {
      items {
        id
        user_id
        name
        date_start
        date_end
      }
      nextToken
    }
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
    processes {
      items {
        id
        user_id
        name
        date_start
        date_end
      }
      nextToken
    }
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
    processes {
      items {
        id
        user_id
        name
        date_start
        date_end
      }
      nextToken
    }
  }
}
`;
export const onCreateProcess = `subscription OnCreateProcess {
  onCreateProcess {
    id
    phaseids {
      items {
        id
        duration
        title
        description
      }
      nextToken
    }
    user_id
    user {
      id
      username
      first_name
      last_name
      email
      password_hash
      phone_number
      processes {
        nextToken
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
    phaseids {
      items {
        id
        duration
        title
        description
      }
      nextToken
    }
    user_id
    user {
      id
      username
      first_name
      last_name
      email
      password_hash
      phone_number
      processes {
        nextToken
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
    phaseids {
      items {
        id
        duration
        title
        description
      }
      nextToken
    }
    user_id
    user {
      id
      username
      first_name
      last_name
      email
      password_hash
      phone_number
      processes {
        nextToken
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
      items {
        id
        timestamp
        text
      }
      nextToken
    }
    duration
    title
    description
    process {
      id
      phaseids {
        nextToken
      }
      user_id
      user {
        id
        username
        first_name
        last_name
        email
        password_hash
        phone_number
      }
      name
      date_start
      date_end
    }
  }
}
`;
export const onUpdatePhase = `subscription OnUpdatePhase {
  onUpdatePhase {
    id
    logs {
      items {
        id
        timestamp
        text
      }
      nextToken
    }
    duration
    title
    description
    process {
      id
      phaseids {
        nextToken
      }
      user_id
      user {
        id
        username
        first_name
        last_name
        email
        password_hash
        phone_number
      }
      name
      date_start
      date_end
    }
  }
}
`;
export const onDeletePhase = `subscription OnDeletePhase {
  onDeletePhase {
    id
    logs {
      items {
        id
        timestamp
        text
      }
      nextToken
    }
    duration
    title
    description
    process {
      id
      phaseids {
        nextToken
      }
      user_id
      user {
        id
        username
        first_name
        last_name
        email
        password_hash
        phone_number
      }
      name
      date_start
      date_end
    }
  }
}
`;
export const onCreateLog = `subscription OnCreateLog {
  onCreateLog {
    id
    timestamp
    text
    phase {
      id
      logs {
        nextToken
      }
      duration
      title
      description
      process {
        id
        user_id
        name
        date_start
        date_end
      }
    }
  }
}
`;
export const onUpdateLog = `subscription OnUpdateLog {
  onUpdateLog {
    id
    timestamp
    text
    phase {
      id
      logs {
        nextToken
      }
      duration
      title
      description
      process {
        id
        user_id
        name
        date_start
        date_end
      }
    }
  }
}
`;
export const onDeleteLog = `subscription OnDeleteLog {
  onDeleteLog {
    id
    timestamp
    text
    phase {
      id
      logs {
        nextToken
      }
      duration
      title
      description
      process {
        id
        user_id
        name
        date_start
        date_end
      }
    }
  }
}
`;
