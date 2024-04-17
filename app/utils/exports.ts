import React from 'react'
import * as HtmlToImg from 'html-to-image'

const exportImage = (
  target: React.MutableRefObject<null>,
  format: string,
  fileName: string,
  quality: number,
) => {
  if (target.current === null) {
    return
  }

  switch (format) {
    case 'svg':
      HtmlToImg.toSvg(target.current, {
        cacheBust: true,
        quality: quality,
      })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = fileName.replaceAll(' ', '-') + '.svg'
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
      break

    case 'jpeg':
      HtmlToImg.toJpeg(target.current, {
        cacheBust: true,
        quality: quality,
      })
        .then((dataUrl: string) => {
          const link = document.createElement('a')
          link.download = fileName.replaceAll(' ', '-') + '.jpeg'
          link.href = dataUrl
          link.click()
        })
        .catch((err: any) => {
          console.log(err)
        })
      break

    default:
      HtmlToImg.toPng(target.current, {
        cacheBust: true,
        quality: quality,
      })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = fileName.replaceAll(' ', '-') + '.png'
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
      break
  }
}

export default exportImage
