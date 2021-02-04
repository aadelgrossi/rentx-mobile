import { AWSError, Request, S3 } from 'aws-sdk'

export interface UploadFileArgs {
  uri: string
  filename: string
  type?: string
}

export interface DeleteFileArgs {
  key: string
}

export type UploadFileResponse = Request<S3.Types.PutObjectOutput, AWSError>
export type DeleteFileResponse = Request<S3.Types.DeleteObjectOutput, AWSError>
