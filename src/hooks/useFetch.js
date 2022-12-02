import { useState, useEffect } from 'react';
// zeby zrobic post musimy w naszym customHook dodac metode
export const useFetch = (url, method = 'GET') => {
  ///jako drugi argument podajemy metode i musimy daj jako default metode get
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null); //opcje fetcha get post itd generalnir to co przekazene w fn fetchData

  //twirzymy fn krtora bedzieinvoke jak wyslemy submit
  //argumentem w postadata bedzie nasza recepie w tym przypadku jest tym co chcemy zapisac przekazana jako argument postData

  const postData = (postData) => {
    setOptions({
      method: 'POST', //metoda
      headers: {
        'Content-Type': 'application/json', //typ danych z jakimi robimy POST request(jsob)
      },
      body: JSON.stringify(postData), //nasze dane w tym przypadku recepie, ktore kompilujemy do json
    });
  };
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (fetchOptions) => {
      setIsPending(true);
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
        } else {
          setIsPending(false);
          setError('Could not get data');
        }
      }
    };
    ///majac metode post musimy rozmazyc rozne scenaruisze, jeden klasyczny w ktorym uzuymay metody get i drugi kiedy uzymamy post
    //1. KLASYCZNIE GET CZYLI TO CO JEST BY DEFAUL POPROSTU WYWOLUJEMY FETCH JAK ZAWSZE
    if (method === 'GET') {
      fetchData();
    } //sppawdzmy czy metoda to POST I posiadamy options, wtedy wywyolujemy fn fechdata z opcjami
    if (method === 'POST' && options) {
      fetchData(options);
    }
    return () => {
      controller.abort();
    };
    //cleanupfunction -doczytac i return w useEffect
  }, [url, options, method]); //musimy przekazac opcje i metody zeby bylo nasluchiwanie na nie
  return { data, isPending, error, postData };
};
///posta data przekazujemy w return i bedzie invoke przy submitcie forma
