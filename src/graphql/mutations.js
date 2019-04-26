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
export const createProcess = `mutation CreateProcess($input: CreateProcessInput!) {
  createProcess(input: $input) {
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
export const updateProcess = `mutation UpdateProcess($input: UpdateProcessInput!) {
  updateProcess(input: $input) {
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
export const deleteProcess = `mutation DeleteProcess($input: DeleteProcessInput!) {
  deleteProcess(input: $input) {
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
export const createPhase = `mutation CreatePhase($input: CreatePhaseInput!) {
  createPhase(input: $input) {
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
export const updatePhase = `mutation UpdatePhase($input: UpdatePhaseInput!) {
  updatePhase(input: $input) {
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
export const deletePhase = `mutation DeletePhase($input: DeletePhaseInput!) {
  deletePhase(input: $input) {
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
export const createLog = `mutation CreateLog($input: CreateLogInput!) {
  createLog(input: $input) {
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
export const updateLog = `mutation UpdateLog($input: UpdateLogInput!) {
  updateLog(input: $input) {
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
export const deleteLog = `mutation DeleteLog($input: DeleteLogInput!) {
  deleteLog(input: $input) {
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
