import { canvasToBlob, blobToBinaryString } from 'blob-util'
import md5 from 'md5'

export default async canvas => {
  const blob = await canvasToBlob(canvas, 'image/jpeg')
  return { md5: md5(await blobToBinaryString(blob)), blob }
}
