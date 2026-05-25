import { useSearchParams } from "react-router";

const useCustomParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const prep = searchParams.get("prep");

  const cook = searchParams.get("cook");

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  };
  return { search, prep, cook, updateParam, searchParams, setSearchParams };
};

export default useCustomParams;
