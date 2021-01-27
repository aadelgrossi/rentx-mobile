import { Credentials, S3 } from 'aws-sdk'

import {
  DeleteFileArgs,
  DeleteFileResponse,
  UploadFileArgs,
  UploadFileResponse
} from './upload.types'

const credentials = new Credentials({
  accessKeyId: process.env.AWS_ACCESS_KEY || 'amazon_access_key',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'secret_access_key'
})

const s3 = new S3({
  credentials,
  region: process.env.AWS_DEFAULT_REGION,
  signatureVersion: 'v4'
})

const uploadFile = async ({
  uri,
  filename,
  type = 'image/jpeg'
}: UploadFileArgs): Promise<UploadFileResponse> => {
  const imageData = await fetch(uri)
  const content = await imageData.blob()

  const params = {
    Bucket: process.env.AWS_S3_BUCKET || 'rentx-s3',
    Key: filename,
    ContentType: type,
    ACL: 'public-read',
    Body: content
  }

  return s3.putObject(params, (err, data) => {
    if (err) {
      console.log('Failed to upload data to bucket', err)
      return err
    } else {
      console.log('Successfully uploaded data to bucket', data)
      return data
    }
  })
}

const deleteFile = async ({
  key
}: DeleteFileArgs): Promise<DeleteFileResponse> => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET || 'rentx-s3',
    Key: key
  }

  return s3.deleteObject(params, (err, data) => {
    if (err) {
      console.log('Cannot delete file')
      return err
    } else {
      console.log('Successfully deleted object in bucket', data)
      return data
    }
  })
}

export { uploadFile, deleteFile }
