import { useQuery } from "@tanstack/react-query";
export const AboutEvents = () => {
    const { data: events = [] } = useQuery({
        queryKey: ["events"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/aboutEvents`);
            return res.json();
        },
    });
    return [events];
};