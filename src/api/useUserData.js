import { useQuery } from "@tanstack/react-query";
import useAuth from "../components/useAuth";

export const UsersData = () => {
    const { user } = useAuth();
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/users?email=${user?.email}`);
            return res.json();
        },
    });
    return [users];
};