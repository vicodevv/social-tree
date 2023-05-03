import { create } from "lodash";
import Link from "../models/link.model"

export const LinkService = {
    getAllLinks: async () => {
        return await Link.find();
    },

    createLink: async (link: any) => {
        return await Link.create(link);
    },

    getLinkById: async (id: string) => {
        return await Link.findById(id);
    },

    updateLinkById: async (id: string, link: any) => {
        return await Link.findByIdAndUpdate(id, link, {new: true});
    },

    deleteLink: async (id: string) => {
        return await Link.findByIdAndDelete(id);
    }   
}