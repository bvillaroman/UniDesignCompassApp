import React, { useState, useEffect } from 'react'
import { Storage, API, graphqlOperation } from 'aws-amplify'
import uuid from 'uuid/v4'
import { createInteraction } from '../graphql/mutations'
import config from '../aws-exports'

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config

const Attachments = () => {
  const [file, updateFile] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)

  function handleChange(event) {
    const { target: { value, files } } = event
    const [image] = files || []
    console.log(files)
    updateFile(image || value)
  }


  useEffect(() => {
    Storage.get('24b3dab9-4084-4cbb-998f-9858b09cba22testss.png')
      .then(result => setThumbnail(result))
      .catch(err => setThumbnail(''));
  }, [])

  async function CreateInteraction() {

    if (file) {
      const { name: fileName, type: mimeType } = file
      const key = `${uuid()}${fileName}`
      const fileForUpload = {
        bucket,
        key,
        region,
      }
      const inputData = { attachments: fileForUpload }

      try {
        await Storage.put(key, file, {
          contentType: mimeType
        })
        await API.graphql(graphqlOperation(createInteraction, { input: inputData }))
        console.log('successfully stored file!')
      } catch (err) {
        console.log('error cannot store file: ', err)
      }
    }
  }

  return (
    <div>
      <h1>Attachments Page</h1>
      <div>
        <input
          label="File to upload"
          type="file"
          onChange={handleChange}
          style={{ margin: '10px 0px' }}
        />
        <button
          onClick={CreateInteraction}
        >
          Save Image</button>
        <img src={thumbnail} />
      </div>
    </div>
  )
}

export default Attachments;