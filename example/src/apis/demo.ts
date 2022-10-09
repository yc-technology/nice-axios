import {getNiceAxiosInstance} from 'nice-axios'

export const pageQueryAllMomentApi = async (data: any) => {
    if (!data.maxIndex) delete data.maxIndex;
    return await getNiceAxiosInstance().get<any>('/feed/vuejs/docs', {
     params: data,
    });
  };
  