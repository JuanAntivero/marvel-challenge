import { http, HttpResponse } from 'msw';
import { mockData } from "./heroes-mock";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const handlers = [
  http.get(`${BASE_URL}/characters`, ({ request }) => {
    const url = new URL(request.url)
    //Get query params
    const searchValue = url.searchParams.get('nameStartsWith');
    
    // simulates api filtering
    const response = searchValue ?
      {
        ...mockData,
        data: {
          results: mockData.data.results.filter((result) =>
            result.name.toLowerCase().startsWith(searchValue.toLowerCase())
          )
        }
      }
      :
      mockData;

    return HttpResponse.json(response)
  })
];