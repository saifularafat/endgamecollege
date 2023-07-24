import { useQuery } from "@tanstack/react-query";
export const AdmissionData = () => {
    const { data: admission = [] } = useQuery({
        queryKey: ["admission"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/admissions`);
            return res.json();
        },
    });
    return [admission];
};