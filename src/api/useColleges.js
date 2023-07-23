// import { useQuery } from "@tanstack/react-query"

// export const CollegesCart = () => {
//     const { data: Colleges = [] } = useQuery({
//         queryKey: ['Colleges'],
//         queryFn: async () => {
//             const res = await fetch(`${process.meta.env.VITE_API_URL}/colleges`)
//             return res.json(),
//         },
//     });
//     return [Colleges]
// }

import { useQuery } from "@tanstack/react-query";
export const CollegesCart = () => {
    const { data: colleges = [] } = useQuery({
        queryKey: ["colleges"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/colleges`);
            return res.json();
        },
    });
    return [colleges];
};