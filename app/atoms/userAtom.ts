"use client"

import { atom, selector, useRecoilState } from "recoil";
import { useEffect } from "react";
import { getCurrentUser } from "../actions/user";

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

export const userAtom = atom({
    key: 'userAtom',
    default: initialUserSelector,
});

