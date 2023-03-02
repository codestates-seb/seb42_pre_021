import customAxios from 'api/baseURL';

// ?keyword=${data.keyword}&page=${data.page}&size=${data.size}&sortDir=${data.sortDir}&sortBy=${data.sortBy}

const searchQuestion = async data => {
  const res = await customAxios.get(
    `/questions/search?keyword=${data.keyword}&page=${data.page}&size=${data.size}&sortDir=${data.sortDir}&sortBy=${data.sortBy}`
  );
  return res.data;
};

export default searchQuestion;
