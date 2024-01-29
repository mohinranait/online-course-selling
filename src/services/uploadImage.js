import { publicInstance } from "../hooks/useAxiosPublic";

export const singleImage = async (image) => {
    const formImage = new FormData()
    formImage.append('image', image)
    const {data} = await publicInstance.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_API}`, formImage)
    return data.data.display_url;
}