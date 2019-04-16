// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    first_name
    last_name
    email
    password_hash
    projects {
      id
      name
      timestamp
      logs {
        id
        timestamp
        phase_log_json
        attachments
      }
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
    projects {
      id
      name
      timestamp
      logs {
        id
        timestamp
        phase_log_json
        attachments
      }
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
    projects {
      id
      name
      timestamp
      logs {
        id
        timestamp
        phase_log_json
        attachments
      }
    }
  }
}
`;
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
    id
    name
    timestamp
    logs {
      id
      timestamp
      phase_log_json
      attachments
    }
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
    id
    name
    timestamp
    logs {
      id
      timestamp
      phase_log_json
      attachments
    }
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
    id
    name
    timestamp
    logs {
      id
      timestamp
      phase_log_json
      attachments
    }
  }
}
`;
export const onCreateLog = `subscription OnCreateLog {
  onCreateLog {
    id
    timestamp
    phase_log_json
    attachments
  }
}
`;
export const onUpdateLog = `subscription OnUpdateLog {
  onUpdateLog {
    id
    timestamp
    phase_log_json
    attachments
  }
}
`;
export const onDeleteLog = `subscription OnDeleteLog {
  onDeleteLog {
    id
    timestamp
    phase_log_json
    attachments
  }
}
`;
