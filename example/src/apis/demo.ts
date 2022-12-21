import {getNiceAxiosInstance} from 'nice-axios'

export const pageQueryAllMomentApi = async (data: any) => {
    if (!data.maxIndex) delete data.maxIndex;
    return await getNiceAxiosInstance().get<any>('/feed/vuejs/docs', {
     params: data,
    });
  };
  

  export const uploadFileApi = async (data: any) => {
    return await getNiceAxiosInstance().put<any>('https://nw-dev-s3.s3.ap-northeast-1.amazonaws.com/test/sampleText?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221220T034403Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=86400&X-Amz-Credential=AKIAR4YCGACVPQCR3JZM%2F20221220%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=cfd7da2133c3bb86ad520e757f85c1d86ca709eeac2f11161e065b8f8c02fd91', {
      headers: {
        'Content-Type': 'text/plain'
      },
      onUploadProgress: progressEvent => {
        let complete = (progressEvent.loaded / (progressEvent?.total || 0) * 100 | 0) + '%'
        console.log('上传进度：', complete)
      },
      data,
      meta: {
          // form: true
        }
     });
  }