import { useQuery } from "@tanstack/react-query";
export const Researchs = () => {
    const { data: research = [] } = useQuery({
        queryKey: ["research"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/researchs`);
            return res.json();
        },
    });
    return [research];
};