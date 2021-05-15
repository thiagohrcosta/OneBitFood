import useSWR from "swr";

export default function getRestaurant(id) {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `${process.env.apiUrl}/api/restaurants/${id}`,
    fetcher,
    { revalidateOnFocus: false }
  );
  return {
    restaurant: data,
    isLoading: !error && !data,
    isError: error,
  };
}