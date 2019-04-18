// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    first_name
    last_name
    email
    password_hash
    phone_number
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    first_name
    last_name
    email
    password_hash
    phone_number
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    first_name
    last_name
    email
    password_hash
    phone_number
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
export const createProcess = `mutation CreateProcess($input: CreateProcessInput!) {
  createProcess(input: $input) {
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
      username
      first_name
      last_name
      email
      password_hash
      phone_number
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
export const updateProcess = `mutation UpdateProcess($input: UpdateProcessInput!) {
  updateProcess(input: $input) {
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
      username
      first_name
      last_name
      email
      password_hash
      phone_number
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
export const deleteProcess = `mutation DeleteProcess($input: DeleteProcessInput!) {
  deleteProcess(input: $input) {
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
      username
      first_name
      last_name
      email
      password_hash
      phone_number
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
export const createPhase = `mutation CreatePhase($input: CreatePhaseInput!) {
  createPhase(input: $input) {
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
export const updatePhase = `mutation UpdatePhase($input: UpdatePhaseInput!) {
  updatePhase(input: $input) {
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
export const deletePhase = `mutation DeletePhase($input: DeletePhaseInput!) {
  deletePhase(input: $input) {
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
export const createLog = `mutation CreateLog($input: CreateLogInput!) {
  createLog(input: $input) {
    id
    timestamp
    text
  }
}
`;
export const updateLog = `mutation UpdateLog($input: UpdateLogInput!) {
  updateLog(input: $input) {
    id
    timestamp
    text
  }
}
`;
export const deleteLog = `mutation DeleteLog($input: DeleteLogInput!) {
  deleteLog(input: $input) {
    id
    timestamp
    text
  }
}
`;
