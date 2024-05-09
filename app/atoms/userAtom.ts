import { atom, selector, useRecoilState } from "recoil";
import { useEffect } from "react";
import { getCurrentUser } from "../actions/user";

// Define a selector to asynchronously fetch initial user data
const initialUserSelector = selector({
    key: 'initialUserSelector',
    get: async ({ get }) => {
        const token = localStorage.getItem("token");
        if (token) {
            return await getCurrentUser(token);
        } else {
            return {
                username: "",
                name: "",
                id: 0
            };
        }
    },
});

// Define the user atom using the initial data fetched by the selector
export const userAtom = atom({
    key: 'userAtom',
    default: initialUserSelector,
});

// export const UserInitializer = () => {
//     const [user, setUser] = useRecoilState(userAtom);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             getCurrentUser(token)
//                 .then(response => {
//                     setUser(response);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching current user:", error.message);
//                 });
//         }
//     }, [setUser]);

//     return null;
// };
